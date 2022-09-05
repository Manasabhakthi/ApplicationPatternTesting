'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Returns remote address
 *
 * uuid String 
 * returns inline_response_200_27
 **/
exports.getTcpClientRemoteAddress = function(uuid) {
  return new Promise( async function(resolve, reject) {
    try{
      var value =await fileOperation.readFromDatabaseAsync(uuid);
      var response ={};
      response['application/json']= {
        "tcp-client-interface-1-0:ipv-4-address": value
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
 * Returns target TCP port at server
 *
 * uuid String 
 * returns inline_response_200_28
 **/
exports.getTcpClientRemotePort = function(uuid) {
  return new Promise(async function(resolve, reject) {
    try{
      var value =await fileOperation.readFromDatabaseAsync(uuid);
      var response ={};
      response['application/json']= {
        "tcp-client-interface-1-0:remote-port": value
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
 * Configures remote address
 *
 * body Tcpclientinterfaceconfiguration_remoteaddress_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putTcpClientRemoteAddress = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Configures target TCP port at server
 *
 * body Tcpclientinterfaceconfiguration_remoteport_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putTcpClientRemotePort = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

