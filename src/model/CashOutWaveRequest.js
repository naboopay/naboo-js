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
 * The CashOutWaveRequest model module.
 * @module model/CashOutWaveRequest
 * @version 0.1.0
 */
class CashOutWaveRequest {
    /**
     * Constructs a new <code>CashOutWaveRequest</code>.
     * @alias module:model/CashOutWaveRequest
     * @param fullName {String} 
     * @param amount {Number} 
     * @param phoneNumber {String} 
     */
    constructor(fullName, amount, phoneNumber) { 
        
        CashOutWaveRequest.initialize(this, fullName, amount, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fullName, amount, phoneNumber) { 
        obj['full_name'] = fullName;
        obj['amount'] = amount;
        obj['phone_number'] = phoneNumber;
    }

    /**
     * Constructs a <code>CashOutWaveRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashOutWaveRequest} obj Optional instance to populate.
     * @return {module:model/CashOutWaveRequest} The populated <code>CashOutWaveRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashOutWaveRequest();

            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CashOutWaveRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CashOutWaveRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CashOutWaveRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['full_name'] && !(typeof data['full_name'] === 'string' || data['full_name'] instanceof String)) {
            throw new Error("Expected the field `full_name` to be a primitive type in the JSON string but got " + data['full_name']);
        }
        // ensure the json data is a string
        if (data['phone_number'] && !(typeof data['phone_number'] === 'string' || data['phone_number'] instanceof String)) {
            throw new Error("Expected the field `phone_number` to be a primitive type in the JSON string but got " + data['phone_number']);
        }

        return true;
    }


}

CashOutWaveRequest.RequiredProperties = ["full_name", "amount", "phone_number"];

/**
 * @member {String} full_name
 */
CashOutWaveRequest.prototype['full_name'] = undefined;

/**
 * @member {Number} amount
 */
CashOutWaveRequest.prototype['amount'] = undefined;

/**
 * @member {String} phone_number
 */
CashOutWaveRequest.prototype['phone_number'] = undefined;






export default CashOutWaveRequest;

