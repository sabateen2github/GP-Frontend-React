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
import Institute from './Institute';

/**
 * The InlineObject model module.
 * @module gp.backend.model/InlineObject
 * @version v1
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:gp.backend.model/InlineObject
     * @param institute {module:gp.backend.model/Institute} 
     * @param profilePic {File} 
     */
    constructor(institute, profilePic) { 
        
        InlineObject.initialize(this, institute, profilePic);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, institute, profilePic) { 
        obj['institute'] = institute;
        obj['profilePic'] = profilePic;
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/InlineObject} obj Optional instance to populate.
     * @return {module:gp.backend.model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('institute')) {
                obj['institute'] = Institute.constructFromObject(data['institute']);
            }
            if (data.hasOwnProperty('profilePic')) {
                obj['profilePic'] = ApiClient.convertToType(data['profilePic'], File);
            }
        }
        return obj;
    }


}

/**
 * @member {module:gp.backend.model/Institute} institute
 */
InlineObject.prototype['institute'] = undefined;

/**
 * @member {File} profilePic
 */
InlineObject.prototype['profilePic'] = undefined;






export default InlineObject;

