"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserDataDTO = _interopRequireDefault(require("../gp.backend.model/UserDataDTO"));

var _UserResponseDTO = _interopRequireDefault(require("../gp.backend.model/UserResponseDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* UserController service.
* @module gp.backend.api/UserControllerApi
* @version 1.0.0
*/
var UserControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserControllerApi. 
  * @alias module:gp.backend.api/UserControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserControllerApi(apiClient) {
    _classCallCheck(this, UserControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {String} username 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
   */


  _createClass(UserControllerApi, [{
    key: "callDeleteWithHttpInfo",
    value: function callDeleteWithHttpInfo(username) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling callDelete");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = 'String';
      return this.apiClient.callApi('/users/{username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} username 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "callDelete",
    value: function callDelete(username) {
      return this.callDeleteWithHttpInfo(username).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} username 
     * @param {String} password 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */

  }, {
    key: "loginWithHttpInfo",
    value: function loginWithHttpInfo(username, password) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling login");
      } // verify the required parameter 'password' is set


      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling login");
      }

      var pathParams = {};
      var queryParams = {
        'username': username,
        'password': password
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = 'String';
      return this.apiClient.callApi('/users/signin', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} username 
     * @param {String} password 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "login",
    value: function login(username, password) {
      return this.loginWithHttpInfo(username, password).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */

  }, {
    key: "refreshWithHttpInfo",
    value: function refreshWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = 'String';
      return this.apiClient.callApi('/users/refresh', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "refresh",
    value: function refresh() {
      return this.refreshWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} username 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gp.backend.model/UserResponseDTO} and HTTP response
     */

  }, {
    key: "searchWithHttpInfo",
    value: function searchWithHttpInfo(username) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling search");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _UserResponseDTO.default;
      return this.apiClient.callApi('/users/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} username 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gp.backend.model/UserResponseDTO}
     */

  }, {
    key: "search",
    value: function search(username) {
      return this.searchWithHttpInfo(username).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {module:gp.backend.model/UserDataDTO} userDataDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */

  }, {
    key: "signupWithHttpInfo",
    value: function signupWithHttpInfo(userDataDTO) {
      var postBody = userDataDTO; // verify the required parameter 'userDataDTO' is set

      if (userDataDTO === undefined || userDataDTO === null) {
        throw new Error("Missing the required parameter 'userDataDTO' when calling signup");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = 'String';
      return this.apiClient.callApi('/users/signup', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:gp.backend.model/UserDataDTO} userDataDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "signup",
    value: function signup(userDataDTO) {
      return this.signupWithHttpInfo(userDataDTO).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gp.backend.model/UserResponseDTO} and HTTP response
     */

  }, {
    key: "whoamiWithHttpInfo",
    value: function whoamiWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _UserResponseDTO.default;
      return this.apiClient.callApi('/users/me', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gp.backend.model/UserResponseDTO}
     */

  }, {
    key: "whoami",
    value: function whoami() {
      return this.whoamiWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UserControllerApi;
}();

exports.default = UserControllerApi;