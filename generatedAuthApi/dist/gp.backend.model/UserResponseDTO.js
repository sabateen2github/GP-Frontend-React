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
 * The UserResponseDTO model module.
 * @module gp.backend.model/UserResponseDTO
 * @version v1
 */
var UserResponseDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserResponseDTO</code>.
   * @alias module:gp.backend.model/UserResponseDTO
   */
  function UserResponseDTO() {
    _classCallCheck(this, UserResponseDTO);

    UserResponseDTO.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserResponseDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserResponseDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/UserResponseDTO} obj Optional instance to populate.
     * @return {module:gp.backend.model/UserResponseDTO} The populated <code>UserResponseDTO</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserResponseDTO();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient.default.convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient.default.convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('appUserRoles')) {
          obj['appUserRoles'] = _ApiClient.default.convertToType(data['appUserRoles'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return UserResponseDTO;
}();
/**
 * @member {Number} id
 */


UserResponseDTO.prototype['id'] = undefined;
/**
 * @member {String} username
 */

UserResponseDTO.prototype['username'] = undefined;
/**
 * @member {String} email
 */

UserResponseDTO.prototype['email'] = undefined;
/**
 * @member {Array.<module:gp.backend.model/UserResponseDTO.AppUserRolesEnum>} appUserRoles
 */

UserResponseDTO.prototype['appUserRoles'] = undefined;
/**
 * Allowed values for the <code>appUserRoles</code> property.
 * @enum {String}
 * @readonly
 */

UserResponseDTO['AppUserRolesEnum'] = {
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
var _default = UserResponseDTO;
exports.default = _default;