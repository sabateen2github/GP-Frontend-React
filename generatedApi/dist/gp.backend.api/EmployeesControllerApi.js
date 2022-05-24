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
* @version v0
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
   * Callback function to receive the result of the createEmployee operation.
   * @callback module:gp.backend.api/EmployeesControllerApi~createEmployeeCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {module:gp.backend.model/Employee} opts.employee 
   * @param {module:gp.backend.api/EmployeesControllerApi~createEmployeeCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(EmployeesControllerApi, [{
    key: "createEmployee",
    value: function createEmployee(opts, callback) {
      opts = opts || {};
      var postBody = opts['employee'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/employees', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the editEmployee operation.
     * @callback module:gp.backend.api/EmployeesControllerApi~editEmployeeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:gp.backend.model/Employee} employee 
     * @param {module:gp.backend.api/EmployeesControllerApi~editEmployeeCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "editEmployee",
    value: function editEmployee(id, employee, callback) {
      var postBody = employee; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling editEmployee");
      } // verify the required parameter 'employee' is set


      if (employee === undefined || employee === null) {
        throw new Error("Missing the required parameter 'employee' when calling editEmployee");
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
      return this.apiClient.callApi('/employees/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getEmployee operation.
     * @callback module:gp.backend.api/EmployeesControllerApi~getEmployeeCallback
     * @param {String} error Error message, if any.
     * @param {module:gp.backend.model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:gp.backend.api/EmployeesControllerApi~getEmployeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:gp.backend.model/Employee}
     */

  }, {
    key: "getEmployee",
    value: function getEmployee(id, callback) {
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
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _Employee.default;
      return this.apiClient.callApi('/employees/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchEmployees operation.
     * @callback module:gp.backend.api/EmployeesControllerApi~searchEmployeesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:gp.backend.model/Employee>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} searchTerm 
     * @param {module:gp.backend.api/EmployeesControllerApi~searchEmployeesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:gp.backend.model/Employee>}
     */

  }, {
    key: "searchEmployees",
    value: function searchEmployees(searchTerm, callback) {
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
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [_Employee.default];
      return this.apiClient.callApi('/employees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EmployeesControllerApi;
}();

exports.default = EmployeesControllerApi;