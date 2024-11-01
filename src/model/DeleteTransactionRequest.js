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
 * The DeleteTransactionRequest model module.
 * @module model/DeleteTransactionRequest
 * @version 0.1.0
 */
class DeleteTransactionRequest {
    /**
     * Constructs a new <code>DeleteTransactionRequest</code>.
     * @alias module:model/DeleteTransactionRequest
     * @param orderId {String} 
     */
    constructor(orderId) { 
        
        DeleteTransactionRequest.initialize(this, orderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, orderId) { 
        obj['order_id'] = orderId;
    }

    /**
     * Constructs a <code>DeleteTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTransactionRequest} obj Optional instance to populate.
     * @return {module:model/DeleteTransactionRequest} The populated <code>DeleteTransactionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteTransactionRequest();

            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteTransactionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteTransactionRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteTransactionRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['order_id'] && !(typeof data['order_id'] === 'string' || data['order_id'] instanceof String)) {
            throw new Error("Expected the field `order_id` to be a primitive type in the JSON string but got " + data['order_id']);
        }

        return true;
    }


}

DeleteTransactionRequest.RequiredProperties = ["order_id"];

/**
 * @member {String} order_id
 */
DeleteTransactionRequest.prototype['order_id'] = undefined;






export default DeleteTransactionRequest;

