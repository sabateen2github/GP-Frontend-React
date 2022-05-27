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
 * The LatLng model module.
 * @module gp.backend.model/LatLng
 * @version v1
 */
var LatLng = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LatLng</code>.
   * @alias module:gp.backend.model/LatLng
   */
  function LatLng() {
    _classCallCheck(this, LatLng);

    LatLng.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LatLng, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LatLng</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/LatLng} obj Optional instance to populate.
     * @return {module:gp.backend.model/LatLng} The populated <code>LatLng</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LatLng();

        if (data.hasOwnProperty('lng')) {
          obj['lng'] = _ApiClient.default.convertToType(data['lng'], 'Number');
        }

        if (data.hasOwnProperty('lat')) {
          obj['lat'] = _ApiClient.default.convertToType(data['lat'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LatLng;
}();
/**
 * @member {Number} lng
 */


LatLng.prototype['lng'] = undefined;
/**
 * @member {Number} lat
 */

LatLng.prototype['lat'] = undefined;
var _default = LatLng;
exports.default = _default;