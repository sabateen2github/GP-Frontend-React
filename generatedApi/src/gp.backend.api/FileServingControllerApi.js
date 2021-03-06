/**
 * backend-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* FileServingController service.
* @module gp.backend.api/FileServingControllerApi
* @version 1.0.0
*/
export default class FileServingControllerApi {

    /**
    * Constructs a new FileServingControllerApi. 
    * @alias module:gp.backend.api/FileServingControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {String} filename 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    getFileWithHttpInfo(filename) {
      let postBody = null;
      // verify the required parameter 'filename' is set
      if (filename === undefined || filename === null) {
        throw new Error("Missing the required parameter 'filename' when calling getFile");
      }

      let pathParams = {
        'filename': filename
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
      let returnType = File;
      return this.apiClient.callApi(
        '/files/{filename}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} filename 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    getFile(filename) {
      return this.getFileWithHttpInfo(filename)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
