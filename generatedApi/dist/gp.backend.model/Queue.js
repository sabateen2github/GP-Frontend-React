"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _QueueSpec = _interopRequireDefault(require("./QueueSpec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Queue model module.
 * @module gp.backend.model/Queue
 * @version v1
 */
var Queue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Queue</code>.
   * @alias module:gp.backend.model/Queue
   */
  function Queue() {
    _classCallCheck(this, Queue);

    Queue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Queue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Queue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/Queue} obj Optional instance to populate.
     * @return {module:gp.backend.model/Queue} The populated <code>Queue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Queue();

        if (data.hasOwnProperty('queueSpec')) {
          obj['queueSpec'] = _QueueSpec.default.constructFromObject(data['queueSpec']);
        }

        if (data.hasOwnProperty('queueSize')) {
          obj['queueSize'] = _ApiClient.default.convertToType(data['queueSize'], 'Number');
        }

        if (data.hasOwnProperty('physicalSize')) {
          obj['physicalSize'] = _ApiClient.default.convertToType(data['physicalSize'], 'Number');
        }

        if (data.hasOwnProperty('remoteSize')) {
          obj['remoteSize'] = _ApiClient.default.convertToType(data['remoteSize'], 'Number');
        }

        if (data.hasOwnProperty('averageTime')) {
          obj['averageTime'] = _ApiClient.default.convertToType(data['averageTime'], 'Number');
        }

        if (data.hasOwnProperty('currentTurnId')) {
          obj['currentTurnId'] = _ApiClient.default.convertToType(data['currentTurnId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Queue;
}();
/**
 * @member {module:gp.backend.model/QueueSpec} queueSpec
 */


Queue.prototype['queueSpec'] = undefined;
/**
 * @member {Number} queueSize
 */

Queue.prototype['queueSize'] = undefined;
/**
 * @member {Number} physicalSize
 */

Queue.prototype['physicalSize'] = undefined;
/**
 * @member {Number} remoteSize
 */

Queue.prototype['remoteSize'] = undefined;
/**
 * @member {Number} averageTime
 */

Queue.prototype['averageTime'] = undefined;
/**
 * @member {String} currentTurnId
 */

Queue.prototype['currentTurnId'] = undefined;
var _default = Queue;
exports.default = _default;