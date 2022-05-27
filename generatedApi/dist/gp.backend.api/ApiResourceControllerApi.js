"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SecurityConfiguration = _interopRequireDefault(require("../gp.backend.model/SecurityConfiguration"));

var _SwaggerResource = _interopRequireDefault(require("../gp.backend.model/SwaggerResource"));

var _UiConfiguration = _interopRequireDefault(require("../gp.backend.model/UiConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ApiResourceController service.
* @module gp.backend.api/ApiResourceControllerApi
* @version v0
*/
var ApiResourceControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ApiResourceControllerApi. 
  * @alias module:gp.backend.api/ApiResourceControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApiResourceControllerApi(apiClient) {
    _classCallCheck(this, ApiResourceControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gp.backend.model/SecurityConfiguration} and HTTP response
   */


  _createClass(ApiResourceControllerApi, [{
    key: "securityConfigurationWithHttpInfo",
    value: function securityConfigurationWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SecurityConfiguration.default;
      return this.apiClient.callApi('/swagger-resources/configuration/security', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gp.backend.model/SecurityConfiguration}
     */

  }, {
    key: "securityConfiguration",
    value: function securityConfiguration() {
      return this.securityConfigurationWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:gp.backend.model/SwaggerResource>} and HTTP response
     */

  }, {
    key: "swaggerResourcesWithHttpInfo",
    value: function swaggerResourcesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_SwaggerResource.default];
      return this.apiClient.callApi('/swagger-resources', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:gp.backend.model/SwaggerResource>}
     */

  }, {
    key: "swaggerResources",
    value: function swaggerResources() {
      return this.swaggerResourcesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gp.backend.model/UiConfiguration} and HTTP response
     */

  }, {
    key: "uiConfigurationWithHttpInfo",
    value: function uiConfigurationWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UiConfiguration.default;
      return this.apiClient.callApi('/swagger-resources/configuration/ui', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gp.backend.model/UiConfiguration}
     */

  }, {
    key: "uiConfiguration",
    value: function uiConfiguration() {
      return this.uiConfigurationWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ApiResourceControllerApi;
}();

exports.default = ApiResourceControllerApi;