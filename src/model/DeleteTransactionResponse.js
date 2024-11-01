/**
 * NabooApi V1
 * Here you have the first version of the naboo api to create checkout automatically
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeleteTransactionResponse model module.
 * @module model/DeleteTransactionResponse
 * @version 0.1.0
 */
class DeleteTransactionResponse {
    /**
     * Constructs a new <code>DeleteTransactionResponse</code>.
     * @alias module:model/DeleteTransactionResponse
     * @param orderId {String} 
     * @param message {String} 
     */
    constructor(orderId, message) { 
        
        DeleteTransactionResponse.initialize(this, orderId, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, orderId, message) { 
        obj['order_id'] = orderId;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>DeleteTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTransactionResponse} obj Optional instance to populate.
     * @return {module:model/DeleteTransactionResponse} The populated <code>DeleteTransactionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteTransactionResponse();

            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteTransactionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteTransactionResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteTransactionResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['order_id'] && !(typeof data['order_id'] === 'string' || data['order_id'] instanceof String)) {
            throw new Error("Expected the field `order_id` to be a primitive type in the JSON string but got " + data['order_id']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

DeleteTransactionResponse.RequiredProperties = ["order_id", "message"];

/**
 * @member {String} order_id
 */
DeleteTransactionResponse.prototype['order_id'] = undefined;

/**
 * @member {String} message
 */
DeleteTransactionResponse.prototype['message'] = undefined;






export default DeleteTransactionResponse;

