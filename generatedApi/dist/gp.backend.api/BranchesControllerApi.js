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
* @version 1.0.0
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
   * @param {Object} opts Optional parameters
   * @param {module:gp.backend.model/Branch} opts.branch 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(BranchesControllerApi, [{
    key: "createBranchWithHttpInfo",
    value: function createBranchWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['branch'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/branches', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {module:gp.backend.model/Branch} opts.branch 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "createBranch",
    value: function createBranch(opts) {
      return this.createBranchWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:gp.backend.model/Branch>} and HTTP response
     */

  }, {
    key: "getAllBranchesWithHttpInfo",
    value: function getAllBranchesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_Branch.default];
      return this.apiClient.callApi('/branches', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:gp.backend.model/Branch>}
     */

  }, {
    key: "getAllBranches",
    value: function getAllBranches() {
      return this.getAllBranchesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gp.backend.model/Branch} and HTTP response
     */

  }, {
    key: "getBranchWithHttpInfo",
    value: function getBranchWithHttpInfo(id) {
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
      return this.apiClient.callApi('/branches/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gp.backend.model/Branch}
     */

  }, {
    key: "getBranch",
    value: function getBranch(id) {
      return this.getBranchWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {module:gp.backend.model/Branch} branch 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateBranchWithHttpInfo",
    value: function updateBranchWithHttpInfo(id, branch) {
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
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/branches/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {module:gp.backend.model/Branch} branch 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateBranch",
    value: function updateBranch(id, branch) {
      return this.updateBranchWithHttpInfo(id, branch).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return BranchesControllerApi;
}();

exports.default = BranchesControllerApi;