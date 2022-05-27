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
 * The SwaggerResource model module.
 * @module gp.backend.model/SwaggerResource
 * @version v0
 */
var SwaggerResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwaggerResource</code>.
   * @alias module:gp.backend.model/SwaggerResource
   */
  function SwaggerResource() {
    _classCallCheck(this, SwaggerResource);

    SwaggerResource.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwaggerResource, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwaggerResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/SwaggerResource} obj Optional instance to populate.
     * @return {module:gp.backend.model/SwaggerResource} The populated <code>SwaggerResource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwaggerResource();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient.default.convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('swaggerVersion')) {
          obj['swaggerVersion'] = _ApiClient.default.convertToType(data['swaggerVersion'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient.default.convertToType(data['location'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SwaggerResource;
}();
/**
 * @member {String} name
 */


SwaggerResource.prototype['name'] = undefined;
/**
 * @member {String} url
 */

SwaggerResource.prototype['url'] = undefined;
/**
 * @member {String} swaggerVersion
 */

SwaggerResource.prototype['swaggerVersion'] = undefined;
/**
 * @member {String} location
 */

SwaggerResource.prototype['location'] = undefined;
var _default = SwaggerResource;
exports.default = _default;