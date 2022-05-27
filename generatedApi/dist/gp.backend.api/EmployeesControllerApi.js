"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Employee = _interopRequireDefault(require("../gp.backend.model/Employee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* EmployeesController service.
* @module gp.backend.api/EmployeesControllerApi
* @version 1.0.0
*/
var EmployeesControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmployeesControllerApi. 
  * @alias module:gp.backend.api/EmployeesControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmployeesControllerApi(apiClient) {
    _classCallCheck(this, EmployeesControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {File} employee 
   * @param {File} profilePic 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(EmployeesControllerApi, [{
    key: "createEmployeeWithHttpInfo",
    value: function createEmployeeWithHttpInfo(employee, profilePic) {
      var postBody = null; // verify the required parameter 'employee' is set

      if (employee === undefined || employee === null) {
        throw new Error("Missing the required parameter 'employee' when calling createEmployee");
      } // verify the required parameter 'profilePic' is set


      if (profilePic === undefined || profilePic === null) {
        throw new Error("Missing the required parameter 'profilePic' when calling createEmployee");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'employee': employee,
        'profilePic': profilePic
      };
      var authNames = ['bearerAuth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/employees', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {File} employee 
     * @param {File} profilePic 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "createEmployee",
    value: function createEmployee(employee, profilePic) {
      return this.createEmployeeWithHttpInfo(employee, profilePic).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {File} employee 
     * @param {File} profilePic 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "editEmployeeWithHttpInfo",
    value: function editEmployeeWithHttpInfo(employee, profilePic) {
      var postBody = null; // verify the required parameter 'employee' is set

      if (employee === undefined || employee === null) {
        throw new Error("Missing the required parameter 'employee' when calling editEmployee");
      } // verify the required parameter 'profilePic' is set


      if (profilePic === undefined || profilePic === null) {
        throw new Error("Missing the required parameter 'profilePic' when calling editEmployee");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'employee': employee,
        'profilePic': profilePic
      };
      var authNames = ['bearerAuth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/employees', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {File} employee 
     * @param {File} profilePic 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "editEmployee",
    value: function editEmployee(employee, profilePic) {
      return this.editEmployeeWithHttpInfo(employee, profilePic).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gp.backend.model/Employee} and HTTP response
     */

  }, {
    key: "getEmployeeWithHttpInfo",
    value: function getEmployeeWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEmployee");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _Employee.default;
      return this.apiClient.callApi('/employees/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gp.backend.model/Employee}
     */

  }, {
    key: "getEmployee",
    value: function getEmployee(id) {
      return this.getEmployeeWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} username 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gp.backend.model/Employee} and HTTP response
     */

  }, {
    key: "getEmployeeByUsernameWithHttpInfo",
    value: function getEmployeeByUsernameWithHttpInfo(username) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getEmployeeByUsername");
      }

      var pathParams = {};
      var queryParams = {
        'username': username
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _Employee.default;
      return this.apiClient.callApi('/employees/username', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} username 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gp.backend.model/Employee}
     */

  }, {
    key: "getEmployeeByUsername",
    value: function getEmployeeByUsername(username) {
      return this.getEmployeeByUsernameWithHttpInfo(username).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} searchTerm 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:gp.backend.model/Employee>} and HTTP response
     */

  }, {
    key: "searchEmployeesWithHttpInfo",
    value: function searchEmployeesWithHttpInfo(searchTerm) {
      var postBody = null; // verify the required parameter 'searchTerm' is set

      if (searchTerm === undefined || searchTerm === null) {
        throw new Error("Missing the required parameter 'searchTerm' when calling searchEmployees");
      }

      var pathParams = {};
      var queryParams = {
        'searchTerm': searchTerm
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_Employee.default];
      return this.apiClient.callApi('/employees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} searchTerm 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:gp.backend.model/Employee>}
     */

  }, {
    key: "searchEmployees",
    value: function searchEmployees(searchTerm) {
      return this.searchEmployeesWithHttpInfo(searchTerm).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EmployeesControllerApi;
}();

exports.default = EmployeesControllerApi;