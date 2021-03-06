/**
 * My API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BackendClient);
  }
}(this, function(expect, BackendClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BackendClient.Queue();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Queue', function() {
    it('should create an instance of Queue', function() {
      // uncomment below and update the code to test Queue
      //var instance = new BackendClient.Queue();
      //expect(instance).to.be.a(BackendClient.Queue);
    });

    it('should have the property queueSpec (base name: "queueSpec")', function() {
      // uncomment below and update the code to test the property queueSpec
      //var instance = new BackendClient.Queue();
      //expect(instance).to.be();
    });

    it('should have the property queueSize (base name: "queueSize")', function() {
      // uncomment below and update the code to test the property queueSize
      //var instance = new BackendClient.Queue();
      //expect(instance).to.be();
    });

    it('should have the property physicalSize (base name: "physicalSize")', function() {
      // uncomment below and update the code to test the property physicalSize
      //var instance = new BackendClient.Queue();
      //expect(instance).to.be();
    });

    it('should have the property remoteSize (base name: "remoteSize")', function() {
      // uncomment below and update the code to test the property remoteSize
      //var instance = new BackendClient.Queue();
      //expect(instance).to.be();
    });

    it('should have the property averageTime (base name: "averageTime")', function() {
      // uncomment below and update the code to test the property averageTime
      //var instance = new BackendClient.Queue();
      //expect(instance).to.be();
    });

    it('should have the property currentTurnId (base name: "currentTurnId")', function() {
      // uncomment below and update the code to test the property currentTurnId
      //var instance = new BackendClient.Queue();
      //expect(instance).to.be();
    });

  });

}));
