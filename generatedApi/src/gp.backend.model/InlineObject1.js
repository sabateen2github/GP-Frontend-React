/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
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
 * The InlineObject1 model module.
 * @module gp.backend.model/InlineObject1
 * @version v0
 */
class InlineObject1 {
    /**
     * Constructs a new <code>InlineObject1</code>.
     * @alias module:gp.backend.model/InlineObject1
     * @param institute {module:gp.backend.model/Institute} 
     * @param profilePic {File} 
     */
    constructor(institute, profilePic) { 
        
        InlineObject1.initialize(this, institute, profilePic);
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
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gp.backend.model/InlineObject1} obj Optional instance to populate.
     * @return {module:gp.backend.model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

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
InlineObject1.prototype['institute'] = undefined;

/**
 * @member {File} profilePic
 */
InlineObject1.prototype['profilePic'] = undefined;






export default InlineObject1;

