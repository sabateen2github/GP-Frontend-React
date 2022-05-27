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
 * The Employee model module.
 * @module gp.backend.model/Employee
 * @version v1
 */
var Employee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Employee</code>.
   * @alias module:gp.backend.model/Employee
   */
  function Employee() {
    _classCallCheck(this, Employee);

    Employee.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Employee, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Employee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/Employee} obj Optional instance to populate.
     * @return {module:gp.backend.model/Employee} The populated <code>Employee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Employee();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient.default.convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient.default.convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient.default.convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('dateOfBirth')) {
          obj['dateOfBirth'] = _ApiClient.default.convertToType(data['dateOfBirth'], 'Date');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient.default.convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient.default.convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('profilePic')) {
          obj['profilePic'] = _ApiClient.default.convertToType(data['profilePic'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient.default.convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient.default.convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('branchId')) {
          obj['branchId'] = _ApiClient.default.convertToType(data['branchId'], 'String');
        }

        if (data.hasOwnProperty('accountType')) {
          obj['accountType'] = _ApiClient.default.convertToType(data['accountType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Employee;
}();
/**
 * @member {String} name
 */


Employee.prototype['name'] = undefined;
/**
 * @member {String} id
 */

Employee.prototype['id'] = undefined;
/**
 * @member {String} fullName
 */

Employee.prototype['fullName'] = undefined;
/**
 * @member {Date} dateOfBirth
 */

Employee.prototype['dateOfBirth'] = undefined;
/**
 * @member {String} username
 */

Employee.prototype['username'] = undefined;
/**
 * @member {String} password
 */

Employee.prototype['password'] = undefined;
/**
 * @member {String} profilePic
 */

Employee.prototype['profilePic'] = undefined;
/**
 * @member {String} email
 */

Employee.prototype['email'] = undefined;
/**
 * @member {String} phone
 */

Employee.prototype['phone'] = undefined;
/**
 * @member {String} branchId
 */

Employee.prototype['branchId'] = undefined;
/**
 * @member {module:gp.backend.model/Employee.AccountTypeEnum} accountType
 */

Employee.prototype['accountType'] = undefined;
/**
 * Allowed values for the <code>accountType</code> property.
 * @enum {String}
 * @readonly
 */

Employee['AccountTypeEnum'] = {
  /**
   * value: "HELP_DESK"
   * @const
   */
  "HELP_DESK": "HELP_DESK",

  /**
   * value: "MANAGEMENT"
   * @const
   */
  "MANAGEMENT": "MANAGEMENT",

  /**
   * value: "ADMIN"
   * @const
   */
  "ADMIN": "ADMIN"
};
var _default = Employee;
exports.default = _default;