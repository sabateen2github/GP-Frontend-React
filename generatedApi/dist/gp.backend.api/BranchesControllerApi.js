"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Branch = _interopRequireDefault(require("../gp.backend.model/Branch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* BranchesController service.
* @module gp.backend.api/BranchesControllerApi
* @version v0
*/
var BranchesControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BranchesControllerApi. 
  * @alias module:gp.backend.api/BranchesControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BranchesControllerApi(apiClient) {
    _classCallCheck(this, BranchesControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the createBranch operation.
   * @callback module:gp.backend.api/BranchesControllerApi~createBranchCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {module:gp.backend.model/Branch} opts.branch 
   * @param {module:gp.backend.api/BranchesControllerApi~createBranchCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(BranchesControllerApi, [{
    key: "createBranch",
    value: function createBranch(opts, callback) {
      opts = opts || {};
      var postBody = opts['branch'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/branches', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAllBranches operation.
     * @callback module:gp.backend.api/BranchesControllerApi~getAllBranchesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:gp.backend.model/Branch>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:gp.backend.api/BranchesControllerApi~getAllBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:gp.backend.model/Branch>}
     */

  }, {
    key: "getAllBranches",
    value: function getAllBranches(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_Branch.default];
      return this.apiClient.callApi('/branches', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getBranch operation.
     * @callback module:gp.backend.api/BranchesControllerApi~getBranchCallback
     * @param {String} error Error message, if any.
     * @param {module:gp.backend.model/Branch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:gp.backend.api/BranchesControllerApi~getBranchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:gp.backend.model/Branch}
     */

  }, {
    key: "getBranch",
    value: function getBranch(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBranch");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _Branch.default;
      return this.apiClient.callApi('/branches/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateBranch operation.
     * @callback module:gp.backend.api/BranchesControllerApi~updateBranchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:gp.backend.model/Branch} branch 
     * @param {module:gp.backend.api/BranchesControllerApi~updateBranchCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateBranch",
    value: function updateBranch(id, branch, callback) {
      var postBody = branch; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBranch");
      } // verify the required parameter 'branch' is set


      if (branch === undefined || branch === null) {
        throw new Error("Missing the required parameter 'branch' when calling updateBranch");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/branches/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BranchesControllerApi;
}();

exports.default = BranchesControllerApi;