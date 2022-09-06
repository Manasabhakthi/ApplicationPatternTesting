'use strict';

var utils = require('../utils/writer.js');
var IndividualServices = require('../service/IndividualServicesService');
var executionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var restResponseHeader = require('onf-core-model-ap/applicationPattern/rest/server/ResponseHeader');

module.exports.bequeathYourDataAndDie = async  function bequeathYourDataAndDie (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await IndividualServices.bequeathYourDataAndDie(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
   // utils.writeJson(res, response);
    })
    .catch(async function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
       responseBuilder.buildResponse(res, responseCode, response, responseHeader);
      //  utils.writeJson(res, response);
    });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseDocument)
  }
  catch(error) {
    console.log("error", error)
  }
};

module.exports.listApplications = async function listApplications (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
 try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
  await IndividualServices.listApplications(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
      
      //utils.writeJson(res, response);
    })
    .catch(async function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
     // utils.writeJson(res, response);
    });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseDocument)
  }
  catch(error) {
    console.log("error", error)
  }
};

module.exports.startApplicationInGenericRepresentation = async function startApplicationInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
  await IndividualServices.startApplicationInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
      // utils.writeJson(res, response);
    })
    .catch(async function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
       responseBuilder.buildResponse(res, responseCode, response, responseHeader);
     // utils.writeJson(res, response);
    });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseDocument)
  }
  catch(error) {
    console.log("error", error)
  }
};
