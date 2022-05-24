/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Employee from '../model/Employee';

/**
* EmployeesController service.
* @module api/EmployeesControllerApi
* @version v0
*/
export default class EmployeesControllerApi {

    /**
    * Constructs a new EmployeesControllerApi. 
    * @alias module:api/EmployeesControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createEmployee operation.
     * @callback module:api/EmployeesControllerApi~createEmployeeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Employee} opts.employee 
     * @param {module:api/EmployeesControllerApi~createEmployeeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createEmployee(opts, callback) {
      opts = opts || {};
      let postBody = opts['employee'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/employees', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the editEmployee operation.
     * @callback module:api/EmployeesControllerApi~editEmployeeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:model/Employee} employee 
     * @param {module:api/EmployeesControllerApi~editEmployeeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    editEmployee(id, employee, callback) {
      let postBody = employee;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling editEmployee");
      }
      // verify the required parameter 'employee' is set
      if (employee === undefined || employee === null) {
        throw new Error("Missing the required parameter 'employee' when calling editEmployee");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/employees/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmployee operation.
     * @callback module:api/EmployeesControllerApi~getEmployeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/EmployeesControllerApi~getEmployeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employee}
     */
    getEmployee(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEmployee");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = Employee;
      return this.apiClient.callApi(
        '/employees/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchEmployees operation.
     * @callback module:api/EmployeesControllerApi~searchEmployeesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Employee>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} searchTerm 
     * @param {module:api/EmployeesControllerApi~searchEmployeesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Employee>}
     */
    searchEmployees(searchTerm, callback) {
      let postBody = null;
      // verify the required parameter 'searchTerm' is set
      if (searchTerm === undefined || searchTerm === null) {
        throw new Error("Missing the required parameter 'searchTerm' when calling searchEmployees");
      }

      let pathParams = {
      };
      let queryParams = {
        'searchTerm': searchTerm
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Employee];
      return this.apiClient.callApi(
        '/employees', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
