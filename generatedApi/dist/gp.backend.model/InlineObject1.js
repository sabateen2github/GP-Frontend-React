"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Institute = _interopRequireDefault(require("./Institute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineObject1 model module.
 * @module gp.backend.model/InlineObject1
 * @version v1
 */
var InlineObject1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject1</code>.
   * @alias module:gp.backend.model/InlineObject1
   * @param institute {module:gp.backend.model/Institute} 
   * @param profilePic {File} 
   */
  function InlineObject1(institute, profilePic) {
    _classCallCheck(this, InlineObject1);

    InlineObject1.initialize(this, institute, profilePic);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject1, null, [{
    key: "initialize",
    value: function initialize(obj, institute, profilePic) {
      obj['institute'] = institute;
      obj['profilePic'] = profilePic;
    }
    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/InlineObject1} obj Optional instance to populate.
     * @return {module:gp.backend.model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject1();

        if (data.hasOwnProperty('institute')) {
          obj['institute'] = _Institute.default.constructFromObject(data['institute']);
        }

        if (data.hasOwnProperty('profilePic')) {
          obj['profilePic'] = _ApiClient.default.convertToType(data['profilePic'], File);
        }
      }

      return obj;
    }
  }]);

  return InlineObject1;
}();
/**
 * @member {module:gp.backend.model/Institute} institute
 */


InlineObject1.prototype['institute'] = undefined;
/**
 * @member {File} profilePic
 */

InlineObject1.prototype['profilePic'] = undefined;
var _default = InlineObject1;
exports.default = _default;