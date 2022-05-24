"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Institute = _interopRequireDefault(require("../gp.backend.model/Institute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* InstituteController service.
* @module gp.backend.api/InstituteControllerApi
* @version v0
*/
var InstituteControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InstituteControllerApi. 
  * @alias module:gp.backend.api/InstituteControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InstituteControllerApi(apiClient) {
    _classCallCheck(this, InstituteControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * Callback function to receive the result of the createInstitute operation.
   * @callback module:gp.backend.api/InstituteControllerApi~createInstituteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {module:gp.backend.model/Institute} opts.institute 
   * @param {module:gp.backend.api/InstituteControllerApi~createInstituteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(InstituteControllerApi, [{
    key: "createInstitute",
    value: function createInstitute(opts, callback) {
      opts = opts || {};
      var postBody = opts['institute'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/institute', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteInstitute operation.
     * @callback module:gp.backend.api/InstituteControllerApi~deleteInstituteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:gp.backend.api/InstituteControllerApi~deleteInstituteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteInstitute",
    value: function deleteInstitute(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteInstitute");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/institute/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getInstitute operation.
     * @callback module:gp.backend.api/InstituteControllerApi~getInstituteCallback
     * @param {String} error Error message, if any.
     * @param {module:gp.backend.model/Institute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:gp.backend.api/InstituteControllerApi~getInstituteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:gp.backend.model/Institute}
     */

  }, {
    key: "getInstitute",
    value: function getInstitute(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInstitute");
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
      var returnType = _Institute.default;
      return this.apiClient.callApi('/institute/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchInstitutes operation.
     * @callback module:gp.backend.api/InstituteControllerApi~searchInstitutesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:gp.backend.model/Institute>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchTerms 
     * @param {module:gp.backend.api/InstituteControllerApi~searchInstitutesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:gp.backend.model/Institute>}
     */

  }, {
    key: "searchInstitutes",
    value: function searchInstitutes(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'searchTerms': opts['searchTerms']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_Institute.default];
      return this.apiClient.callApi('/institute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return InstituteControllerApi;
}();

exports.default = InstituteControllerApi;