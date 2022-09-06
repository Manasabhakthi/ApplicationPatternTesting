'use strict';

const layerprotocal = require('../node_modules/onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/HttpServerInterface')
const layerclient=require("../node_modules/onf-core-model-ap/applicationPattern/onfModel/services/LogicalTerminationPointServices")
const HttpClientInterface=require("../node_modules/onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/HttpClientInterface")
const OperationClientInterface=require("../node_modules/onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/OperationClientInterface")
const Operationkeyuuid = require("../node_modules/onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/OperationServerInterface")
const tcpClientPath = require("../node_modules/onf-core-model-ap/applicationPattern/onfModel/models/LogicalTerminationPoint")
const tcpClientInterface = require("../node_modules/onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/TcpClientInterface")
const Forwardingdomain = require("../node_modules/onf-core-model-ap/applicationPattern/onfModel/models/ControlConstruct")
const ProfileCollection = require('../node_modules/onf-core-model-ap/applicationPattern/onfModel/models/ProfileCollection');

/**
 * Embed yourself into the MBH SDN application layer
 *
 * body V1_embedyourself_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.embedYourself = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Stops sending notifications of a specific subscription
 *
 * body V1_endsubscription_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.endSubscription = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns administrative information
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns inline_response_200_3
 **/
exports.informAboutApplication = function(user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(async function(resolve, reject) {
    let application = await layerprotocal.getHttpServerCapabilityAsync()
    console.log(application)
    
  
    if (Object.keys(application).length > 0) {
      resolve(application);
    } else {
      resolve();
    }
  });
}


/**
 * Returns administrative information for generic representation
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns inline_response_200_4
 **/
exports.informAboutApplicationInGenericRepresentation = function(user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "consequent-action-list" : [ {
    "label" : "Release History",
    "request" : "https://10.118.125.157:1000/v1/inform-about-release-history-in-generic-representation",
    "display-in-new-browser-window" : false
  }, {
    "label" : "API Documentation",
    "request" : "https://10.118.125.157:1000/docs",
    "display-in-new-browser-window" : true
  } ],
  "response-value-list" : [ {
    "field-name" : "applicationName",
    "value" : "OwnApplicationName",
    "datatype" : "string"
  }, {
    "field-name" : "releaseNumber",
    "value" : "1.0.0",
    "datatype" : "string"
  }, {
    "field-name" : "applicationPurpose",
    "value" : "Brief description of the purpose of the application.",
    "datatype" : "string"
  }, {
    "field-name" : "dataUpdatePeriod",
    "value" : "real-time",
    "datatype" : "string"
  }, {
    "field-name" : "ownerName",
    "value" : "Thorsten Heinze",
    "datatype" : "string"
  }, {
    "field-name" : "ownerEmailAddress",
    "value" : "Thorsten.Heinze@telefonica.com",
    "datatype" : "string"
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
 * Returns release history
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns List
 **/
exports.informAboutReleaseHistory = function(user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(async function(resolve, reject) {
    let releaseHistory = await layerprotocal.getReleaseListAsync()
    console.log(releaseHistory)
    
    if (Object.keys(releaseHistory).length > 0) {
      resolve(releaseHistory);
    } else {
      resolve();
    }
  });
}


/**
 * Returns release history for generic representation
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns inline_response_200_6
 **/
exports.informAboutReleaseHistoryInGenericRepresentation = function(user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "consequent-action-list" : [ {
    "request" : "request",
    "input-value-list" : [ {
      "field-name" : "field-name",
      "unit" : "unit"
    }, {
      "field-name" : "field-name",
      "unit" : "unit"
    } ],
    "display-in-new-browser-window" : true,
    "label" : "label"
  }, {
    "request" : "request",
    "input-value-list" : [ {
      "field-name" : "field-name",
      "unit" : "unit"
    }, {
      "field-name" : "field-name",
      "unit" : "unit"
    } ],
    "display-in-new-browser-window" : true,
    "label" : "label"
  } ],
  "response-value-list" : [ {
    "field-name" : "1.0.0",
    "value" : "20.11.2010 - Initial version.",
    "datatype" : "string"
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
 * Receives information about where to ask for approval of OaM requests
 *
 * body V1_inquireoamrequestapprovals_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.inquireOamRequestApprovals = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Allows retrieving all interface and internal connection data
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns inline_response_200_2
 **/
exports.listLtpsAndFcs = function(user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "core-model-1-4:control-construct" : {
    "forwarding-domain" : [ {
      "uuid" : "ro-1-0-0-op-fd-000",
      "forwarding-construct" : [ {
        "uuid" : "ro-1-0-0-op-fc-bm-000",
        "name" : [ {
          "value-name" : "ForwardingKind",
          "value" : "core-model-1-4:FORWARDING_KIND_TYPE_INVARIANT_PROCESS_SNIPPET"
        }, {
          "value-name" : "ForwardingName",
          "value" : "PromptForRegisteringCausesRegistrationRequest"
        } ],
        "fc-port" : [ {
          "local-id" : "000",
          "port-direction" : "core-model-1-4:PORT_DIRECTION_TYPE_MANAGEMENT",
          "logical-termination-point" : "ro-1-0-0-op-s-bm-000"
        }, {
          "local-id" : "100",
          "port-direction" : "core-model-1-4:PORT_DIRECTION_TYPE_INPUT",
          "logical-termination-point" : "ro-1-0-0-op-s-bm-000"
        } ]
      }, {
        "uuid" : "ro-1-0-0-op-fc-bm-001",
        "name" : [ {
          "value-name" : "ForwardingKind",
          "value" : "core-model-1-4:FORWARDING_KIND_TYPE_INVARIANT_PROCESS_SNIPPET"
        }, {
          "value-name" : "ForwardingName",
          "value" : "PromptForEmbeddingCausesRequestForBequeathingData"
        } ],
        "fc-port" : [ {
          "local-id" : "100",
          "port-direction" : "core-model-1-4:PORT_DIRECTION_TYPE_INPUT",
          "logical-termination-point" : "ro-1-0-0-op-s-bm-001"
        }, {
          "local-id" : "200",
          "port-direction" : "core-model-1-4:PORT_DIRECTION_TYPE_OUTPUT",
          "logical-termination-point" : "ro-1-0-0-op-c-bm-ro-1-0-0-000"
        } ]
      } ]
    } ],
    "logical-termination-point" : [ {
      "uuid" : "ro-1-0-0-op-s-bm-000",
      "ltp-direction" : "core-model-1-4:TERMINATION_DIRECTION_SOURCE",
      "client-ltp" : [ ],
      "server-ltp" : [ "ro-1-0-0-http-s-bm-000" ],
      "layer-protocol" : [ {
        "local-id" : "0",
        "layer-protocol-name" : "operation-server-interface-1-0:LAYER_PROTOCOL_NAME_TYPE_OPERATION_LAYER",
        "operation-server-interface-1-0:operation-server-interface-pac" : {
          "operation-server-interface-capability" : {
            "operation-name" : "/v1/register-yourself"
          },
          "operation-server-interface-configuration" : {
            "life-cycle-state" : "operation-server-interface-1-0:LIFE_CYCLE_STATE_TYPE_EXPERIMENTAL"
          }
        }
      } ]
    }, {
      "uuid" : "ro-1-0-0-http-s-bm-000",
      "ltp-direction" : "core-model-1-4:TERMINATION_DIRECTION_SOURCE",
      "client-ltp" : [ "ro-1-0-0-op-s-bm-000" ],
      "server-ltp" : [ ],
      "layer-protocol" : [ {
        "local-id" : "0",
        "layer-protocol-name" : "http-server-interface-1-0:LAYER_PROTOCOL_NAME_TYPE_HTTP_LAYER",
        "http-server-interface-1-0:http-server-interface-pac" : {
          "http-server-interface-capability" : {
            "application-name" : "RegistryOffice",
            "release-number" : "1.0.0",
            "data-update-period" : "http-server-interface-1-0:DATA_UPDATE_PERIOD_TYPE_REAL_TIME"
          }
        }
      } ]
    } ],
    "uuid" : "uuid"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Offers configuring the client side for sending OaM request information
 *
 * body V1_redirectoamrequestinformation_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.redirectOamRequestInformation = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Offers configuring the client side for sending service request information
 *
 * body V1_redirectservicerequestinformation_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.redirectServiceRequestInformation = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Offers configuring client side for sending information about topology changes
 *
 * body V1_redirecttopologychangeinformation_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.redirectTopologyChangeInformation = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Initiates registering at the currently active RegistryOffice
 * Shall also automatically execute without receiving any request every time the application starts
 *
 * body V1_registeryourself_body  (optional)
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.registerYourself = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Allows updating connection data of a serving application
 *
 * body V1_updateclient_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.updateClient = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(async function(resolve, reject) {
    let httpclientuuid = await HttpClientInterface.getHttpClientUuidAsync(body['application-name'],body['old-application-release-number'])
let releasenumber = await HttpClientInterface.setReleaseNumberAsync(httpclientuuid,body["new-application-release-number"])
let tcpClientUuid = await tcpClientPath.getServerLtpListAsync(httpclientuuid)
let IpaddressRemote = await tcpClientInterface.setRemoteAddressAsync(tcpClientUuid,body["new-application-address"])
let Portnumber = await tcpClientInterface.setRemotePortAsync(tcpClientUuid,body["new-application-port"])
   
    resolve();
  });
}


/**
 * Allows updating operation clients to redirect to backward compatible services
 *
 * body V1_updateoperationclient_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.updateOperationClient = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise( async function(resolve, reject) {
    let httpclientuuid = await HttpClientInterface.getHttpClientUuidAsync(body['application-name'],body['application-release-number'])
let operationclientuuid = await OperationClientInterface.getOperationClientUuidAsync(httpclientuuid,body['old-operation-name'])
let operationname  =await OperationClientInterface.getOperationNameAsync(operationclientuuid)
let updateoperationname = await OperationClientInterface.setOperationNameAsync(operationclientuuid,body['new-operation-name'])

    resolve();
  });
}


/**
 * Allows updating operation key at a server or client
 *
 * body V1_updateoperationkey_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.updateOperationKey = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(async function(resolve, reject) {
    console.log(body)
    let operation = await Operationkeyuuid.setOperationKeyAsync(body["operation-uuid"],body["new-operation-key"])
    
    resolve();
  });
}

