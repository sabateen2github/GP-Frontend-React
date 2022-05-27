/**
 * backend-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import BookedTurnQueue from './gp.backend.model/BookedTurnQueue';
import Branch from './gp.backend.model/Branch';
import Employee from './gp.backend.model/Employee';
import Institute from './gp.backend.model/Institute';
import LatLng from './gp.backend.model/LatLng';
import Queue from './gp.backend.model/Queue';
import QueueSpec from './gp.backend.model/QueueSpec';
import UpdateInstituteRequest from './gp.backend.model/UpdateInstituteRequest';
import BranchesControllerApi from './gp.backend.api/BranchesControllerApi';
import EmployeesControllerApi from './gp.backend.api/EmployeesControllerApi';
import FileServingControllerApi from './gp.backend.api/FileServingControllerApi';
import InstituteControllerApi from './gp.backend.api/InstituteControllerApi';
import QueueControllerApi from './gp.backend.api/QueueControllerApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var BackendClient = require('index'); // See note below*.
* var xxxSvc = new BackendClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new BackendClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new BackendClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new BackendClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BookedTurnQueue model constructor.
     * @property {module:gp.backend.model/BookedTurnQueue}
     */
    BookedTurnQueue,

    /**
     * The Branch model constructor.
     * @property {module:gp.backend.model/Branch}
     */
    Branch,

    /**
     * The Employee model constructor.
     * @property {module:gp.backend.model/Employee}
     */
    Employee,

    /**
     * The Institute model constructor.
     * @property {module:gp.backend.model/Institute}
     */
    Institute,

    /**
     * The LatLng model constructor.
     * @property {module:gp.backend.model/LatLng}
     */
    LatLng,

    /**
     * The Queue model constructor.
     * @property {module:gp.backend.model/Queue}
     */
    Queue,

    /**
     * The QueueSpec model constructor.
     * @property {module:gp.backend.model/QueueSpec}
     */
    QueueSpec,

    /**
     * The UpdateInstituteRequest model constructor.
     * @property {module:gp.backend.model/UpdateInstituteRequest}
     */
    UpdateInstituteRequest,

    /**
    * The BranchesControllerApi service constructor.
    * @property {module:gp.backend.api/BranchesControllerApi}
    */
    BranchesControllerApi,

    /**
    * The EmployeesControllerApi service constructor.
    * @property {module:gp.backend.api/EmployeesControllerApi}
    */
    EmployeesControllerApi,

    /**
    * The FileServingControllerApi service constructor.
    * @property {module:gp.backend.api/FileServingControllerApi}
    */
    FileServingControllerApi,

    /**
    * The InstituteControllerApi service constructor.
    * @property {module:gp.backend.api/InstituteControllerApi}
    */
    InstituteControllerApi,

    /**
    * The QueueControllerApi service constructor.
    * @property {module:gp.backend.api/QueueControllerApi}
    */
    QueueControllerApi
};
