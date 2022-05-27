"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* FileServingController service.
* @module gp.backend.api/FileServingControllerApi
* @version v1
*/
var FileServingControllerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FileServingControllerApi. 
  * @alias module:gp.backend.api/FileServingControllerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FileServingControllerApi(apiClient) {
    _classCallCheck(this, FileServingControllerApi);

    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @param {String} filename 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
   */


  _createClass(FileServingControllerApi, [{
    key: "getFileWithHttpInfo",
    value: function getFileWithHttpInfo(filename) {
      var postBody = null; // verify the required parameter 'filename' is set

      if (filename === undefined || filename === null) {
        throw new Error("Missing the required parameter 'filename' when calling getFile");
      }

      var pathParams = {
        'filename': filename
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = File;
      return this.apiClient.callApi('/files/{filename}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} filename 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "getFile",
    value: function getFile(filename) {
      return this.getFileWithHttpInfo(filename).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FileServingControllerApi;
}();

exports.default = FileServingControllerApi;