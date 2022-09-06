'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Returns application name
 *
 * uuid String 
 * returns inline_response_200_11
 **/
exports.getHttpServerApplicationName = function(uuid) {
  return new Promise(async function(resolve, reject) {
    try{
      var value =await fileOperation.readFromDatabaseAsync(uuid);
      var response ={};
      response['application/json']= {
        "http-server-interface-1-0:application-name": value
      };
      if(Object.keys(response).length> 0) {
        resolve(response[Object.keys(response)[0]]);
      }else {
        resolve();
      }
    }catch (error){
      reject();
    }
  });
}


/**
 * Returns application purpose
 *
 * uuid String 
 * returns inline_response_200_13
 **/
exports.getHttpServerApplicationPurpose = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:application-purpose" : "Brief description of the purpose of the application."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns update period
 *
 * uuid String 
 * returns inline_response_200_14
 **/
exports.getHttpServerDataUpdatePeriode = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:data-update-period" : "http-server-interface-1-0:DATA_UPDATE_PERIOD_TYPE_REAL_TIME"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns owner email address
 *
 * uuid String 
 * returns inline_response_200_16
 **/
exports.getHttpServerOwnerEmailAddress = function(uuid) {
  return new Promise( async function(resolve, reject) {
    try{
      var value =await fileOperation.readFromDatabaseAsync(uuid);
      var response ={};
      response['application/json']= {
        "http-server-interface-1-0:owner-email-address": value
      };
      if(Object.keys(response).length> 0) {
        resolve(response[Object.keys(response)[0]]);
      }else {
        resolve();
      }
    }catch (error){
      reject();
    }
  });
}
 	


/**
 * Returns owner name
 *
 * uuid String 
 * returns inline_response_200_15
 **/
exports.getHttpServerOwnerName = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:owner-name" : "Thorsten Heinze"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns list of releases
 *
 * uuid String 
 * returns inline_response_200_17
 **/
exports.getHttpServerReleaseList = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:release-list" : [ {
    "release-number" : "1.0.0",
    "release-date" : "20.11.2010",
    "changes" : "Initial version."
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns release number
 *
 * uuid String 
 * returns inline_response_200_12
 **/
exports.getHttpServerReleaseNumber = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "http-server-interface-1-0:release-number" : "1.0.0"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

