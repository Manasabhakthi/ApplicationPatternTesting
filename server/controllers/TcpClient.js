'use strict';

var utils = require('../utils/writer.js');
var TcpClient = require('../service/TcpClientService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');

module.exports.getTcpClientRemoteAddress = async function getTcpClientRemoteAddress (req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
 
 await TcpClient.getTcpClientRemoteAddress(req.url)
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

module.exports.getTcpClientRemotePort = async function getTcpClientRemotePort (req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
 
 await  TcpClient.getTcpClientRemotePort(req.url)
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

module.exports.putTcpClientRemoteAddress = async function putTcpClientRemoteAddress (req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.OK;
 
 await  TcpClient.putTcpClientRemoteAddress(body, req.url)
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

module.exports.putTcpClientRemotePort = async function putTcpClientRemotePort (req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.OK;
 
 await TcpClient.putTcpClientRemotePort(body, req.url)
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
