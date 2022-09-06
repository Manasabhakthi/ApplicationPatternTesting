'use strict';

var utils = require('../utils/writer.js');
var BasicServices = require('../service/BasicServicesService');
var executionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var restResponseHeader = require('onf-core-model-ap/applicationPattern/rest/server/ResponseHeader');


module.exports.embedYourself = async function embedYourself (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};

  await BasicServices.embedYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney)
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
      //utils.writeJson(res, response);
    });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseDocument)

}
catch(error) {
  console.log("error", error)
}
};

module.exports.endSubscription = async function endSubscription (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
 try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};

  await BasicServices.endSubscription(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
      //utils.writeJson(res, response);
    })
    .catch(async function (response) {
      //utils.writeJson(res, response);
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
       responseBuilder.buildResponse(res, responseCode, response, responseHeader);
    });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseDocument)
  }
  catch(error) {
    console.log("error", error)
  }
};

module.exports.informAboutApplication = async function informAboutApplication (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
 try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
  await BasicServices.informAboutApplication(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
    //  utils.writeJson(res, response);
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

module.exports.informAboutApplicationInGenericRepresentation = async function informAboutApplicationInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
 try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.informAboutApplicationInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
    //  utils.writeJson(res, response);
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

module.exports.informAboutReleaseHistory = async function informAboutReleaseHistory (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
  await BasicServices.informAboutReleaseHistory(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
  //    utils.writeJson(res, response);
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

module.exports.informAboutReleaseHistoryInGenericRepresentation = async function informAboutReleaseHistoryInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.informAboutReleaseHistoryInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
    //  utils.writeJson(res, response);
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

module.exports.inquireOamRequestApprovals = async function inquireOamRequestApprovals (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.inquireOamRequestApprovals(body, user, originator, xCorrelator, traceIndicator, customerJourney)
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

module.exports.listLtpsAndFcs = async function listLtpsAndFcs (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.listLtpsAndFcs(user, originator, xCorrelator, traceIndicator, customerJourney)
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
      //utils.writeJson(res, response);
    });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseDocument)
  }
  catch(error) {
    console.log("error", error)
  }
};

module.exports.redirectOamRequestInformation = async function redirectOamRequestInformation (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
 try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await  BasicServices.redirectOamRequestInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
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

module.exports.redirectServiceRequestInformation = async function redirectServiceRequestInformation (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
 try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.redirectServiceRequestInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
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

module.exports.redirectTopologyChangeInformation = async function redirectTopologyChangeInformation (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.redirectTopologyChangeInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney)
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

module.exports.registerYourself = async function registerYourself (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.registerYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney)
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

module.exports.updateClient = async function updateClient (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
 try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.updateClient(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
    //  utils.writeJson(res, response);
    })
    .catch( async function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
       responseBuilder.buildResponse(res, responseCode, response, responseHeader);
      //utils.writeJson(res, response);
    });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseDocument)
  }
  catch(error) {
    console.log("error", error)
  }
};

module.exports.updateOperationClient = async function updateOperationClient (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.updateOperationClient(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
   //   utils.writeJson(res, response);
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

module.exports.updateOperationKey = async function updateOperationKey (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  try{
  let responseCode = responseCodeEnum.code.OK;
  let startTime = process.hrtime();
  let responseDocument = {};
 await BasicServices.updateOperationKey(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
     responseBuilder.buildResponse(res, responseCode, response, responseHeader);
    //  utils.writeJson(res, response);
    })
    .catch(async function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      responseDocument = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
       responseBuilder.buildResponse(res, responseCode, response, responseHeader);
      //utils.writeJson(res, response);
    });
    executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseDocument)
  }
  catch(error) {
    console.log("error", error)
  }
};
