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
 * The UiConfiguration model module.
 * @module gp.backend.model/UiConfiguration
 * @version v0
 */
var UiConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UiConfiguration</code>.
   * @alias module:gp.backend.model/UiConfiguration
   */
  function UiConfiguration() {
    _classCallCheck(this, UiConfiguration);

    UiConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UiConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UiConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/UiConfiguration} obj Optional instance to populate.
     * @return {module:gp.backend.model/UiConfiguration} The populated <code>UiConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UiConfiguration();

        if (data.hasOwnProperty('deepLinking')) {
          obj['deepLinking'] = _ApiClient.default.convertToType(data['deepLinking'], 'Boolean');
        }

        if (data.hasOwnProperty('displayOperationId')) {
          obj['displayOperationId'] = _ApiClient.default.convertToType(data['displayOperationId'], 'Boolean');
        }

        if (data.hasOwnProperty('defaultModelsExpandDepth')) {
          obj['defaultModelsExpandDepth'] = _ApiClient.default.convertToType(data['defaultModelsExpandDepth'], 'Number');
        }

        if (data.hasOwnProperty('defaultModelExpandDepth')) {
          obj['defaultModelExpandDepth'] = _ApiClient.default.convertToType(data['defaultModelExpandDepth'], 'Number');
        }

        if (data.hasOwnProperty('defaultModelRendering')) {
          obj['defaultModelRendering'] = _ApiClient.default.convertToType(data['defaultModelRendering'], 'String');
        }

        if (data.hasOwnProperty('displayRequestDuration')) {
          obj['displayRequestDuration'] = _ApiClient.default.convertToType(data['displayRequestDuration'], 'Boolean');
        }

        if (data.hasOwnProperty('docExpansion')) {
          obj['docExpansion'] = _ApiClient.default.convertToType(data['docExpansion'], 'String');
        }

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient.default.convertToType(data['filter'], Object);
        }

        if (data.hasOwnProperty('maxDisplayedTags')) {
          obj['maxDisplayedTags'] = _ApiClient.default.convertToType(data['maxDisplayedTags'], 'Number');
        }

        if (data.hasOwnProperty('operationsSorter')) {
          obj['operationsSorter'] = _ApiClient.default.convertToType(data['operationsSorter'], 'String');
        }

        if (data.hasOwnProperty('showExtensions')) {
          obj['showExtensions'] = _ApiClient.default.convertToType(data['showExtensions'], 'Boolean');
        }

        if (data.hasOwnProperty('showCommonExtensions')) {
          obj['showCommonExtensions'] = _ApiClient.default.convertToType(data['showCommonExtensions'], 'Boolean');
        }

        if (data.hasOwnProperty('tagsSorter')) {
          obj['tagsSorter'] = _ApiClient.default.convertToType(data['tagsSorter'], 'String');
        }

        if (data.hasOwnProperty('validatorUrl')) {
          obj['validatorUrl'] = _ApiClient.default.convertToType(data['validatorUrl'], 'String');
        }

        if (data.hasOwnProperty('supportedSubmitMethods')) {
          obj['supportedSubmitMethods'] = _ApiClient.default.convertToType(data['supportedSubmitMethods'], ['String']);
        }

        if (data.hasOwnProperty('swaggerBaseUiUrl')) {
          obj['swaggerBaseUiUrl'] = _ApiClient.default.convertToType(data['swaggerBaseUiUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UiConfiguration;
}();
/**
 * @member {Boolean} deepLinking
 */


UiConfiguration.prototype['deepLinking'] = undefined;
/**
 * @member {Boolean} displayOperationId
 */

UiConfiguration.prototype['displayOperationId'] = undefined;
/**
 * @member {Number} defaultModelsExpandDepth
 */

UiConfiguration.prototype['defaultModelsExpandDepth'] = undefined;
/**
 * @member {Number} defaultModelExpandDepth
 */

UiConfiguration.prototype['defaultModelExpandDepth'] = undefined;
/**
 * @member {module:gp.backend.model/UiConfiguration.DefaultModelRenderingEnum} defaultModelRendering
 */

UiConfiguration.prototype['defaultModelRendering'] = undefined;
/**
 * @member {Boolean} displayRequestDuration
 */

UiConfiguration.prototype['displayRequestDuration'] = undefined;
/**
 * @member {module:gp.backend.model/UiConfiguration.DocExpansionEnum} docExpansion
 */

UiConfiguration.prototype['docExpansion'] = undefined;
/**
 * @member {Object} filter
 */

UiConfiguration.prototype['filter'] = undefined;
/**
 * @member {Number} maxDisplayedTags
 */

UiConfiguration.prototype['maxDisplayedTags'] = undefined;
/**
 * @member {module:gp.backend.model/UiConfiguration.OperationsSorterEnum} operationsSorter
 */

UiConfiguration.prototype['operationsSorter'] = undefined;
/**
 * @member {Boolean} showExtensions
 */

UiConfiguration.prototype['showExtensions'] = undefined;
/**
 * @member {Boolean} showCommonExtensions
 */

UiConfiguration.prototype['showCommonExtensions'] = undefined;
/**
 * @member {module:gp.backend.model/UiConfiguration.TagsSorterEnum} tagsSorter
 */

UiConfiguration.prototype['tagsSorter'] = undefined;
/**
 * @member {String} validatorUrl
 */

UiConfiguration.prototype['validatorUrl'] = undefined;
/**
 * @member {Array.<String>} supportedSubmitMethods
 */

UiConfiguration.prototype['supportedSubmitMethods'] = undefined;
/**
 * @member {String} swaggerBaseUiUrl
 */

UiConfiguration.prototype['swaggerBaseUiUrl'] = undefined;
/**
 * Allowed values for the <code>defaultModelRendering</code> property.
 * @enum {String}
 * @readonly
 */

UiConfiguration['DefaultModelRenderingEnum'] = {
  /**
   * value: "example"
   * @const
   */
  "example": "example",

  /**
   * value: "model"
   * @const
   */
  "model": "model"
};
/**
 * Allowed values for the <code>docExpansion</code> property.
 * @enum {String}
 * @readonly
 */

UiConfiguration['DocExpansionEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "list"
   * @const
   */
  "list": "list",

  /**
   * value: "full"
   * @const
   */
  "full": "full"
};
/**
 * Allowed values for the <code>operationsSorter</code> property.
 * @enum {String}
 * @readonly
 */

UiConfiguration['OperationsSorterEnum'] = {
  /**
   * value: "alpha"
   * @const
   */
  "alpha": "alpha",

  /**
   * value: "method"
   * @const
   */
  "method": "method"
};
/**
 * Allowed values for the <code>tagsSorter</code> property.
 * @enum {String}
 * @readonly
 */

UiConfiguration['TagsSorterEnum'] = {
  /**
   * value: "alpha"
   * @const
   */
  "alpha": "alpha"
};
var _default = UiConfiguration;
exports.default = _default;