"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BookedTurnQueue = _interopRequireDefault(require("../gp.backend.model/BookedTurnQueue"));

var _Queue = _interopRequireDefault(require("../gp.backend.model/Queue"));

var _QueueSpec = _interopRequireDefault(require("../gp.backend.model/QueueSpec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* QueueController service.
* @module gp.backend.api/QueueControllerApi
* @version v0
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
   * Callback function to receive the result of the advanceQueue operation.
   * @callback module:gp.backend.api/QueueControllerApi~advanceQueueCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} id 
   * @param {String} branchId 
   * @param {module:gp.backend.api/QueueControllerApi~advanceQueueCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(QueueControllerApi, [{
    key: "advanceQueue",
    value: function advanceQueue(id, branchId, callback) {
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
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue/advance', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the bookQueue operation.
     * @callback module:gp.backend.api/QueueControllerApi~bookQueueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {String} queueId 
     * @param {String} branchId 
     * @param {module:gp.backend.api/QueueControllerApi~bookQueueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "bookQueue",
    value: function bookQueue(userId, queueId, branchId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling bookQueue");
      } // verify the required parameter 'queueId' is set


      if (queueId === undefined || queueId === null) {
        throw new Error("Missing the required parameter 'queueId' when calling bookQueue");
      } // verify the required parameter 'branchId' is set


      if (branchId === undefined || branchId === null) {
        throw new Error("Missing the required parameter 'branchId' when calling bookQueue");
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
      return this.apiClient.callApi('/queues/queue/book', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteQueue operation.
     * @callback module:gp.backend.api/QueueControllerApi~deleteQueueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} branchId 
     * @param {module:gp.backend.api/QueueControllerApi~deleteQueueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteQueue",
    value: function deleteQueue(id, branchId, callback) {
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
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the editQueueSpec operation.
     * @callback module:gp.backend.api/QueueControllerApi~editQueueSpecCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:gp.backend.model/QueueSpec} queueSpec 
     * @param {module:gp.backend.api/QueueControllerApi~editQueueSpecCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "editQueueSpec",
    value: function editQueueSpec(queueSpec, callback) {
      var postBody = queueSpec; // verify the required parameter 'queueSpec' is set

      if (queueSpec === undefined || queueSpec === null) {
        throw new Error("Missing the required parameter 'queueSpec' when calling editQueueSpec");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getActiveQueues operation.
     * @callback module:gp.backend.api/QueueControllerApi~getActiveQueuesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:gp.backend.model/BookedTurnQueue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {module:gp.backend.api/QueueControllerApi~getActiveQueuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:gp.backend.model/BookedTurnQueue>}
     */

  }, {
    key: "getActiveQueues",
    value: function getActiveQueues(userId, callback) {
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
      return this.apiClient.callApi('/queues/active/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAllQueueSpecs operation.
     * @callback module:gp.backend.api/QueueControllerApi~getAllQueueSpecsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:gp.backend.model/QueueSpec>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} branchId 
     * @param {module:gp.backend.api/QueueControllerApi~getAllQueueSpecsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:gp.backend.model/QueueSpec>}
     */

  }, {
    key: "getAllQueueSpecs",
    value: function getAllQueueSpecs(branchId, callback) {
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
      return this.apiClient.callApi('/queues/spec/all', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAllQueues operation.
     * @callback module:gp.backend.api/QueueControllerApi~getAllQueuesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:gp.backend.model/Queue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} branchId 
     * @param {module:gp.backend.api/QueueControllerApi~getAllQueuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:gp.backend.model/Queue>}
     */

  }, {
    key: "getAllQueues",
    value: function getAllQueues(branchId, callback) {
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
      return this.apiClient.callApi('/queues/queues/all', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getArchivedQueues operation.
     * @callback module:gp.backend.api/QueueControllerApi~getArchivedQueuesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:gp.backend.model/BookedTurnQueue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {module:gp.backend.api/QueueControllerApi~getArchivedQueuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:gp.backend.model/BookedTurnQueue>}
     */

  }, {
    key: "getArchivedQueues",
    value: function getArchivedQueues(userId, callback) {
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
      return this.apiClient.callApi('/queues/archived/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getQueue operation.
     * @callback module:gp.backend.api/QueueControllerApi~getQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:gp.backend.model/Queue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} branchId 
     * @param {module:gp.backend.api/QueueControllerApi~getQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:gp.backend.model/Queue}
     */

  }, {
    key: "getQueue",
    value: function getQueue(id, branchId, callback) {
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
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _Queue.default;
      return this.apiClient.callApi('/queues/queue', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resetQueue operation.
     * @callback module:gp.backend.api/QueueControllerApi~resetQueueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} branchId 
     * @param {module:gp.backend.api/QueueControllerApi~resetQueueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "resetQueue",
    value: function resetQueue(id, branchId, callback) {
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
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/queues/queue/reset', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return QueueControllerApi;
}();

exports.default = QueueControllerApi;