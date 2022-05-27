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
    instance = new BackendClient.QueueControllerApi();
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

  describe('QueueControllerApi', function() {
    describe('advanceQueue', function() {
      it('should call advanceQueue successfully', function(done) {
        //uncomment below and update the code to test advanceQueue
        //instance.advanceQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bookQueue', function() {
      it('should call bookQueue successfully', function(done) {
        //uncomment below and update the code to test bookQueue
        //instance.bookQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelTurn', function() {
      it('should call cancelTurn successfully', function(done) {
        //uncomment below and update the code to test cancelTurn
        //instance.cancelTurn(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createQueueSpec', function() {
      it('should call createQueueSpec successfully', function(done) {
        //uncomment below and update the code to test createQueueSpec
        //instance.createQueueSpec(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteQueue', function() {
      it('should call deleteQueue successfully', function(done) {
        //uncomment below and update the code to test deleteQueue
        //instance.deleteQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editQueueSpec', function() {
      it('should call editQueueSpec successfully', function(done) {
        //uncomment below and update the code to test editQueueSpec
        //instance.editQueueSpec(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActiveQueues', function() {
      it('should call getActiveQueues successfully', function(done) {
        //uncomment below and update the code to test getActiveQueues
        //instance.getActiveQueues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllQueueSpecs', function() {
      it('should call getAllQueueSpecs successfully', function(done) {
        //uncomment below and update the code to test getAllQueueSpecs
        //instance.getAllQueueSpecs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllQueues', function() {
      it('should call getAllQueues successfully', function(done) {
        //uncomment below and update the code to test getAllQueues
        //instance.getAllQueues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArchivedQueues', function() {
      it('should call getArchivedQueues successfully', function(done) {
        //uncomment below and update the code to test getArchivedQueues
        //instance.getArchivedQueues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQueue', function() {
      it('should call getQueue successfully', function(done) {
        //uncomment below and update the code to test getQueue
        //instance.getQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resetQueue', function() {
      it('should call resetQueue successfully', function(done) {
        //uncomment below and update the code to test resetQueue
        //instance.resetQueue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchUserLocationMode', function() {
      it('should call switchUserLocationMode successfully', function(done) {
        //uncomment below and update the code to test switchUserLocationMode
        //instance.switchUserLocationMode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
