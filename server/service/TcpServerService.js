'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Returns address of the server
 *
 * uuid String 
 * returns inline_response_200_18
 **/
exports.getTcpServerLocalAddress = function(uuid) {
  return new Promise(async function(resolve, reject) {
    try{
      var value =await fileOperation.readFromDatabaseAsync(uuid);
      var response ={};
      response['application/json']= {
        "tcp-server-interface-1-0:ipv-4-address": value
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
 * Returns TCP port of the server
 *
 * uuid String 
 * returns inline_response_200_19
 **/
exports.getTcpServerLocalPort = function(uuid) {
  return new Promise(async function(resolve, reject) {
    try{
      var value =await fileOperation.readFromDatabaseAsync(uuid);
      var response ={};
      response['application/json']= {
        "tcp-server-interface-1-0:local-port": value
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
 * Documents address of the server
 *
 * body Tcpserverinterfaceconfiguration_localaddress_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putTcpServerLocalAddress = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Documents TCP port of the server
 *
 * body Tcpserverinterfaceconfiguration_localport_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putTcpServerLocalPort = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

