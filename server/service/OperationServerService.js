'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Returns the configured life cycle state of the operation
 *
 * uuid String 
 * returns inline_response_200_9
 **/
exports.getOperationServerLifeCycleState = function(uuid) {
  return new Promise(async function(resolve, reject) {
    try{
      var value =await fileOperation.readFromDatabaseAsync(uuid);
      var response ={};
      response['application/json']= {
        "operation-server-interface-1-0:life-cycle-state": value
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
 * Returns key for connecting
 *
 * uuid String 
 * returns inline_response_200_10
 **/
exports.getOperationServerOperationKey = function(uuid) {
  return new Promise(async function(resolve, reject) {
    try{
      var value =await fileOperation.readFromDatabaseAsync(uuid);
      var response ={};
      response['application/json']= {
        "operation-server-interface-1-0:operation-key": value
      };
      if(Object.keys(response).length> 0) {
        resolve(response[Object.keys(response)[0]]);
      }else {
        resolve();
      }
    }catch (error){
      console.log(error)
    }
  });
}


/**
 * Returns operation name
 *
 * uuid String 
 * returns inline_response_200_8
 **/
exports.getOperationServerOperationName = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "operation-server-interface-1-0:operation-name" : "/v1/register-yourself"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Configures life cycle state
 *
 * body Operationserverinterfaceconfiguration_lifecyclestate_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putOperationServerLifeCycleState = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Changes key for connecting
 *
 * body Operationserverinterfaceconfiguration_operationkey_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putOperationServerOperationKey = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

