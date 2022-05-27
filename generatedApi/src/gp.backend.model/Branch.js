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

import ApiClient from '../ApiClient';
import LatLng from './LatLng';

/**
 * The Branch model module.
 * @module gp.backend.model/Branch
 * @version v1
 */
class Branch {
    /**
     * Constructs a new <code>Branch</code>.
     * @alias module:gp.backend.model/Branch
     */
    constructor() { 
        
        Branch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Branch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/Branch} obj Optional instance to populate.
     * @return {module:gp.backend.model/Branch} The populated <code>Branch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Branch();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('instituteId')) {
                obj['instituteId'] = ApiClient.convertToType(data['instituteId'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = LatLng.constructFromObject(data['location']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Branch.prototype['name'] = undefined;

/**
 * @member {String} id
 */
Branch.prototype['id'] = undefined;

/**
 * @member {String} phone
 */
Branch.prototype['phone'] = undefined;

/**
 * @member {String} instituteId
 */
Branch.prototype['instituteId'] = undefined;

/**
 * @member {module:gp.backend.model/LatLng} location
 */
Branch.prototype['location'] = undefined;






export default Branch;

