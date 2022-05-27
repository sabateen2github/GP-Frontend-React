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
 * The Institute model module.
 * @module gp.backend.model/Institute
 * @version v1
 */
var Institute = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Institute</code>.
   * @alias module:gp.backend.model/Institute
   */
  function Institute() {
    _classCallCheck(this, Institute);

    Institute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Institute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Institute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/Institute} obj Optional instance to populate.
     * @return {module:gp.backend.model/Institute} The populated <code>Institute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Institute();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('logoUrl')) {
          obj['logoUrl'] = _ApiClient.default.convertToType(data['logoUrl'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient.default.convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient.default.convertToType(data['phone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Institute;
}();
/**
 * @member {String} name
 */


Institute.prototype['name'] = undefined;
/**
 * @member {String} id
 */

Institute.prototype['id'] = undefined;
/**
 * @member {String} logoUrl
 */

Institute.prototype['logoUrl'] = undefined;
/**
 * @member {String} email
 */

Institute.prototype['email'] = undefined;
/**
 * @member {String} phone
 */

Institute.prototype['phone'] = undefined;
var _default = Institute;
exports.default = _default;