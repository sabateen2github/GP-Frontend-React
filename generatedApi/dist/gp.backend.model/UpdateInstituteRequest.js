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
 * The UpdateInstituteRequest model module.
 * @module gp.backend.model/UpdateInstituteRequest
 * @version v1
 */
var UpdateInstituteRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateInstituteRequest</code>.
   * @alias module:gp.backend.model/UpdateInstituteRequest
   * @param institute {module:gp.backend.model/Institute} 
   * @param profilePic {File} 
   */
  function UpdateInstituteRequest(institute, profilePic) {
    _classCallCheck(this, UpdateInstituteRequest);

    UpdateInstituteRequest.initialize(this, institute, profilePic);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateInstituteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, institute, profilePic) {
      obj['institute'] = institute;
      obj['profilePic'] = profilePic;
    }
    /**
     * Constructs a <code>UpdateInstituteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/UpdateInstituteRequest} obj Optional instance to populate.
     * @return {module:gp.backend.model/UpdateInstituteRequest} The populated <code>UpdateInstituteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateInstituteRequest();

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

  return UpdateInstituteRequest;
}();
/**
 * @member {module:gp.backend.model/Institute} institute
 */


UpdateInstituteRequest.prototype['institute'] = undefined;
/**
 * @member {File} profilePic
 */

UpdateInstituteRequest.prototype['profilePic'] = undefined;
var _default = UpdateInstituteRequest;
exports.default = _default;