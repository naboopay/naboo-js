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
 * The TransactionResponse model module.
 * @module model/TransactionResponse
 * @version 0.1.0
 */
class TransactionResponse {
    /**
     * Constructs a new <code>TransactionResponse</code>.
     * @alias module:model/TransactionResponse
     * @param orderId {String} 
     * @param methodOfPayment {Array.<String>} 
     * @param currency {String} 
     * @param createdAt {String} 
     * @param checkoutUrl {String} 
     */
    constructor(orderId, methodOfPayment, currency, createdAt, checkoutUrl) { 
        
        TransactionResponse.initialize(this, orderId, methodOfPayment, currency, createdAt, checkoutUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, orderId, methodOfPayment, currency, createdAt, checkoutUrl) { 
        obj['order_id'] = orderId;
        obj['method_of_payment'] = methodOfPayment;
        obj['amount'] = 0;
        obj['amount_to_pay'] = 0;
        obj['currency'] = currency;
        obj['created_at'] = createdAt;
        obj['transaction_status'] = 'pending';
        obj['is_escrow'] = false;
        obj['is_merchant'] = false;
        obj['checkout_url'] = checkoutUrl;
    }

    /**
     * Constructs a <code>TransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionResponse} obj Optional instance to populate.
     * @return {module:model/TransactionResponse} The populated <code>TransactionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionResponse();

            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('method_of_payment')) {
                obj['method_of_payment'] = ApiClient.convertToType(data['method_of_payment'], ['String']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('amount_to_pay')) {
                obj['amount_to_pay'] = ApiClient.convertToType(data['amount_to_pay'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('transaction_status')) {
                obj['transaction_status'] = ApiClient.convertToType(data['transaction_status'], 'String');
            }
            if (data.hasOwnProperty('is_escrow')) {
                obj['is_escrow'] = ApiClient.convertToType(data['is_escrow'], 'Boolean');
            }
            if (data.hasOwnProperty('is_merchant')) {
                obj['is_merchant'] = ApiClient.convertToType(data['is_merchant'], 'Boolean');
            }
            if (data.hasOwnProperty('checkout_url')) {
                obj['checkout_url'] = ApiClient.convertToType(data['checkout_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['order_id'] && !(typeof data['order_id'] === 'string' || data['order_id'] instanceof String)) {
            throw new Error("Expected the field `order_id` to be a primitive type in the JSON string but got " + data['order_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['method_of_payment'])) {
            throw new Error("Expected the field `method_of_payment` to be an array in the JSON data but got " + data['method_of_payment']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['transaction_status'] && !(typeof data['transaction_status'] === 'string' || data['transaction_status'] instanceof String)) {
            throw new Error("Expected the field `transaction_status` to be a primitive type in the JSON string but got " + data['transaction_status']);
        }
        // ensure the json data is a string
        if (data['checkout_url'] && !(typeof data['checkout_url'] === 'string' || data['checkout_url'] instanceof String)) {
            throw new Error("Expected the field `checkout_url` to be a primitive type in the JSON string but got " + data['checkout_url']);
        }

        return true;
    }


}

TransactionResponse.RequiredProperties = ["order_id", "method_of_payment", "currency", "created_at", "checkout_url"];

/**
 * @member {String} order_id
 */
TransactionResponse.prototype['order_id'] = undefined;

/**
 * @member {Array.<String>} method_of_payment
 */
TransactionResponse.prototype['method_of_payment'] = undefined;

/**
 * @member {Number} amount
 * @default 0
 */
TransactionResponse.prototype['amount'] = 0;

/**
 * @member {Number} amount_to_pay
 * @default 0
 */
TransactionResponse.prototype['amount_to_pay'] = 0;

/**
 * @member {String} currency
 */
TransactionResponse.prototype['currency'] = undefined;

/**
 * @member {String} created_at
 */
TransactionResponse.prototype['created_at'] = undefined;

/**
 * @member {String} transaction_status
 * @default 'pending'
 */
TransactionResponse.prototype['transaction_status'] = 'pending';

/**
 * @member {Boolean} is_escrow
 * @default false
 */
TransactionResponse.prototype['is_escrow'] = false;

/**
 * @member {Boolean} is_merchant
 * @default false
 */
TransactionResponse.prototype['is_merchant'] = false;

/**
 * @member {String} checkout_url
 */
TransactionResponse.prototype['checkout_url'] = undefined;






export default TransactionResponse;

