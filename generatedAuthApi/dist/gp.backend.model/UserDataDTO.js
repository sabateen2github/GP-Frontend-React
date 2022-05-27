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
 * The UserDataDTO model module.
 * @module gp.backend.model/UserDataDTO
 * @version v1
 */
var UserDataDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserDataDTO</code>.
   * @alias module:gp.backend.model/UserDataDTO
   */
  function UserDataDTO() {
    _classCallCheck(this, UserDataDTO);

    UserDataDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserDataDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserDataDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/UserDataDTO} obj Optional instance to populate.
     * @return {module:gp.backend.model/UserDataDTO} The populated <code>UserDataDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserDataDTO();

        if (data.hasOwnProperty('appUserRoles')) {
          obj['appUserRoles'] = _ApiClient.default.convertToType(data['appUserRoles'], ['String']);
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient.default.convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient.default.convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('instituteId')) {
          obj['instituteId'] = _ApiClient.default.convertToType(data['instituteId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserDataDTO;
}();
/**
 * @member {Array.<module:gp.backend.model/UserDataDTO.AppUserRolesEnum>} appUserRoles
 */


UserDataDTO.prototype['appUserRoles'] = undefined;
/**
 * @member {String} username
 */

UserDataDTO.prototype['username'] = undefined;
/**
 * @member {String} password
 */

UserDataDTO.prototype['password'] = undefined;
/**
 * @member {String} instituteId
 */

UserDataDTO.prototype['instituteId'] = undefined;
/**
 * Allowed values for the <code>appUserRoles</code> property.
 * @enum {String}
 * @readonly
 */

UserDataDTO['AppUserRolesEnum'] = {
  /**
   * value: "ROLE_ADMIN"
   * @const
   */
  "ADMIN": "ROLE_ADMIN",

  /**
   * value: "ROLE_MANAGEMENT"
   * @const
   */
  "MANAGEMENT": "ROLE_MANAGEMENT",

  /**
   * value: "ROLE_HELP_DESK"
   * @const
   */
  "HELP_DESK": "ROLE_HELP_DESK"
};
var _default = UserDataDTO;
exports.default = _default;