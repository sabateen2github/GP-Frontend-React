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
import Queue from './Queue';

/**
 * The BookedTurnQueue model module.
 * @module model/BookedTurnQueue
 * @version v0
 */
class BookedTurnQueue {
    /**
     * Constructs a new <code>BookedTurnQueue</code>.
     * @alias module:model/BookedTurnQueue
     */
    constructor() { 
        
        BookedTurnQueue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BookedTurnQueue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BookedTurnQueue} obj Optional instance to populate.
     * @return {module:model/BookedTurnQueue} The populated <code>BookedTurnQueue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BookedTurnQueue();

            if (data.hasOwnProperty('turnId')) {
                obj['turnId'] = ApiClient.convertToType(data['turnId'], 'Number');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('logoUrl')) {
                obj['logoUrl'] = ApiClient.convertToType(data['logoUrl'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = Queue.constructFromObject(data['queue']);
            }
        }
        return obj;
    }


}

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
 * @member {module:model/BookedTurnQueue.StateEnum} state
 */
BookedTurnQueue.prototype['state'] = undefined;

/**
 * @member {module:model/Queue} queue
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



export default BookedTurnQueue;

