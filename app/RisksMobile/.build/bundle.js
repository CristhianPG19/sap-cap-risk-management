(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/RisksMobile/i18n/i18n.properties"
/*!************************************************************!*\
  !*** ./build.definitions/RisksMobile/i18n/i18n.properties ***!
  \************************************************************/
(module) {

module.exports = "Draft_DraftAdministrativeData=Draft_DraftAdministrativeData\nDraft_DraftUUID=Draft_DraftUUID\nDraft_CreationDateTime=Draft_CreationDateTime\nDraft_CreatedByUser=Draft_CreatedByUser\nDraft_DraftIsCreatedByMe=Draft_DraftIsCreatedByMe\nDraft_LastChangeDateTime=Draft_LastChangeDateTime\nDraft_LastChangedByUser=Draft_LastChangedByUser\nDraft_InProcessByUser=Draft_InProcessByUser\nDraft_DraftIsProcessedByMe=Draft_DraftIsProcessedByMe\nAction_OK=OK\nAction_Cancel=Cancel\nAction_Yes=Yes\nAction_No=No\nAction_Now=Now\nAction_Later=Later\nAction_Generic_Message=Message\nAction_Confirmation_Title=Confirmation\nAction_Delete_Confirm_Message=Delete current entity?\nAction_Entity_Created=Entity created\nAction_Entity_Updated=Entity updated\nAction_Entity_Deleted=Entity deleted\nAction_Stream_Uploaded=Stream uploaded\nAction_Create_Failure=Create entity failure\nAction_Update_Failure=Update entity failure\nAction_Delete_Failure=Delete entity failure\nAction_UploadStream_Failure=Upload stream failure\nAction_RequiredFields_Failure=Please fill in all required fields\nAction_Draft_Edit=Draft Edit\nAction_Draft_Saved=Draft Saved\nAction_Draft_Discarded=Draft Discarded\nAction_Init_Activity=Downloading...\nAction_Init_Success=Application services initialized\nAction_Init_Failure=Failed to initialize application data service\nAction_Sync_Started=Upload in progress...\nAction_Sync_Completed=Sync completed\nAction_Sync_Failure=Sync offline data service failure\nAction_Download_Started=Download in progress...\nAction_Download_Successful=Download Successful\nAction_Close_Success=Data service closed successfully\nAction_Close_Failure=Failure closing data service\nAction_ErrorArchive_Upload_Failed=Upload failed!\nAction_ErrorArchive_View_Errors=View Errors\nAction_Log_Upload_Activity=Uploading...\nAction_Log_Upload_Started=Uploading Log Files...\nAction_Log_Upload_Completed=Logs Uploaded\nAction_Log_Uploaded=Log File Uploaded\nAction_Log_Upload_Failed_Title=Log Upload Failed\nAction_Log_Upload_Failed_Message=Uploading log file failed with error\nAction_App_Update_Checking=Checking for Updates...\nAction_App_Update_Complete=Update application complete\nAction_App_Update_Failed=Failed to update application\nAction_App_Update_Available_Title=New Version Available!\nAction_App_Update_Available_Message=A new version of the application is now ready to apply. Do you want to update to this version?\nAction_Reset_Title=Reset\nAction_Reset_Message=This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?\nAction_Menu_Sync_Changes=Sync Changes\nAction_Menu_Support=Support\nAction_Menu_Check_Updates=Check for Updates\nAction_Menu_About=About\nAction_Menu_Reset=Reset\nAction_Menu_Logout=Logout\nMitigations=Mitigations\nMitigations_Detail=Mitigations Detail\nCreate_Mitigations_Detail=Create Mitigations Detail\nUpdate_Mitigations_Detail=Update Mitigations Detail\nCreate_Risks=Create Risks\nRisks=Risks\nRisks_Detail=Risks Detail\nCreate_Risks_Detail=Create Risks Detail\nUpdate_Risks_Detail=Update Risks Detail"

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Application/AppUpdateFailure.js"
/*!*****************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Application/AppUpdateFailure.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/RisksMobile/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Application/AppUpdateSuccess.js"
/*!*****************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Application/AppUpdateSuccess.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/RisksMobile/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/RisksMobile/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Application/ClientIsMultiUserMode.js"
/*!**********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Application/ClientIsMultiUserMode.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Application/GetClientSupportVersions.js"
/*!*************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Application/GetClientSupportVersions.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Application/GetClientVersion.js"
/*!*****************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Application/GetClientVersion.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Application/OnWillUpdate.js"
/*!*************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Application/OnWillUpdate.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/RisksMobile/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Service/CloseOffline.action').then(success => Promise.resolve(success), failure => Promise.reject('Offline Odata Close Failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Application/ResetAppSettingsAndLogout.js"
/*!**************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/RisksMobile/Actions/Application/Reset.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Logging/LogLevels.js"
/*!******************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Logging/LogLevels.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Logging/SetTraceCategories.js"
/*!***************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Logging/SetTraceCategories.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Logging/SetUserLogLevel.js"
/*!************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Logging/SetUserLogLevel.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  var logger;
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    if (logger) {
      logger.log(String(exception), 'Error');
    } else {
      // eslint-disable-next-line no-console
      console.log('Error: ' + String(exception));
    }
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Logging/ToggleLogging.js"
/*!**********************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Logging/ToggleLogging.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  var logger;
  try {
    logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    if (logger) {
      logger.log(String(exception), 'Error');
    } else {
      // eslint-disable-next-line no-console
      console.log('Error: ' + String(exception));
    }
    return undefined;
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Logging/TraceCategories.js"
/*!************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Logging/TraceCategories.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Logging/UserLogSetting.js"
/*!***********************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Logging/UserLogSetting.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/ErrorArchive_CheckForSyncError.js"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/ErrorArchive_CheckForSyncError.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  return context.count('/RisksMobile/Services/RiskManagementService.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/RisksMobile/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
    return undefined;
  });
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_Cancel.js"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_Cancel.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/DraftDiscardEntity.action',
      'Properties': {
        'Target': {
          'EntitySet': 'Mitigations'
        },
        'OnSuccess': '/RisksMobile/Actions/CloseModalPage_Cancel.action'
      }
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/CloseModalPage_Cancel.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateEntity.js"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateEntity.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
      let newEntity = JSON.parse(result.data);
      return clientAPI.executeAction({
        'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
        'Properties': {
          'Target': {
            'EntitySet': 'Mitigations',
            'ReadLink': newEntity['@odata.readLink']
          }
        }
      });
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateEntity.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateRisks.js"
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateRisks.js ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateRelatedEntity)
/* harmony export */ });
function CreateRelatedEntity(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
    let readLink = clientAPI.binding['@odata.readLink'];
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateRisks.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
      return clientAPI.executeAction({
        'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
        'Properties': {
          'Target': {
            'EntitySet': 'Mitigations',
            'ReadLink': readLink
          }
        }
      });
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateRisks.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_DeleteConfirmation.js"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_DeleteConfirmation.js ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/RisksMobile/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_UpdateEntity.js"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_UpdateEntity.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
      return clientAPI.executeAction({
        'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
        'Properties': {
          'Target': {
            'EntitySet': 'Mitigations'
          }
        }
      });
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.js"
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.js ***!
  \***************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToCreate)
/* harmony export */ });
function NavToCreate(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/DraftEditEntity.action',
      'Properties': {
        'Target': {
          'EntitySet': 'Mitigations'
        },
        'OnSuccess': '/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action'
      }
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_Edit.js"
/*!********************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_Edit.js ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Mitigations')) {
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/DraftEditEntity.action',
      'Properties': {
        'Target': {
          'EntitySet': 'Mitigations'
        },
        'OnSuccess': '/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action'
      }
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js"
/*!********************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/DraftEditEntity.action',
      'Properties': {
        'Target': {
          'EntitySet': 'Risks'
        },
        'OnSuccess': '/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action'
      }
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_Cancel.js"
/*!*****************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_Cancel.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/DraftDiscardEntity.action',
      'Properties': {
        'Target': {
          'EntitySet': 'Risks'
        },
        'OnSuccess': '/RisksMobile/Actions/CloseModalPage_Cancel.action'
      }
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/CloseModalPage_Cancel.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js"
/*!***********************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
      let newEntity = JSON.parse(result.data);
      return clientAPI.executeAction({
        'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
        'Properties': {
          'Target': {
            'EntitySet': 'Risks',
            'ReadLink': newEntity['@odata.readLink']
          }
        }
      });
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/RisksMobile/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js"
/*!***********************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
  if (clientAPI.getODataProvider('/RisksMobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
    return clientAPI.executeAction({
      'Name': '/RisksMobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action',
      'Properties': {
        'OnSuccess': ''
      }
    }).then(result => {
      return clientAPI.executeAction({
        'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
        'Properties': {
          'Target': {
            'EntitySet': 'Risks'
          }
        }
      });
    });
  } else {
    return clientAPI.executeAction('/RisksMobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action');
  }
}

/***/ },

/***/ "./build.definitions/RisksMobile/Rules/Service/Initialize.js"
/*!*******************************************************************!*\
  !*** ./build.definitions/RisksMobile/Rules/Service/Initialize.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _RiskManagementService = context.executeAction('/RisksMobile/Actions/RiskManagementService/Service/InitializeOffline.action');

  //You can add more service initialize actions here

  // The Initialize<Online|Offline>.action wires its own OnSuccess (success
  // toast) and OnFailure (failure banner) handlers. We propagate the
  // rejection so the caller of Initialize() — typically the Application's
  // OnLaunch chain — can react to a failed initialization rather than
  // proceeding as if everything were fine. Older revisions of this
  // template returned `false` from the catch, which silently swallowed
  // initialization errors (MDK-18173 review section 1.2).
  return Promise.all([_RiskManagementService]);
}

/***/ },

/***/ "./build.definitions/RisksMobile/Styles/Styles.css"
/*!*********************************************************!*\
  !*** ./build.definitions/RisksMobile/Styles/Styles.css ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/RisksMobile/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./build.definitions/RisksMobile/Styles/Styles.less"
/*!**********************************************************!*\
  !*** ./build.definitions/RisksMobile/Styles/Styles.less ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/RisksMobile/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./build.definitions/RisksMobile/Styles/Styles.nss"
/*!*********************************************************!*\
  !*** ./build.definitions/RisksMobile/Styles/Styles.nss ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************************************************************************************!*\
  !*** ../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************************************************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************************************************************************************!*\
  !*** ../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************************************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/Application/About.page"
/*!********************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/Application/About.page ***!
  \********************************************************************/
(module) {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/RisksMobile/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/RisksMobile/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/RisksMobile/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/RisksMobile/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/RisksMobile/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/Application/Support.page"
/*!**********************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/Application/Support.page ***!
  \**********************************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/RisksMobile/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/RisksMobile/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/RisksMobile/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/RisksMobile/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/RisksMobile/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/Application/UserActivityLog.page"
/*!******************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/Application/UserActivityLog.page ***!
  \******************************************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/RisksMobile/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/RisksMobile/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/RisksMobile/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/RisksMobile/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/RisksMobile/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/RisksMobile/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/RisksMobile/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"},"OnLoaded":"/RisksMobile/Rules/Logging/UserLogSetting.js"}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/ErrorArchive/ErrorArchive_Detail.page"
/*!***********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \***********************************************************************************/
(module) {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","ActionBar":{"Caption":"Details","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/ErrorArchive/ErrorArchive_List.page"
/*!*********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \*********************************************************************************/
(module) {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/RisksMobile/Services/RiskManagementService.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/RisksMobile/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false,"_Type":"ObjectTable.Type.ObjectCell"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","ActionBar":{"Caption":"Error List","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/Main.page"
/*!*******************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/Main.page ***!
  \*******************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable_RiskManagementService","Header":{"_Type":"SectionCommon.Type.Header","_Name":"RiskManagement","AccessoryType":"None","UseTopPadding":true,"Caption":"Risk Management"},"Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton0","Title":"Mitigations","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton1","Title":"Risks","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_List.action"}],"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"}}]}],"_Type":"Page","_Name":"Page0","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"User Menu","Width":18,"Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/RisksMobile/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Main","PreferredCaptionSize":"Large"}}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Create.page"
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Create.page ***!
  \*******************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/RisksMobile/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateEntity.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Mitigations_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"created At","_Name":"createdAt","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"created By","_Name":"createdBy","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"owner","_Name":"owner","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"timeline","_Name":"timeline","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Mitigations_Create"}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_CreateRisks.page"
/*!************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_CreateRisks.page ***!
  \************************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/RisksMobile/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateRisks.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Risks)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"prio","_Name":"prio","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"descr","_Name":"descr","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"impact","KeyboardType":"Number","_Name":"impact","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"criticality","KeyboardType":"Number","_Name":"criticality","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supplier Business Partner","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{BusinessPartner}","ReturnValue":"{BusinessPartner}","Target":{"EntitySet":"A_BusinessPartner","Service":"/RisksMobile/Services/RiskManagementService.service"}},"_Name":"supplier_BusinessPartner","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Mitigations_CreateRisks"}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Detail.page"
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Detail.page ***!
  \*******************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/RisksMobile/Services/RiskManagementService.service","EntitySet":"Mitigations","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DetailPopover.action","Position":"Right","Caption":"More","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Mitigations_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ID}","Subhead":"{createdAt}","BodyText":"","Footnote":"{description}","Description":"{createdBy}","StatusText":"{owner}","StatusImage":"","SubstatusImage":"","SubstatusText":"{timeline}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"created At","Value":"{createdAt}","_Type":"KeyValue.Type.Item"},{"KeyName":"created By","Value":"{createdBy}","_Type":"KeyValue.Type.Item"},{"KeyName":"description","Value":"{description}","_Type":"KeyValue.Type.Item"},{"KeyName":"owner","Value":"{owner}","_Type":"KeyValue.Type.Item"},{"KeyName":"timeline","Value":"{timeline}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"risks","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{descr}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{title}","Footnote":"{impact}","PreserveIconStackSpacing":false,"StatusText":"{criticality}","Subhead":"{prio}","SubstatusText":"{supplier_BusinessPartner}","OnPress":"/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/risks","Service":"/RisksMobile/Services/RiskManagementService.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Risks"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Mitigations_Detail"}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Edit.page"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Edit.page ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/RisksMobile/Services/RiskManagementService.service","EntitySet":"Mitigations","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Mitigations_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"created At","_Name":"createdAt","Value":"{createdAt}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"created By","_Name":"createdBy","Value":"{createdBy}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","Value":"{description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"owner","_Name":"owner","Value":"{owner}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"timeline","_Name":"timeline","Value":"{timeline}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Mitigations_Edit"}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_List.page"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_List.page ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Mitigations)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{createdBy}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Detail.action","StatusImage":"","Title":"{ID}","Footnote":"{description}","PreserveIconStackSpacing":false,"StatusText":"{owner}","Subhead":"{createdAt}","SubstatusText":"{timeline}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Mitigations","Service":"/RisksMobile/Services/RiskManagementService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Mitigations_List"}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_Create.page"
/*!*******************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_Create.page ***!
  \*******************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/RisksMobile/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/RisksMobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Risks_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"prio","_Name":"prio","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"descr","_Name":"descr","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"impact","KeyboardType":"Number","_Name":"impact","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"criticality","KeyboardType":"Number","_Name":"criticality","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supplier Business Partner","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{BusinessPartner}","ReturnValue":"{BusinessPartner}","Target":{"EntitySet":"A_BusinessPartner","Service":"/RisksMobile/Services/RiskManagementService.service"}},"_Name":"supplier_BusinessPartner","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Risks_Create"}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_Detail.page"
/*!*******************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_Detail.page ***!
  \*******************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/RisksMobile/Services/RiskManagementService.service","EntitySet":"Risks","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/RisksMobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/RisksMobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Risks_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{title}","Subhead":"{prio}","BodyText":"","Footnote":"{impact}","Description":"{descr}","StatusText":"{criticality}","StatusImage":"","SubstatusImage":"","SubstatusText":"{supplier_BusinessPartner}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"title","Value":"{title}","_Type":"KeyValue.Type.Item"},{"KeyName":"prio","Value":"{prio}","_Type":"KeyValue.Type.Item"},{"KeyName":"descr","Value":"{descr}","_Type":"KeyValue.Type.Item"},{"KeyName":"impact","Value":"{impact}","_Type":"KeyValue.Type.Item"},{"KeyName":"criticality","Value":"{criticality}","_Type":"KeyValue.Type.Item"},{"KeyName":"supplier Business Partner","Value":"{supplier_BusinessPartner}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Risks_Detail"}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_Edit.page"
/*!*****************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_Edit.page ***!
  \*****************************************************************************************/
(module) {

module.exports = {"DesignTimeTarget":{"Service":"/RisksMobile/Services/RiskManagementService.service","EntitySet":"Risks","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/RisksMobile/Rules/RiskManagementService/Risks/Risks_Cancel.js","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/RisksMobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Risks_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"prio","_Name":"prio","Value":"{prio}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"descr","_Name":"descr","Value":"{descr}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"impact","_Name":"impact","Value":"{impact}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"criticality","_Name":"criticality","Value":"{criticality}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supplier Business Partner","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{BusinessPartner}","ReturnValue":"{BusinessPartner}","Target":{"EntitySet":"A_BusinessPartner","Service":"/RisksMobile/Services/RiskManagementService.service"}},"Value":"{supplier_BusinessPartner}","_Name":"supplier_BusinessPartner","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Risks_Edit"}

/***/ },

/***/ "./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_List.page"
/*!*****************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_List.page ***!
  \*****************************************************************************************/
(module) {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Risks)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{descr}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action","StatusImage":"","Title":"{title}","Footnote":"{impact}","PreserveIconStackSpacing":false,"StatusText":"{criticality}","Subhead":"{prio}","SubstatusText":"{supplier_BusinessPartner}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Risks","Service":"/RisksMobile/Services/RiskManagementService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Risks_List"}

/***/ },

/***/ "./build.definitions/Application.app"
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
(module) {

module.exports = {"_Name":"RisksMobile","Version":"/RisksMobile/Globals/Application/AppDefinition_Version.global","MainPage":"/RisksMobile/Pages/Main.page","OnLaunch":"/RisksMobile/Rules/Service/Initialize.js","OnWillUpdate":"/RisksMobile/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/RisksMobile/Rules/Service/Initialize.js","Styles":"/RisksMobile/Styles/Styles.less","Localization":"/RisksMobile/i18n/i18n.properties","_SchemaVersion":"26.6","StyleSheets":{"Styles":{"css":"/RisksMobile/Styles/Styles.css","ios":"/RisksMobile/Styles/Styles.nss","android":"/RisksMobile/Styles/Styles.json"}}}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/AppUpdate.action"
/*!****************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/AppUpdate.action ***!
  \****************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/RisksMobile/Rules/Application/AppUpdateFailure.js","OnSuccess":"/RisksMobile/Rules/Application/AppUpdateSuccess.js"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/AppUpdateFailureMessage.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/AppUpdateFailureMessage.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_App_Update_Failed) - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/AppUpdateProgressBanner.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/AppUpdateProgressBanner.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"$(L,Action_App_Update_Checking)","OnSuccess":"/RisksMobile/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/AppUpdateSuccessMessage.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/AppUpdateSuccessMessage.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_App_Update_Complete)","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/Logout.action"
/*!*************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/Logout.action ***!
  \*************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/NavToAbout.action"
/*!*****************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/NavToAbout.action ***!
  \*****************************************************************************/
(module) {

module.exports = {"ModalPage":true,"PageToOpen":"/RisksMobile/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/NavToActivityLog.action"
/*!***********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/NavToActivityLog.action ***!
  \***********************************************************************************/
(module) {

module.exports = {"ModalPage":true,"PageToOpen":"/RisksMobile/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/NavToSupport.action"
/*!*******************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/NavToSupport.action ***!
  \*******************************************************************************/
(module) {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/RisksMobile/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/OnWillUpdate.action"
/*!*******************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/OnWillUpdate.action ***!
  \*******************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","Message":"$(L,Action_App_Update_Available_Message)","Title":"$(L,Action_App_Update_Available_Title)","OKCaption":"$(L,Action_Now)","CancelCaption":"$(L,Action_Later)","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/Reset.action"
/*!************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/Reset.action ***!
  \************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/ResetMessage.action"
/*!*******************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/ResetMessage.action ***!
  \*******************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","Message":"$(L,Action_Reset_Message)","Title":"$(L,Action_Reset_Title)","OKCaption":"$(L,Action_Yes)","OnOK":"/RisksMobile/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"$(L,Action_No)"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Application/UserMenuPopover.action"
/*!**********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Application/UserMenuPopover.action ***!
  \**********************************************************************************/
(module) {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/RisksMobile/Actions/RiskManagementService/Service/SyncStartedMessage.action","Title":"$(L,Action_Menu_Sync_Changes)","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/RisksMobile/Actions/Application/NavToSupport.action","Title":"$(L,Action_Menu_Support)","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/RisksMobile/Actions/Application/AppUpdateProgressBanner.action","Title":"$(L,Action_Menu_Check_Updates)","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/RisksMobile/Actions/Application/NavToAbout.action","Title":"$(L,Action_Menu_About)","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/RisksMobile/Actions/Application/ResetMessage.action","Title":"$(L,Action_Menu_Reset)","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/RisksMobile/Actions/Application/Logout.action","Title":"$(L,Action_Menu_Logout)","Visible":"/RisksMobile/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/CloseModalPage_Cancel.action"
/*!****************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/CloseModalPage_Cancel.action ***!
  \****************************************************************************/
(module) {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/CloseModalPage_Complete.action"
/*!******************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/CloseModalPage_Complete.action ***!
  \******************************************************************************/
(module) {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/ClosePage.action"
/*!****************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/ClosePage.action ***!
  \****************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/CreateEntityFailureMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/CreateEntityFailureMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Create_Failure) - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/CreateEntitySuccessMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/CreateEntitySuccessMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_Entity_Created)","IsIconHidden":true,"OnSuccess":"/RisksMobile/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/DeleteConfirmation.action"
/*!*************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/DeleteConfirmation.action ***!
  \*************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","Message":"$(L,Action_Delete_Confirm_Message)","Title":"$(L,Action_Confirmation_Title)","OKCaption":"$(L,Action_OK)","CancelCaption":"$(L,Action_Cancel)","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/DeleteEntityFailureMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/DeleteEntityFailureMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Delete_Failure) - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/DeleteEntitySuccessMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/DeleteEntitySuccessMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_Entity_Deleted)","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/RisksMobile/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/DraftDiscardEntity.action"
/*!*************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/DraftDiscardEntity.action ***!
  \*************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Discard","Target":{"Service":"/RisksMobile/Services/RiskManagementService.service","EntitySet":"Mitigations","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/RisksMobile/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"$(L,Action_Draft_Discarded)"}},"OnFailure":"/RisksMobile/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/DraftEditEntity.action"
/*!**********************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/DraftEditEntity.action ***!
  \**********************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Edit","Target":{"Service":"/RisksMobile/Services/RiskManagementService.service","EntitySet":"Mitigations","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/RisksMobile/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"$(L,Action_Draft_Edit)"}},"OnFailure":"/RisksMobile/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/DraftSaveEntity.action"
/*!**********************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/DraftSaveEntity.action ***!
  \**********************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Save","Target":{"Service":"/RisksMobile/Services/RiskManagementService.service","EntitySet":"Mitigations","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/RisksMobile/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"$(L,Action_Draft_Saved)"}},"OnFailure":"/RisksMobile/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/ErrorArchive/ErrorArchive_SyncFailure.action"
/*!********************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \********************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"$(L,Action_ErrorArchive_Upload_Failed)","Duration":0,"Animated":false,"OnActionLabelPress":"/RisksMobile/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"$(L,Action_ErrorArchive_View_Errors)"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/ErrorArchive/NavToErrorArchive_Detail.action"
/*!********************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \********************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/RisksMobile/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/ErrorArchive/NavToErrorArchive_List.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/RisksMobile/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/GenericBannerMessage.action"
/*!***************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/GenericBannerMessage.action ***!
  \***************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"$(L,Action_Generic_Message)"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/GenericMessageBox.action"
/*!************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/GenericMessageBox.action ***!
  \************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"$(L,Action_Generic_Message)","OKCaption":"$(L,Action_OK)"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/GenericNavigation.action"
/*!************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/GenericNavigation.action ***!
  \************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/RisksMobile/Pages/Main.page"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/GenericToastMessage.action"
/*!**************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/GenericToastMessage.action ***!
  \**************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"$(L,Action_Generic_Message)"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Logging/LogUploadFailure.action"
/*!*******************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Logging/LogUploadFailure.action ***!
  \*******************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Log_Upload_Failed_Message): {#ActionResults:UploadLog/error}","OKCaption":"$(L,Action_OK)","Title":"$(L,Action_Log_Upload_Failed_Title)","_Type":"Action.Type.Message"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Logging/LogUploadSuccessful.action"
/*!**********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Logging/LogUploadSuccessful.action ***!
  \**********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"$(L,Action_Log_Uploaded)","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Logging/UploadLog.action"
/*!************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Logging/UploadLog.action ***!
  \************************************************************************/
(module) {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"$(L,Action_Log_Upload_Activity)","OnFailure":"/RisksMobile/Actions/Logging/LogUploadFailure.action","OnSuccess":"/RisksMobile/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/Logging/UploadLogProgress.action"
/*!********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/Logging/UploadLogProgress.action ***!
  \********************************************************************************/
(module) {

module.exports = {"Animated":true,"CompletionMessage":"$(L,Action_Log_Upload_Completed)","CompletionTimeout":2,"Message":"$(L,Action_Log_Upload_Started)","OnSuccess":"/RisksMobile/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RequiredFieldsFailureMessage.action"
/*!***********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RequiredFieldsFailureMessage.action ***!
  \***********************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_RequiredFields_Failure)","Duration":4,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateEntity.action"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateEntity.action ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/RisksMobile/Actions/CreateEntityFailureMessage.action","OnSuccess":"/RisksMobile/Actions/CreateEntitySuccessMessage.action","Properties":{"createdAt":"#Page:Mitigations_Create/#Control:createdAt/#Value","createdBy":"#Page:Mitigations_Create/#Control:createdBy/#Value","description":"#Page:Mitigations_Create/#Control:description/#Value","owner":"#Page:Mitigations_Create/#Control:owner/#Value","timeline":"#Page:Mitigations_Create/#Control:timeline/#Value"},"Target":{"EntitySet":"Mitigations","Service":"/RisksMobile/Services/RiskManagementService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateRisks.action"
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateRisks.action ***!
  \****************************************************************************************************************/
(module) {

module.exports = {"ParentLink":{"Property":"risks","Target":{"EntitySet":"Mitigations","ReadLink":"{@odata.readLink}"}},"OnFailure":"/RisksMobile/Actions/CreateEntityFailureMessage.action","OnSuccess":"/RisksMobile/Actions/CreateEntitySuccessMessage.action","Properties":{"title":"#Page:Mitigations_CreateRisks/#Control:title/#Value","prio":"#Page:Mitigations_CreateRisks/#Control:prio/#Value","descr":"#Page:Mitigations_CreateRisks/#Control:descr/#Value","impact":"#Page:Mitigations_CreateRisks/#Control:impact/#Value","criticality":"#Page:Mitigations_CreateRisks/#Control:criticality/#Value","supplier_BusinessPartner":"#Page:Mitigations_CreateRisks/#Control:supplier_BusinessPartner/#SelectedValue"},"Target":{"EntitySet":"Risks","Service":"/RisksMobile/Services/RiskManagementService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DeleteEntity.action"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DeleteEntity.action ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"Mitigations","Service":"/RisksMobile/Services/RiskManagementService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/RisksMobile/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/RisksMobile/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DetailPopover.action"
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DetailPopover.action ***!
  \******************************************************************************************************************/
(module) {

module.exports = {"PopoverItems":[{"Title":"Add Risks","OnPress":"/RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.js"},{"Title":"Delete","OnPress":"/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action"
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action ***!
  \*****************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Mitigations","Service":"/RisksMobile/Services/RiskManagementService.service","ReadLink":"{@odata.readLink}"},"Properties":{"createdAt":"#Page:Mitigations_Edit/#Control:createdAt/#Value","createdBy":"#Page:Mitigations_Edit/#Control:createdBy/#Value","description":"#Page:Mitigations_Edit/#Control:description/#Value","owner":"#Page:Mitigations_Edit/#Control:owner/#Value","timeline":"#Page:Mitigations_Edit/#Control:timeline/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/RisksMobile/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/RisksMobile/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Create.action"
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Create.action ***!
  \****************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action"
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action ***!
  \*********************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_CreateRisks.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Detail.action"
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Detail.action ***!
  \****************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Detail.page"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action"
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action ***!
  \**************************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_List.action"
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_List.action ***!
  \**************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_List.page"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action"
/*!****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action ***!
  \****************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/RisksMobile/Pages/RiskManagementService_Risks/Risks_Create.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action"
/*!****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action ***!
  \****************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/RisksMobile/Pages/RiskManagementService_Risks/Risks_Detail.page"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action ***!
  \**************************************************************************************************/
(module) {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/RisksMobile/Pages/RiskManagementService_Risks/Risks_Edit.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_List.action"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_List.action ***!
  \**************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/RisksMobile/Pages/RiskManagementService_Risks/Risks_List.page"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"CreateLinks":[],"OnFailure":"/RisksMobile/Actions/CreateEntityFailureMessage.action","OnSuccess":"/RisksMobile/Actions/CreateEntitySuccessMessage.action","Properties":{"title":"#Page:Risks_Create/#Control:title/#Value","prio":"#Page:Risks_Create/#Control:prio/#Value","descr":"#Page:Risks_Create/#Control:descr/#Value","impact":"#Page:Risks_Create/#Control:impact/#Value","criticality":"#Page:Risks_Create/#Control:criticality/#Value","supplier_BusinessPartner":"#Page:Risks_Create/#Control:supplier_BusinessPartner/#SelectedValue"},"Target":{"EntitySet":"Risks","Service":"/RisksMobile/Services/RiskManagementService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"Target":{"EntitySet":"Risks","Service":"/RisksMobile/Services/RiskManagementService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/RisksMobile/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/RisksMobile/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action"
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action ***!
  \*****************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Risks","Service":"/RisksMobile/Services/RiskManagementService.service","ReadLink":"{@odata.readLink}"},"Properties":{"title":"#Page:Risks_Edit/#Control:title/#Value","prio":"#Page:Risks_Edit/#Control:prio/#Value","descr":"#Page:Risks_Edit/#Control:descr/#Value","impact":"#Page:Risks_Edit/#Control:impact/#Value","criticality":"#Page:Risks_Edit/#Control:criticality/#Value","supplier_BusinessPartner":"#Page:Risks_Edit/#Control:supplier_BusinessPartner/#SelectedValue"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/RisksMobile/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/RisksMobile/Actions/UpdateEntityFailureMessage.action"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/CloseOffline.action"
/*!*************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/CloseOffline.action ***!
  \*************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/RisksMobile/Services/RiskManagementService.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/RisksMobile/Actions/RiskManagementService/Service/CloseOfflineSuccessMessage.action","OnFailure":"/RisksMobile/Actions/RiskManagementService/Service/CloseOfflineFailureMessage.action"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/CloseOfflineFailureMessage.action"
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/CloseOfflineFailureMessage.action ***!
  \***************************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Close_Failure) - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/CloseOfflineSuccessMessage.action"
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/CloseOfflineSuccessMessage.action ***!
  \***************************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Close_Success)","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/DownloadOffline.action"
/*!****************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/DownloadOffline.action ***!
  \****************************************************************************************************/
(module) {

module.exports = {"Service":"/RisksMobile/Services/RiskManagementService.service","DefiningRequests":[{"Name":"Mitigations","Query":"Mitigations"},{"Name":"Risks","Query":"Risks"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/RisksMobile/Actions/RiskManagementService/Service/SyncFailureMessage.action","OnSuccess":"/RisksMobile/Rules/RiskManagementService/ErrorArchive_CheckForSyncError.js"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/DownloadStartedMessage.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/DownloadStartedMessage.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Download_Started)","CompletionMessage":"$(L,Action_Download_Successful)","CompletionTimeout":7,"OnSuccess":"/RisksMobile/Actions/RiskManagementService/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/InitializeOffline.action"
/*!******************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/InitializeOffline.action ***!
  \******************************************************************************************************/
(module) {

module.exports = {"Service":"/RisksMobile/Services/RiskManagementService.service","DefiningRequests":[{"Name":"Mitigations","Query":"Mitigations"},{"Name":"Risks","Query":"Risks"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"$(L,Action_Init_Activity)","ActionResult":{"_Name":"init"},"OnFailure":"/RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineFailureMessage.action","OnSuccess":"/RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineSuccessMessage.action"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineFailureMessage.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineFailureMessage.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Init_Failure) - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineSuccessMessage.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineSuccessMessage.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ToastMessage","Message":"$(L,Action_Init_Success)","Animated":true,"Duration":3,"IsIconHidden":true,"NumberOfLines":1}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/SyncFailureMessage.action"
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/SyncFailureMessage.action ***!
  \*******************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Sync_Failure) - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/SyncStartedMessage.action"
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/SyncStartedMessage.action ***!
  \*******************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Sync_Started)","CompletionMessage":"$(L,Action_Sync_Completed)","CompletionTimeout":7,"OnSuccess":"/RisksMobile/Actions/RiskManagementService/Service/UploadOffline.action","OnFailure":"/RisksMobile/Actions/RiskManagementService/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/UploadOffline.action"
/*!**************************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/RiskManagementService/Service/UploadOffline.action ***!
  \**************************************************************************************************/
(module) {

module.exports = {"Service":"/RisksMobile/Services/RiskManagementService.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/RisksMobile/Actions/RiskManagementService/Service/DownloadStartedMessage.action","OnFailure":"/RisksMobile/Actions/RiskManagementService/Service/SyncFailureMessage.action"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/UpdateEntityFailureMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/UpdateEntityFailureMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Update_Failure) - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Actions/UpdateEntitySuccessMessage.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Actions/UpdateEntitySuccessMessage.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_Entity_Updated)","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/RisksMobile/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/RisksMobile/Globals/Application/AppDefinition_Version.global"
/*!****************************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Globals/Application/AppDefinition_Version.global ***!
  \****************************************************************************************/
(module) {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ },

/***/ "./build.definitions/RisksMobile/Globals/Application/ApplicationName.global"
/*!**********************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Globals/Application/ApplicationName.global ***!
  \**********************************************************************************/
(module) {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ },

/***/ "./build.definitions/RisksMobile/Globals/Application/SupportEmail.global"
/*!*******************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Globals/Application/SupportEmail.global ***!
  \*******************************************************************************/
(module) {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ },

/***/ "./build.definitions/RisksMobile/Globals/Application/SupportPhone.global"
/*!*******************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Globals/Application/SupportPhone.global ***!
  \*******************************************************************************/
(module) {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ },

/***/ "./build.definitions/RisksMobile/Services/RiskManagementService.service"
/*!******************************************************************************!*\
  !*** ./build.definitions/RisksMobile/Services/RiskManagementService.service ***!
  \******************************************************************************/
(module) {

module.exports = {"DestinationName":"RiskManagementService","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Local","ServiceUrl":""}

/***/ },

/***/ "./build.definitions/application-index.js"
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let risksmobile_actions_application_appupdate_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/AppUpdate.action */ "./build.definitions/RisksMobile/Actions/Application/AppUpdate.action")
let risksmobile_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/RisksMobile/Actions/Application/AppUpdateFailureMessage.action")
let risksmobile_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/RisksMobile/Actions/Application/AppUpdateProgressBanner.action")
let risksmobile_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/RisksMobile/Actions/Application/AppUpdateSuccessMessage.action")
let risksmobile_actions_application_logout_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/Logout.action */ "./build.definitions/RisksMobile/Actions/Application/Logout.action")
let risksmobile_actions_application_navtoabout_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/NavToAbout.action */ "./build.definitions/RisksMobile/Actions/Application/NavToAbout.action")
let risksmobile_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/NavToActivityLog.action */ "./build.definitions/RisksMobile/Actions/Application/NavToActivityLog.action")
let risksmobile_actions_application_navtosupport_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/NavToSupport.action */ "./build.definitions/RisksMobile/Actions/Application/NavToSupport.action")
let risksmobile_actions_application_onwillupdate_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/OnWillUpdate.action */ "./build.definitions/RisksMobile/Actions/Application/OnWillUpdate.action")
let risksmobile_actions_application_reset_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/Reset.action */ "./build.definitions/RisksMobile/Actions/Application/Reset.action")
let risksmobile_actions_application_resetmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/ResetMessage.action */ "./build.definitions/RisksMobile/Actions/Application/ResetMessage.action")
let risksmobile_actions_application_usermenupopover_action = __webpack_require__(/*! ./RisksMobile/Actions/Application/UserMenuPopover.action */ "./build.definitions/RisksMobile/Actions/Application/UserMenuPopover.action")
let risksmobile_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./RisksMobile/Actions/CloseModalPage_Cancel.action */ "./build.definitions/RisksMobile/Actions/CloseModalPage_Cancel.action")
let risksmobile_actions_closemodalpage_complete_action = __webpack_require__(/*! ./RisksMobile/Actions/CloseModalPage_Complete.action */ "./build.definitions/RisksMobile/Actions/CloseModalPage_Complete.action")
let risksmobile_actions_closepage_action = __webpack_require__(/*! ./RisksMobile/Actions/ClosePage.action */ "./build.definitions/RisksMobile/Actions/ClosePage.action")
let risksmobile_actions_createentityfailuremessage_action = __webpack_require__(/*! ./RisksMobile/Actions/CreateEntityFailureMessage.action */ "./build.definitions/RisksMobile/Actions/CreateEntityFailureMessage.action")
let risksmobile_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/RisksMobile/Actions/CreateEntitySuccessMessage.action")
let risksmobile_actions_deleteconfirmation_action = __webpack_require__(/*! ./RisksMobile/Actions/DeleteConfirmation.action */ "./build.definitions/RisksMobile/Actions/DeleteConfirmation.action")
let risksmobile_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./RisksMobile/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/RisksMobile/Actions/DeleteEntityFailureMessage.action")
let risksmobile_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/RisksMobile/Actions/DeleteEntitySuccessMessage.action")
let risksmobile_actions_draftdiscardentity_action = __webpack_require__(/*! ./RisksMobile/Actions/DraftDiscardEntity.action */ "./build.definitions/RisksMobile/Actions/DraftDiscardEntity.action")
let risksmobile_actions_drafteditentity_action = __webpack_require__(/*! ./RisksMobile/Actions/DraftEditEntity.action */ "./build.definitions/RisksMobile/Actions/DraftEditEntity.action")
let risksmobile_actions_draftsaveentity_action = __webpack_require__(/*! ./RisksMobile/Actions/DraftSaveEntity.action */ "./build.definitions/RisksMobile/Actions/DraftSaveEntity.action")
let risksmobile_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./RisksMobile/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/RisksMobile/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let risksmobile_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./RisksMobile/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/RisksMobile/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let risksmobile_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./RisksMobile/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/RisksMobile/Actions/ErrorArchive/NavToErrorArchive_List.action")
let risksmobile_actions_genericbannermessage_action = __webpack_require__(/*! ./RisksMobile/Actions/GenericBannerMessage.action */ "./build.definitions/RisksMobile/Actions/GenericBannerMessage.action")
let risksmobile_actions_genericmessagebox_action = __webpack_require__(/*! ./RisksMobile/Actions/GenericMessageBox.action */ "./build.definitions/RisksMobile/Actions/GenericMessageBox.action")
let risksmobile_actions_genericnavigation_action = __webpack_require__(/*! ./RisksMobile/Actions/GenericNavigation.action */ "./build.definitions/RisksMobile/Actions/GenericNavigation.action")
let risksmobile_actions_generictoastmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/GenericToastMessage.action */ "./build.definitions/RisksMobile/Actions/GenericToastMessage.action")
let risksmobile_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./RisksMobile/Actions/Logging/LogUploadFailure.action */ "./build.definitions/RisksMobile/Actions/Logging/LogUploadFailure.action")
let risksmobile_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./RisksMobile/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/RisksMobile/Actions/Logging/LogUploadSuccessful.action")
let risksmobile_actions_logging_uploadlog_action = __webpack_require__(/*! ./RisksMobile/Actions/Logging/UploadLog.action */ "./build.definitions/RisksMobile/Actions/Logging/UploadLog.action")
let risksmobile_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./RisksMobile/Actions/Logging/UploadLogProgress.action */ "./build.definitions/RisksMobile/Actions/Logging/UploadLogProgress.action")
let risksmobile_actions_requiredfieldsfailuremessage_action = __webpack_require__(/*! ./RisksMobile/Actions/RequiredFieldsFailureMessage.action */ "./build.definitions/RisksMobile/Actions/RequiredFieldsFailureMessage.action")
let risksmobile_actions_riskmanagementservice_mitigations_mitigations_createentity_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateEntity.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateEntity.action")
let risksmobile_actions_riskmanagementservice_mitigations_mitigations_createrisks_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateRisks.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_CreateRisks.action")
let risksmobile_actions_riskmanagementservice_mitigations_mitigations_deleteentity_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DeleteEntity.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DeleteEntity.action")
let risksmobile_actions_riskmanagementservice_mitigations_mitigations_detailpopover_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DetailPopover.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_DetailPopover.action")
let risksmobile_actions_riskmanagementservice_mitigations_mitigations_updateentity_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/Mitigations_UpdateEntity.action")
let risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_create_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Create.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Create.action")
let risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_createrisks_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.action")
let risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_detail_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Detail.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Detail.action")
let risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_edit_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_Edit.action")
let risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_list_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_List.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Mitigations/NavToMitigations_List.action")
let risksmobile_actions_riskmanagementservice_risks_navtorisks_create_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action")
let risksmobile_actions_riskmanagementservice_risks_navtorisks_detail_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action")
let risksmobile_actions_riskmanagementservice_risks_navtorisks_edit_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action")
let risksmobile_actions_riskmanagementservice_risks_navtorisks_list_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_List.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/NavToRisks_List.action")
let risksmobile_actions_riskmanagementservice_risks_risks_createentity_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action")
let risksmobile_actions_riskmanagementservice_risks_risks_deleteentity_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action")
let risksmobile_actions_riskmanagementservice_risks_risks_updateentity_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action")
let risksmobile_actions_riskmanagementservice_service_closeoffline_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/CloseOffline.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/CloseOffline.action")
let risksmobile_actions_riskmanagementservice_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/CloseOfflineFailureMessage.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/CloseOfflineFailureMessage.action")
let risksmobile_actions_riskmanagementservice_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/CloseOfflineSuccessMessage.action")
let risksmobile_actions_riskmanagementservice_service_downloadoffline_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/DownloadOffline.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/DownloadOffline.action")
let risksmobile_actions_riskmanagementservice_service_downloadstartedmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/DownloadStartedMessage.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/DownloadStartedMessage.action")
let risksmobile_actions_riskmanagementservice_service_initializeoffline_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/InitializeOffline.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/InitializeOffline.action")
let risksmobile_actions_riskmanagementservice_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineFailureMessage.action")
let risksmobile_actions_riskmanagementservice_service_initializeofflinesuccessmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineSuccessMessage.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/InitializeOfflineSuccessMessage.action")
let risksmobile_actions_riskmanagementservice_service_syncfailuremessage_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/SyncFailureMessage.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/SyncFailureMessage.action")
let risksmobile_actions_riskmanagementservice_service_syncstartedmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/SyncStartedMessage.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/SyncStartedMessage.action")
let risksmobile_actions_riskmanagementservice_service_uploadoffline_action = __webpack_require__(/*! ./RisksMobile/Actions/RiskManagementService/Service/UploadOffline.action */ "./build.definitions/RisksMobile/Actions/RiskManagementService/Service/UploadOffline.action")
let risksmobile_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./RisksMobile/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/RisksMobile/Actions/UpdateEntityFailureMessage.action")
let risksmobile_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./RisksMobile/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/RisksMobile/Actions/UpdateEntitySuccessMessage.action")
let risksmobile_globals_application_appdefinition_version_global = __webpack_require__(/*! ./RisksMobile/Globals/Application/AppDefinition_Version.global */ "./build.definitions/RisksMobile/Globals/Application/AppDefinition_Version.global")
let risksmobile_globals_application_applicationname_global = __webpack_require__(/*! ./RisksMobile/Globals/Application/ApplicationName.global */ "./build.definitions/RisksMobile/Globals/Application/ApplicationName.global")
let risksmobile_globals_application_supportemail_global = __webpack_require__(/*! ./RisksMobile/Globals/Application/SupportEmail.global */ "./build.definitions/RisksMobile/Globals/Application/SupportEmail.global")
let risksmobile_globals_application_supportphone_global = __webpack_require__(/*! ./RisksMobile/Globals/Application/SupportPhone.global */ "./build.definitions/RisksMobile/Globals/Application/SupportPhone.global")
let risksmobile_i18n_i18n_properties = __webpack_require__(/*! ./RisksMobile/i18n/i18n.properties */ "./build.definitions/RisksMobile/i18n/i18n.properties")
let risksmobile_jsconfig_json = __webpack_require__(/*! ./RisksMobile/jsconfig.json */ "./build.definitions/RisksMobile/jsconfig.json")
let risksmobile_pages_application_about_page = __webpack_require__(/*! ./RisksMobile/Pages/Application/About.page */ "./build.definitions/RisksMobile/Pages/Application/About.page")
let risksmobile_pages_application_support_page = __webpack_require__(/*! ./RisksMobile/Pages/Application/Support.page */ "./build.definitions/RisksMobile/Pages/Application/Support.page")
let risksmobile_pages_application_useractivitylog_page = __webpack_require__(/*! ./RisksMobile/Pages/Application/UserActivityLog.page */ "./build.definitions/RisksMobile/Pages/Application/UserActivityLog.page")
let risksmobile_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./RisksMobile/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/RisksMobile/Pages/ErrorArchive/ErrorArchive_Detail.page")
let risksmobile_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./RisksMobile/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/RisksMobile/Pages/ErrorArchive/ErrorArchive_List.page")
let risksmobile_pages_main_page = __webpack_require__(/*! ./RisksMobile/Pages/Main.page */ "./build.definitions/RisksMobile/Pages/Main.page")
let risksmobile_pages_riskmanagementservice_mitigations_mitigations_create_page = __webpack_require__(/*! ./RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Create.page */ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Create.page")
let risksmobile_pages_riskmanagementservice_mitigations_mitigations_createrisks_page = __webpack_require__(/*! ./RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_CreateRisks.page */ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_CreateRisks.page")
let risksmobile_pages_riskmanagementservice_mitigations_mitigations_detail_page = __webpack_require__(/*! ./RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Detail.page */ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Detail.page")
let risksmobile_pages_riskmanagementservice_mitigations_mitigations_edit_page = __webpack_require__(/*! ./RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Edit.page */ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_Edit.page")
let risksmobile_pages_riskmanagementservice_mitigations_mitigations_list_page = __webpack_require__(/*! ./RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_List.page */ "./build.definitions/RisksMobile/Pages/RiskManagementService_Mitigations/Mitigations_List.page")
let risksmobile_pages_riskmanagementservice_risks_risks_create_page = __webpack_require__(/*! ./RisksMobile/Pages/RiskManagementService_Risks/Risks_Create.page */ "./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_Create.page")
let risksmobile_pages_riskmanagementservice_risks_risks_detail_page = __webpack_require__(/*! ./RisksMobile/Pages/RiskManagementService_Risks/Risks_Detail.page */ "./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_Detail.page")
let risksmobile_pages_riskmanagementservice_risks_risks_edit_page = __webpack_require__(/*! ./RisksMobile/Pages/RiskManagementService_Risks/Risks_Edit.page */ "./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_Edit.page")
let risksmobile_pages_riskmanagementservice_risks_risks_list_page = __webpack_require__(/*! ./RisksMobile/Pages/RiskManagementService_Risks/Risks_List.page */ "./build.definitions/RisksMobile/Pages/RiskManagementService_Risks/Risks_List.page")
let risksmobile_rules_application_appupdatefailure_js = __webpack_require__(/*! ./RisksMobile/Rules/Application/AppUpdateFailure.js */ "./build.definitions/RisksMobile/Rules/Application/AppUpdateFailure.js")
let risksmobile_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./RisksMobile/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/RisksMobile/Rules/Application/AppUpdateSuccess.js")
let risksmobile_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./RisksMobile/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/RisksMobile/Rules/Application/ClientIsMultiUserMode.js")
let risksmobile_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./RisksMobile/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/RisksMobile/Rules/Application/GetClientSupportVersions.js")
let risksmobile_rules_application_getclientversion_js = __webpack_require__(/*! ./RisksMobile/Rules/Application/GetClientVersion.js */ "./build.definitions/RisksMobile/Rules/Application/GetClientVersion.js")
let risksmobile_rules_application_onwillupdate_js = __webpack_require__(/*! ./RisksMobile/Rules/Application/OnWillUpdate.js */ "./build.definitions/RisksMobile/Rules/Application/OnWillUpdate.js")
let risksmobile_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./RisksMobile/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/RisksMobile/Rules/Application/ResetAppSettingsAndLogout.js")
let risksmobile_rules_logging_loglevels_js = __webpack_require__(/*! ./RisksMobile/Rules/Logging/LogLevels.js */ "./build.definitions/RisksMobile/Rules/Logging/LogLevels.js")
let risksmobile_rules_logging_settracecategories_js = __webpack_require__(/*! ./RisksMobile/Rules/Logging/SetTraceCategories.js */ "./build.definitions/RisksMobile/Rules/Logging/SetTraceCategories.js")
let risksmobile_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./RisksMobile/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/RisksMobile/Rules/Logging/SetUserLogLevel.js")
let risksmobile_rules_logging_togglelogging_js = __webpack_require__(/*! ./RisksMobile/Rules/Logging/ToggleLogging.js */ "./build.definitions/RisksMobile/Rules/Logging/ToggleLogging.js")
let risksmobile_rules_logging_tracecategories_js = __webpack_require__(/*! ./RisksMobile/Rules/Logging/TraceCategories.js */ "./build.definitions/RisksMobile/Rules/Logging/TraceCategories.js")
let risksmobile_rules_logging_userlogsetting_js = __webpack_require__(/*! ./RisksMobile/Rules/Logging/UserLogSetting.js */ "./build.definitions/RisksMobile/Rules/Logging/UserLogSetting.js")
let risksmobile_rules_riskmanagementservice_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/ErrorArchive_CheckForSyncError.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/ErrorArchive_CheckForSyncError.js")
let risksmobile_rules_riskmanagementservice_mitigations_mitigations_cancel_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_Cancel.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_Cancel.js")
let risksmobile_rules_riskmanagementservice_mitigations_mitigations_createentity_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateEntity.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateEntity.js")
let risksmobile_rules_riskmanagementservice_mitigations_mitigations_createrisks_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateRisks.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_CreateRisks.js")
let risksmobile_rules_riskmanagementservice_mitigations_mitigations_deleteconfirmation_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_DeleteConfirmation.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_DeleteConfirmation.js")
let risksmobile_rules_riskmanagementservice_mitigations_mitigations_updateentity_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_UpdateEntity.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/Mitigations_UpdateEntity.js")
let risksmobile_rules_riskmanagementservice_mitigations_navtomitigations_createrisks_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_CreateRisks.js")
let risksmobile_rules_riskmanagementservice_mitigations_navtomitigations_edit_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_Edit.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Mitigations/NavToMitigations_Edit.js")
let risksmobile_rules_riskmanagementservice_risks_navtorisks_edit_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js")
let risksmobile_rules_riskmanagementservice_risks_risks_cancel_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Risks/Risks_Cancel.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_Cancel.js")
let risksmobile_rules_riskmanagementservice_risks_risks_createentity_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js")
let risksmobile_rules_riskmanagementservice_risks_risks_deleteconfirmation_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js")
let risksmobile_rules_riskmanagementservice_risks_risks_updateentity_js = __webpack_require__(/*! ./RisksMobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js */ "./build.definitions/RisksMobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js")
let risksmobile_rules_service_initialize_js = __webpack_require__(/*! ./RisksMobile/Rules/Service/Initialize.js */ "./build.definitions/RisksMobile/Rules/Service/Initialize.js")
let risksmobile_services_riskmanagementservice_service = __webpack_require__(/*! ./RisksMobile/Services/RiskManagementService.service */ "./build.definitions/RisksMobile/Services/RiskManagementService.service")
let risksmobile_styles_styles_css = __webpack_require__(/*! ./RisksMobile/Styles/Styles.css */ "./build.definitions/RisksMobile/Styles/Styles.css")
let risksmobile_styles_styles_json = __webpack_require__(/*! ./RisksMobile/Styles/Styles.json */ "./build.definitions/RisksMobile/Styles/Styles.json")
let risksmobile_styles_styles_less = __webpack_require__(/*! ./RisksMobile/Styles/Styles.less */ "./build.definitions/RisksMobile/Styles/Styles.less")
let risksmobile_styles_styles_nss = __webpack_require__(/*! ./RisksMobile/Styles/Styles.nss */ "./build.definitions/RisksMobile/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	risksmobile_actions_application_appupdate_action : risksmobile_actions_application_appupdate_action,
	risksmobile_actions_application_appupdatefailuremessage_action : risksmobile_actions_application_appupdatefailuremessage_action,
	risksmobile_actions_application_appupdateprogressbanner_action : risksmobile_actions_application_appupdateprogressbanner_action,
	risksmobile_actions_application_appupdatesuccessmessage_action : risksmobile_actions_application_appupdatesuccessmessage_action,
	risksmobile_actions_application_logout_action : risksmobile_actions_application_logout_action,
	risksmobile_actions_application_navtoabout_action : risksmobile_actions_application_navtoabout_action,
	risksmobile_actions_application_navtoactivitylog_action : risksmobile_actions_application_navtoactivitylog_action,
	risksmobile_actions_application_navtosupport_action : risksmobile_actions_application_navtosupport_action,
	risksmobile_actions_application_onwillupdate_action : risksmobile_actions_application_onwillupdate_action,
	risksmobile_actions_application_reset_action : risksmobile_actions_application_reset_action,
	risksmobile_actions_application_resetmessage_action : risksmobile_actions_application_resetmessage_action,
	risksmobile_actions_application_usermenupopover_action : risksmobile_actions_application_usermenupopover_action,
	risksmobile_actions_closemodalpage_cancel_action : risksmobile_actions_closemodalpage_cancel_action,
	risksmobile_actions_closemodalpage_complete_action : risksmobile_actions_closemodalpage_complete_action,
	risksmobile_actions_closepage_action : risksmobile_actions_closepage_action,
	risksmobile_actions_createentityfailuremessage_action : risksmobile_actions_createentityfailuremessage_action,
	risksmobile_actions_createentitysuccessmessage_action : risksmobile_actions_createentitysuccessmessage_action,
	risksmobile_actions_deleteconfirmation_action : risksmobile_actions_deleteconfirmation_action,
	risksmobile_actions_deleteentityfailuremessage_action : risksmobile_actions_deleteentityfailuremessage_action,
	risksmobile_actions_deleteentitysuccessmessage_action : risksmobile_actions_deleteentitysuccessmessage_action,
	risksmobile_actions_draftdiscardentity_action : risksmobile_actions_draftdiscardentity_action,
	risksmobile_actions_drafteditentity_action : risksmobile_actions_drafteditentity_action,
	risksmobile_actions_draftsaveentity_action : risksmobile_actions_draftsaveentity_action,
	risksmobile_actions_errorarchive_errorarchive_syncfailure_action : risksmobile_actions_errorarchive_errorarchive_syncfailure_action,
	risksmobile_actions_errorarchive_navtoerrorarchive_detail_action : risksmobile_actions_errorarchive_navtoerrorarchive_detail_action,
	risksmobile_actions_errorarchive_navtoerrorarchive_list_action : risksmobile_actions_errorarchive_navtoerrorarchive_list_action,
	risksmobile_actions_genericbannermessage_action : risksmobile_actions_genericbannermessage_action,
	risksmobile_actions_genericmessagebox_action : risksmobile_actions_genericmessagebox_action,
	risksmobile_actions_genericnavigation_action : risksmobile_actions_genericnavigation_action,
	risksmobile_actions_generictoastmessage_action : risksmobile_actions_generictoastmessage_action,
	risksmobile_actions_logging_loguploadfailure_action : risksmobile_actions_logging_loguploadfailure_action,
	risksmobile_actions_logging_loguploadsuccessful_action : risksmobile_actions_logging_loguploadsuccessful_action,
	risksmobile_actions_logging_uploadlog_action : risksmobile_actions_logging_uploadlog_action,
	risksmobile_actions_logging_uploadlogprogress_action : risksmobile_actions_logging_uploadlogprogress_action,
	risksmobile_actions_requiredfieldsfailuremessage_action : risksmobile_actions_requiredfieldsfailuremessage_action,
	risksmobile_actions_riskmanagementservice_mitigations_mitigations_createentity_action : risksmobile_actions_riskmanagementservice_mitigations_mitigations_createentity_action,
	risksmobile_actions_riskmanagementservice_mitigations_mitigations_createrisks_action : risksmobile_actions_riskmanagementservice_mitigations_mitigations_createrisks_action,
	risksmobile_actions_riskmanagementservice_mitigations_mitigations_deleteentity_action : risksmobile_actions_riskmanagementservice_mitigations_mitigations_deleteentity_action,
	risksmobile_actions_riskmanagementservice_mitigations_mitigations_detailpopover_action : risksmobile_actions_riskmanagementservice_mitigations_mitigations_detailpopover_action,
	risksmobile_actions_riskmanagementservice_mitigations_mitigations_updateentity_action : risksmobile_actions_riskmanagementservice_mitigations_mitigations_updateentity_action,
	risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_create_action : risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_create_action,
	risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_createrisks_action : risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_createrisks_action,
	risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_detail_action : risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_detail_action,
	risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_edit_action : risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_edit_action,
	risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_list_action : risksmobile_actions_riskmanagementservice_mitigations_navtomitigations_list_action,
	risksmobile_actions_riskmanagementservice_risks_navtorisks_create_action : risksmobile_actions_riskmanagementservice_risks_navtorisks_create_action,
	risksmobile_actions_riskmanagementservice_risks_navtorisks_detail_action : risksmobile_actions_riskmanagementservice_risks_navtorisks_detail_action,
	risksmobile_actions_riskmanagementservice_risks_navtorisks_edit_action : risksmobile_actions_riskmanagementservice_risks_navtorisks_edit_action,
	risksmobile_actions_riskmanagementservice_risks_navtorisks_list_action : risksmobile_actions_riskmanagementservice_risks_navtorisks_list_action,
	risksmobile_actions_riskmanagementservice_risks_risks_createentity_action : risksmobile_actions_riskmanagementservice_risks_risks_createentity_action,
	risksmobile_actions_riskmanagementservice_risks_risks_deleteentity_action : risksmobile_actions_riskmanagementservice_risks_risks_deleteentity_action,
	risksmobile_actions_riskmanagementservice_risks_risks_updateentity_action : risksmobile_actions_riskmanagementservice_risks_risks_updateentity_action,
	risksmobile_actions_riskmanagementservice_service_closeoffline_action : risksmobile_actions_riskmanagementservice_service_closeoffline_action,
	risksmobile_actions_riskmanagementservice_service_closeofflinefailuremessage_action : risksmobile_actions_riskmanagementservice_service_closeofflinefailuremessage_action,
	risksmobile_actions_riskmanagementservice_service_closeofflinesuccessmessage_action : risksmobile_actions_riskmanagementservice_service_closeofflinesuccessmessage_action,
	risksmobile_actions_riskmanagementservice_service_downloadoffline_action : risksmobile_actions_riskmanagementservice_service_downloadoffline_action,
	risksmobile_actions_riskmanagementservice_service_downloadstartedmessage_action : risksmobile_actions_riskmanagementservice_service_downloadstartedmessage_action,
	risksmobile_actions_riskmanagementservice_service_initializeoffline_action : risksmobile_actions_riskmanagementservice_service_initializeoffline_action,
	risksmobile_actions_riskmanagementservice_service_initializeofflinefailuremessage_action : risksmobile_actions_riskmanagementservice_service_initializeofflinefailuremessage_action,
	risksmobile_actions_riskmanagementservice_service_initializeofflinesuccessmessage_action : risksmobile_actions_riskmanagementservice_service_initializeofflinesuccessmessage_action,
	risksmobile_actions_riskmanagementservice_service_syncfailuremessage_action : risksmobile_actions_riskmanagementservice_service_syncfailuremessage_action,
	risksmobile_actions_riskmanagementservice_service_syncstartedmessage_action : risksmobile_actions_riskmanagementservice_service_syncstartedmessage_action,
	risksmobile_actions_riskmanagementservice_service_uploadoffline_action : risksmobile_actions_riskmanagementservice_service_uploadoffline_action,
	risksmobile_actions_updateentityfailuremessage_action : risksmobile_actions_updateentityfailuremessage_action,
	risksmobile_actions_updateentitysuccessmessage_action : risksmobile_actions_updateentitysuccessmessage_action,
	risksmobile_globals_application_appdefinition_version_global : risksmobile_globals_application_appdefinition_version_global,
	risksmobile_globals_application_applicationname_global : risksmobile_globals_application_applicationname_global,
	risksmobile_globals_application_supportemail_global : risksmobile_globals_application_supportemail_global,
	risksmobile_globals_application_supportphone_global : risksmobile_globals_application_supportphone_global,
	risksmobile_i18n_i18n_properties : risksmobile_i18n_i18n_properties,
	risksmobile_jsconfig_json : risksmobile_jsconfig_json,
	risksmobile_pages_application_about_page : risksmobile_pages_application_about_page,
	risksmobile_pages_application_support_page : risksmobile_pages_application_support_page,
	risksmobile_pages_application_useractivitylog_page : risksmobile_pages_application_useractivitylog_page,
	risksmobile_pages_errorarchive_errorarchive_detail_page : risksmobile_pages_errorarchive_errorarchive_detail_page,
	risksmobile_pages_errorarchive_errorarchive_list_page : risksmobile_pages_errorarchive_errorarchive_list_page,
	risksmobile_pages_main_page : risksmobile_pages_main_page,
	risksmobile_pages_riskmanagementservice_mitigations_mitigations_create_page : risksmobile_pages_riskmanagementservice_mitigations_mitigations_create_page,
	risksmobile_pages_riskmanagementservice_mitigations_mitigations_createrisks_page : risksmobile_pages_riskmanagementservice_mitigations_mitigations_createrisks_page,
	risksmobile_pages_riskmanagementservice_mitigations_mitigations_detail_page : risksmobile_pages_riskmanagementservice_mitigations_mitigations_detail_page,
	risksmobile_pages_riskmanagementservice_mitigations_mitigations_edit_page : risksmobile_pages_riskmanagementservice_mitigations_mitigations_edit_page,
	risksmobile_pages_riskmanagementservice_mitigations_mitigations_list_page : risksmobile_pages_riskmanagementservice_mitigations_mitigations_list_page,
	risksmobile_pages_riskmanagementservice_risks_risks_create_page : risksmobile_pages_riskmanagementservice_risks_risks_create_page,
	risksmobile_pages_riskmanagementservice_risks_risks_detail_page : risksmobile_pages_riskmanagementservice_risks_risks_detail_page,
	risksmobile_pages_riskmanagementservice_risks_risks_edit_page : risksmobile_pages_riskmanagementservice_risks_risks_edit_page,
	risksmobile_pages_riskmanagementservice_risks_risks_list_page : risksmobile_pages_riskmanagementservice_risks_risks_list_page,
	risksmobile_rules_application_appupdatefailure_js : risksmobile_rules_application_appupdatefailure_js,
	risksmobile_rules_application_appupdatesuccess_js : risksmobile_rules_application_appupdatesuccess_js,
	risksmobile_rules_application_clientismultiusermode_js : risksmobile_rules_application_clientismultiusermode_js,
	risksmobile_rules_application_getclientsupportversions_js : risksmobile_rules_application_getclientsupportversions_js,
	risksmobile_rules_application_getclientversion_js : risksmobile_rules_application_getclientversion_js,
	risksmobile_rules_application_onwillupdate_js : risksmobile_rules_application_onwillupdate_js,
	risksmobile_rules_application_resetappsettingsandlogout_js : risksmobile_rules_application_resetappsettingsandlogout_js,
	risksmobile_rules_logging_loglevels_js : risksmobile_rules_logging_loglevels_js,
	risksmobile_rules_logging_settracecategories_js : risksmobile_rules_logging_settracecategories_js,
	risksmobile_rules_logging_setuserloglevel_js : risksmobile_rules_logging_setuserloglevel_js,
	risksmobile_rules_logging_togglelogging_js : risksmobile_rules_logging_togglelogging_js,
	risksmobile_rules_logging_tracecategories_js : risksmobile_rules_logging_tracecategories_js,
	risksmobile_rules_logging_userlogsetting_js : risksmobile_rules_logging_userlogsetting_js,
	risksmobile_rules_riskmanagementservice_errorarchive_checkforsyncerror_js : risksmobile_rules_riskmanagementservice_errorarchive_checkforsyncerror_js,
	risksmobile_rules_riskmanagementservice_mitigations_mitigations_cancel_js : risksmobile_rules_riskmanagementservice_mitigations_mitigations_cancel_js,
	risksmobile_rules_riskmanagementservice_mitigations_mitigations_createentity_js : risksmobile_rules_riskmanagementservice_mitigations_mitigations_createentity_js,
	risksmobile_rules_riskmanagementservice_mitigations_mitigations_createrisks_js : risksmobile_rules_riskmanagementservice_mitigations_mitigations_createrisks_js,
	risksmobile_rules_riskmanagementservice_mitigations_mitigations_deleteconfirmation_js : risksmobile_rules_riskmanagementservice_mitigations_mitigations_deleteconfirmation_js,
	risksmobile_rules_riskmanagementservice_mitigations_mitigations_updateentity_js : risksmobile_rules_riskmanagementservice_mitigations_mitigations_updateentity_js,
	risksmobile_rules_riskmanagementservice_mitigations_navtomitigations_createrisks_js : risksmobile_rules_riskmanagementservice_mitigations_navtomitigations_createrisks_js,
	risksmobile_rules_riskmanagementservice_mitigations_navtomitigations_edit_js : risksmobile_rules_riskmanagementservice_mitigations_navtomitigations_edit_js,
	risksmobile_rules_riskmanagementservice_risks_navtorisks_edit_js : risksmobile_rules_riskmanagementservice_risks_navtorisks_edit_js,
	risksmobile_rules_riskmanagementservice_risks_risks_cancel_js : risksmobile_rules_riskmanagementservice_risks_risks_cancel_js,
	risksmobile_rules_riskmanagementservice_risks_risks_createentity_js : risksmobile_rules_riskmanagementservice_risks_risks_createentity_js,
	risksmobile_rules_riskmanagementservice_risks_risks_deleteconfirmation_js : risksmobile_rules_riskmanagementservice_risks_risks_deleteconfirmation_js,
	risksmobile_rules_riskmanagementservice_risks_risks_updateentity_js : risksmobile_rules_riskmanagementservice_risks_risks_updateentity_js,
	risksmobile_rules_service_initialize_js : risksmobile_rules_service_initialize_js,
	risksmobile_services_riskmanagementservice_service : risksmobile_services_riskmanagementservice_service,
	risksmobile_styles_styles_css : risksmobile_styles_styles_css,
	risksmobile_styles_styles_json : risksmobile_styles_styles_json,
	risksmobile_styles_styles_less : risksmobile_styles_styles_less,
	risksmobile_styles_styles_nss : risksmobile_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ },

/***/ "./build.definitions/version.mdkbundlerversion"
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
(module) {

"use strict";
module.exports = "1.1\n";

/***/ },

/***/ "./build.definitions/RisksMobile/Styles/Styles.json"
/*!**********************************************************!*\
  !*** ./build.definitions/RisksMobile/Styles/Styles.json ***!
  \**********************************************************/
(module) {

"use strict";
module.exports = {};

/***/ },

/***/ "./build.definitions/RisksMobile/jsconfig.json"
/*!*****************************************************!*\
  !*** ./build.definitions/RisksMobile/jsconfig.json ***!
  \*****************************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ },

/***/ "./build.definitions/tsconfig.json"
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":"."},"exclude":["node_modules"]}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	let __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map