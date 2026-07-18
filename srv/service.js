const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    
    const bupa = await cds.connect.to('BusinessPartnerA2X');

    // ========================================================================
    // 1. Delegación Segura (El Escudo contra el error 502)
    // ========================================================================
    this.on('READ', ['BusinessPartners', 'A_BusinessPartner'], async (req) => {
        
        // Si Fiori envía una búsqueda global ($search) al escribir a mano, 
        // la interceptamos y la borramos para evitar que S/4HANA colapse.
        if (req.query.SELECT.search) {
            delete req.query.SELECT.search;
        }
        
        return bupa.run(req.query);
    });

    // ========================================================================
    // 2. Data Mashup Correcto (Para llenar los campos vacíos)
    // ========================================================================
    this.after('READ', 'Risks', async (risks, req) => {
        const risksArray = Array.isArray(risks) ? risks : [risks];
        
        const bpIDs = risksArray
                        .filter(risk => risk.supplier_BusinessPartner)
                        .map(risk => risk.supplier_BusinessPartner);
                        
        if (bpIDs.length === 0) return;

        const bps = await bupa.run(
            SELECT.from('A_BusinessPartner')
                  .where({ BusinessPartner: bpIDs })
        );

        risksArray.forEach(risk => {
            const bpInfo = bps.find(b => b.BusinessPartner === risk.supplier_BusinessPartner);
            if (bpInfo) {
                risk.supplier = {
                    BusinessPartner: bpInfo.BusinessPartner,
                    BusinessPartnerFullName: bpInfo.BusinessPartnerFullName,
                    BusinessPartnerIsBlocked: bpInfo.BusinessPartnerIsBlocked
                };
            }
        });
    });

});