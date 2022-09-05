'use strict';

var utils = require('../utils/writer.js');
var OperationServer = require('../service/OperationServerService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');

module.exports.getOperationServerLifeCycleState = async function getOperationServerLifeCycleState (req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
 await  OperationServer.getOperationServerLifeCycleState(req.url)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
      //utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode= responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
     // utils.writeJson(res, response);      
    });
    oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);

};

module.exports.getOperationServerOperationKey = async function getOperationServerOperationKey (req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
 await  OperationServer.getOperationServerOperationKey(req.url)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
      //utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode= responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
     // utils.writeJson(res, response);
    });
    oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);

};

module.exports.getOperationServerOperationName = async function getOperationServerOperationName (req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  await OperationServer.getOperationServerOperationName(req.url)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
      //utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode= responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
     // utils.writeJson(res, response);
    });
    oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);

};

module.exports.putOperationServerLifeCycleState = async function putOperationServerLifeCycleState (req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.OK;
 await  OperationServer.putOperationServerLifeCycleState(body, req.url)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
      //utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode= responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
     // utils.writeJson(res, response);
    });
    oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);

};

module.exports.putOperationServerOperationKey = async function putOperationServerOperationKey (req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  await OperationServer.putOperationServerOperationKey(body, req.url)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
      //utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode= responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseBuilder.buildResponse(res, responseCode, response);
     // utils.writeJson(res, response);
    });
    oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);

};
