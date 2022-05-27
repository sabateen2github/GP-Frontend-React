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
 * The SecurityConfiguration model module.
 * @module gp.backend.model/SecurityConfiguration
 * @version v0
 */
var SecurityConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecurityConfiguration</code>.
   * @alias module:gp.backend.model/SecurityConfiguration
   */
  function SecurityConfiguration() {
    _classCallCheck(this, SecurityConfiguration);

    SecurityConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecurityConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecurityConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/SecurityConfiguration} obj Optional instance to populate.
     * @return {module:gp.backend.model/SecurityConfiguration} The populated <code>SecurityConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecurityConfiguration();

        if (data.hasOwnProperty('apiKey')) {
          obj['apiKey'] = _ApiClient.default.convertToType(data['apiKey'], 'String');
        }

        if (data.hasOwnProperty('apiKeyVehicle')) {
          obj['apiKeyVehicle'] = _ApiClient.default.convertToType(data['apiKeyVehicle'], 'String');
        }

        if (data.hasOwnProperty('apiKeyName')) {
          obj['apiKeyName'] = _ApiClient.default.convertToType(data['apiKeyName'], 'String');
        }

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient.default.convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('clientSecret')) {
          obj['clientSecret'] = _ApiClient.default.convertToType(data['clientSecret'], 'String');
        }

        if (data.hasOwnProperty('realm')) {
          obj['realm'] = _ApiClient.default.convertToType(data['realm'], 'String');
        }

        if (data.hasOwnProperty('appName')) {
          obj['appName'] = _ApiClient.default.convertToType(data['appName'], 'String');
        }

        if (data.hasOwnProperty('scopeSeparator')) {
          obj['scopeSeparator'] = _ApiClient.default.convertToType(data['scopeSeparator'], 'String');
        }

        if (data.hasOwnProperty('additionalQueryStringParams')) {
          obj['additionalQueryStringParams'] = _ApiClient.default.convertToType(data['additionalQueryStringParams'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('useBasicAuthenticationWithAccessCodeGrant')) {
          obj['useBasicAuthenticationWithAccessCodeGrant'] = _ApiClient.default.convertToType(data['useBasicAuthenticationWithAccessCodeGrant'], 'Boolean');
        }

        if (data.hasOwnProperty('enableCsrfSupport')) {
          obj['enableCsrfSupport'] = _ApiClient.default.convertToType(data['enableCsrfSupport'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SecurityConfiguration;
}();
/**
 * @member {String} apiKey
 */


SecurityConfiguration.prototype['apiKey'] = undefined;
/**
 * @member {String} apiKeyVehicle
 */

SecurityConfiguration.prototype['apiKeyVehicle'] = undefined;
/**
 * @member {String} apiKeyName
 */

SecurityConfiguration.prototype['apiKeyName'] = undefined;
/**
 * @member {String} clientId
 */

SecurityConfiguration.prototype['clientId'] = undefined;
/**
 * @member {String} clientSecret
 */

SecurityConfiguration.prototype['clientSecret'] = undefined;
/**
 * @member {String} realm
 */

SecurityConfiguration.prototype['realm'] = undefined;
/**
 * @member {String} appName
 */

SecurityConfiguration.prototype['appName'] = undefined;
/**
 * @member {String} scopeSeparator
 */

SecurityConfiguration.prototype['scopeSeparator'] = undefined;
/**
 * @member {Object.<String, Object>} additionalQueryStringParams
 */

SecurityConfiguration.prototype['additionalQueryStringParams'] = undefined;
/**
 * @member {Boolean} useBasicAuthenticationWithAccessCodeGrant
 */

SecurityConfiguration.prototype['useBasicAuthenticationWithAccessCodeGrant'] = undefined;
/**
 * @member {Boolean} enableCsrfSupport
 */

SecurityConfiguration.prototype['enableCsrfSupport'] = undefined;
var _default = SecurityConfiguration;
exports.default = _default;