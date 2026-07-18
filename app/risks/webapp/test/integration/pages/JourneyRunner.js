sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/risks/test/integration/pages/RisksList.gen",
	"ns/risks/test/integration/pages/RisksObjectPage.gen"
], function (JourneyRunner, RisksListGenerated, RisksObjectPageGenerated) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/risks') + '/test/flp.html#app-preview',
        pages: {
			onTheRisksListGenerated: RisksListGenerated,
			onTheRisksObjectPageGenerated: RisksObjectPageGenerated
        },
        async: true
    });

    return runner;
});

