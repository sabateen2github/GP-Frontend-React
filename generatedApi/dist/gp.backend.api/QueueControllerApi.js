"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BookedTurnQueue = _interopRequireDefault(require("../gp.backend.model/BookedTurnQueue"));

var _LatLng = _interopRequireDefault(require("../gp.backend.model/LatLng"));

var _Queue = _interopRequireDefault(require("../gp.backend.model/Queue"));

var _QueueSpec = _interopRequireDefault(require("../gp.backend.model/QueueSpec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* QueueController service.
* @module gp.backend.api/QueueControllerApi
* @version v1
*/
var QueueControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new QueueControllerApi. 
  * @alias module:gp.backend.api/QueueControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function QueueControllerApi(apiClient) {
    _classCallCheck(this, QueueControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {String} id 
   * @param {String} branchId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(QueueControllerApi, [{
    key: "advanceQueueWithHttpInfo",
    value: function advanceQueueWithHttpInfo(id, branchId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling advanceQueue");
      } // verify the required parameter 'branchId' is set


      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling advanceQueue");
      }

      var pathParams = {};
      var queryParams = {
        'id': id,
        'branchId': branchId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue/advance', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "advanceQueue",
    value: function advanceQueue(id, branchId) {
      return this.advanceQueueWithHttpInfo(id, branchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} userId 
     * @param {String} queueId 
     * @param {String} branchId 
     * @param {Object.<String, module:gp.backend.model/LatLng>} location 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "bookQueueWithHttpInfo",
    value: function bookQueueWithHttpInfo(userId, queueId, branchId, location) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling bookQueue");
      } // verify the required parameter 'queueId' is set


      if (queueId === undefined || queueId === null) {
        throw new Error("Missing the required parameter 'queueId' when calling bookQueue");
      } // verify the required parameter 'branchId' is set


      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling bookQueue");
      } // verify the required parameter 'location' is set


      if (location === undefined || location === null) {
        throw new Error("Missing the required parameter 'location' when calling bookQueue");
      }

      var pathParams = {};
      var queryParams = {
        'userId': userId,
        'queueId': queueId,
        'branchId': branchId,
        'location': location
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue/book', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} userId 
     * @param {String} queueId 
     * @param {String} branchId 
     * @param {Object.<String, module:gp.backend.model/LatLng>} location 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "bookQueue",
    value: function bookQueue(userId, queueId, branchId, location) {
      return this.bookQueueWithHttpInfo(userId, queueId, branchId, location).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} userId 
     * @param {String} queueId 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "cancelTurnWithHttpInfo",
    value: function cancelTurnWithHttpInfo(userId, queueId, branchId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling cancelTurn");
      } // verify the required parameter 'queueId' is set


      if (queueId === undefined || queueId === null) {
        throw new Error("Missing the required parameter 'queueId' when calling cancelTurn");
      } // verify the required parameter 'branchId' is set


      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling cancelTurn");
      }

      var pathParams = {};
      var queryParams = {
        'userId': userId,
        'queueId': queueId,
        'branchId': branchId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue/book', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} userId 
     * @param {String} queueId 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "cancelTurn",
    value: function cancelTurn(userId, queueId, branchId) {
      return this.cancelTurnWithHttpInfo(userId, queueId, branchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {module:gp.backend.model/QueueSpec} queueSpec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "createQueueSpecWithHttpInfo",
    value: function createQueueSpecWithHttpInfo(queueSpec) {
      var postBody = queueSpec; // verify the required parameter 'queueSpec' is set

      if (queueSpec === undefined || queueSpec === null) {
        throw new Error("Missing the required parameter 'queueSpec' when calling createQueueSpec");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:gp.backend.model/QueueSpec} queueSpec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "createQueueSpec",
    value: function createQueueSpec(queueSpec) {
      return this.createQueueSpecWithHttpInfo(queueSpec).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteQueueWithHttpInfo",
    value: function deleteQueueWithHttpInfo(id, branchId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteQueue");
      } // verify the required parameter 'branchId' is set


      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling deleteQueue");
      }

      var pathParams = {};
      var queryParams = {
        'id': id,
        'branchId': branchId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteQueue",
    value: function deleteQueue(id, branchId) {
      return this.deleteQueueWithHttpInfo(id, branchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {module:gp.backend.model/QueueSpec} queueSpec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "editQueueSpecWithHttpInfo",
    value: function editQueueSpecWithHttpInfo(queueSpec) {
      var postBody = queueSpec; // verify the required parameter 'queueSpec' is set

      if (queueSpec === undefined || queueSpec === null) {
        throw new Error("Missing the required parameter 'queueSpec' when calling editQueueSpec");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:gp.backend.model/QueueSpec} queueSpec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "editQueueSpec",
    value: function editQueueSpec(queueSpec) {
      return this.editQueueSpecWithHttpInfo(queueSpec).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:gp.backend.model/BookedTurnQueue>} and HTTP response
     */

  }, {
    key: "getActiveQueuesWithHttpInfo",
    value: function getActiveQueuesWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getActiveQueues");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_BookedTurnQueue.default];
      return this.apiClient.callApi('/queues/active/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:gp.backend.model/BookedTurnQueue>}
     */

  }, {
    key: "getActiveQueues",
    value: function getActiveQueues(userId) {
      return this.getActiveQueuesWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:gp.backend.model/QueueSpec>} and HTTP response
     */

  }, {
    key: "getAllQueueSpecsWithHttpInfo",
    value: function getAllQueueSpecsWithHttpInfo(branchId) {
      var postBody = null; // verify the required parameter 'branchId' is set

      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling getAllQueueSpecs");
      }

      var pathParams = {};
      var queryParams = {
        'branchId': branchId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_QueueSpec.default];
      return this.apiClient.callApi('/queues/spec/all', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:gp.backend.model/QueueSpec>}
     */

  }, {
    key: "getAllQueueSpecs",
    value: function getAllQueueSpecs(branchId) {
      return this.getAllQueueSpecsWithHttpInfo(branchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:gp.backend.model/Queue>} and HTTP response
     */

  }, {
    key: "getAllQueuesWithHttpInfo",
    value: function getAllQueuesWithHttpInfo(branchId) {
      var postBody = null; // verify the required parameter 'branchId' is set

      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling getAllQueues");
      }

      var pathParams = {};
      var queryParams = {
        'branchId': branchId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_Queue.default];
      return this.apiClient.callApi('/queues/queues/all', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:gp.backend.model/Queue>}
     */

  }, {
    key: "getAllQueues",
    value: function getAllQueues(branchId) {
      return this.getAllQueuesWithHttpInfo(branchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:gp.backend.model/BookedTurnQueue>} and HTTP response
     */

  }, {
    key: "getArchivedQueuesWithHttpInfo",
    value: function getArchivedQueuesWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getArchivedQueues");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_BookedTurnQueue.default];
      return this.apiClient.callApi('/queues/archived/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:gp.backend.model/BookedTurnQueue>}
     */

  }, {
    key: "getArchivedQueues",
    value: function getArchivedQueues(userId) {
      return this.getArchivedQueuesWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gp.backend.model/Queue} and HTTP response
     */

  }, {
    key: "getQueueWithHttpInfo",
    value: function getQueueWithHttpInfo(id, branchId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getQueue");
      } // verify the required parameter 'branchId' is set


      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling getQueue");
      }

      var pathParams = {};
      var queryParams = {
        'id': id,
        'branchId': branchId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _Queue.default;
      return this.apiClient.callApi('/queues/queue', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gp.backend.model/Queue}
     */

  }, {
    key: "getQueue",
    value: function getQueue(id, branchId) {
      return this.getQueueWithHttpInfo(id, branchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "resetQueueWithHttpInfo",
    value: function resetQueueWithHttpInfo(id, branchId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling resetQueue");
      } // verify the required parameter 'branchId' is set


      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling resetQueue");
      }

      var pathParams = {};
      var queryParams = {
        'id': id,
        'branchId': branchId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue/reset', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "resetQueue",
    value: function resetQueue(id, branchId) {
      return this.resetQueueWithHttpInfo(id, branchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} instituteId 
     * @param {String} userId 
     * @param {String} queueId 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "switchUserLocationModeWithHttpInfo",
    value: function switchUserLocationModeWithHttpInfo(instituteId, userId, queueId, branchId) {
      var postBody = null; // verify the required parameter 'instituteId' is set

      if (instituteId === undefined || instituteId === null) {
        throw new Error("Missing the required parameter 'instituteId' when calling switchUserLocationMode");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling switchUserLocationMode");
      } // verify the required parameter 'queueId' is set


      if (queueId === undefined || queueId === null) {
        throw new Error("Missing the required parameter 'queueId' when calling switchUserLocationMode");
      } // verify the required parameter 'branchId' is set


      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling switchUserLocationMode");
      }

      var pathParams = {};
      var queryParams = {
        'instituteId': instituteId,
        'userId': userId,
        'queueId': queueId,
        'branchId': branchId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue/book/toggle', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} instituteId 
     * @param {String} userId 
     * @param {String} queueId 
     * @param {String} branchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "switchUserLocationMode",
    value: function switchUserLocationMode(instituteId, userId, queueId, branchId) {
      return this.switchUserLocationModeWithHttpInfo(instituteId, userId, queueId, branchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return QueueControllerApi;
}();

exports.default = QueueControllerApi;