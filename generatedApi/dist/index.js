"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApiClient", {
  enumerable: true,
  get: function get() {
    return _ApiClient.default;
  }
});
Object.defineProperty(exports, "BookedTurnQueue", {
  enumerable: true,
  get: function get() {
    return _BookedTurnQueue.default;
  }
});
Object.defineProperty(exports, "Branch", {
  enumerable: true,
  get: function get() {
    return _Branch.default;
  }
});
Object.defineProperty(exports, "BranchesControllerApi", {
  enumerable: true,
  get: function get() {
    return _BranchesControllerApi.default;
  }
});
Object.defineProperty(exports, "Employee", {
  enumerable: true,
  get: function get() {
    return _Employee.default;
  }
});
Object.defineProperty(exports, "EmployeesControllerApi", {
  enumerable: true,
  get: function get() {
    return _EmployeesControllerApi.default;
  }
});
Object.defineProperty(exports, "Institute", {
  enumerable: true,
  get: function get() {
    return _Institute.default;
  }
});
Object.defineProperty(exports, "InstituteControllerApi", {
  enumerable: true,
  get: function get() {
    return _InstituteControllerApi.default;
  }
});
Object.defineProperty(exports, "Queue", {
  enumerable: true,
  get: function get() {
    return _Queue.default;
  }
});
Object.defineProperty(exports, "QueueControllerApi", {
  enumerable: true,
  get: function get() {
    return _QueueControllerApi.default;
  }
});
Object.defineProperty(exports, "QueueSpec", {
  enumerable: true,
  get: function get() {
    return _QueueSpec.default;
  }
});

var _ApiClient = _interopRequireDefault(require("./ApiClient"));

var _BookedTurnQueue = _interopRequireDefault(require("./gp.backend.model/BookedTurnQueue"));

var _Branch = _interopRequireDefault(require("./gp.backend.model/Branch"));

var _Employee = _interopRequireDefault(require("./gp.backend.model/Employee"));

var _Institute = _interopRequireDefault(require("./gp.backend.model/Institute"));

var _Queue = _interopRequireDefault(require("./gp.backend.model/Queue"));

var _QueueSpec = _interopRequireDefault(require("./gp.backend.model/QueueSpec"));

var _BranchesControllerApi = _interopRequireDefault(require("./gp.backend.api/BranchesControllerApi"));

var _EmployeesControllerApi = _interopRequireDefault(require("./gp.backend.api/EmployeesControllerApi"));

var _InstituteControllerApi = _interopRequireDefault(require("./gp.backend.api/InstituteControllerApi"));

var _QueueControllerApi = _interopRequireDefault(require("./gp.backend.api/QueueControllerApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }