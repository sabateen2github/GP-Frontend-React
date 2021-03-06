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
    factory(root.expect, root.AuthBackendClient);
  }
}(this, function(expect, AuthBackendClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AuthBackendClient.UserResponseDTO();
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

  describe('UserResponseDTO', function() {
    it('should create an instance of UserResponseDTO', function() {
      // uncomment below and update the code to test UserResponseDTO
      //var instance = new AuthBackendClient.UserResponseDTO();
      //expect(instance).to.be.a(AuthBackendClient.UserResponseDTO);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new AuthBackendClient.UserResponseDTO();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new AuthBackendClient.UserResponseDTO();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new AuthBackendClient.UserResponseDTO();
      //expect(instance).to.be();
    });

    it('should have the property appUserRoles (base name: "appUserRoles")', function() {
      // uncomment below and update the code to test the property appUserRoles
      //var instance = new AuthBackendClient.UserResponseDTO();
      //expect(instance).to.be();
    });

  });

}));
