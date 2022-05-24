"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Queue = _interopRequireDefault(require("./Queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The BookedTurnQueue model module.
 * @module gp.backend.model/BookedTurnQueue
 * @version v0
 */
var BookedTurnQueue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BookedTurnQueue</code>.
   * @alias module:gp.backend.model/BookedTurnQueue
   */
  function BookedTurnQueue() {
    _classCallCheck(this, BookedTurnQueue);

    BookedTurnQueue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BookedTurnQueue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BookedTurnQueue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/BookedTurnQueue} obj Optional instance to populate.
     * @return {module:gp.backend.model/BookedTurnQueue} The populated <code>BookedTurnQueue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BookedTurnQueue();

        if (data.hasOwnProperty('turnId')) {
          obj['turnId'] = _ApiClient.default.convertToType(data['turnId'], 'Number');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient.default.convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('logoUrl')) {
          obj['logoUrl'] = _ApiClient.default.convertToType(data['logoUrl'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient.default.convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('queue')) {
          obj['queue'] = _Queue.default.constructFromObject(data['queue']);
        }
      }

      return obj;
    }
  }]);

  return BookedTurnQueue;
}();
/**
 * @member {Number} turnId
 */


BookedTurnQueue.prototype['turnId'] = undefined;
/**
 * @member {Number} position
 */

BookedTurnQueue.prototype['position'] = undefined;
/**
 * @member {String} logoUrl
 */

BookedTurnQueue.prototype['logoUrl'] = undefined;
/**
 * @member {module:gp.backend.model/BookedTurnQueue.StateEnum} state
 */

BookedTurnQueue.prototype['state'] = undefined;
/**
 * @member {module:gp.backend.model/Queue} queue
 */

BookedTurnQueue.prototype['queue'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

BookedTurnQueue['StateEnum'] = {
  /**
   * value: "ACTIVE"
   * @const
   */
  "ACTIVE": "ACTIVE",

  /**
   * value: "CANCELLED"
   * @const
   */
  "CANCELLED": "CANCELLED",

  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED"
};
var _default = BookedTurnQueue;
exports.default = _default;