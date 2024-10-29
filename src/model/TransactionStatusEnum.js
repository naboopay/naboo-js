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
* Enum class TransactionStatusEnum.
* @enum {}
* @readonly
*/
export default class TransactionStatusEnum {
    
        /**
         * value: "pending"
         * @const
         */
        "pending" = "pending";

    
        /**
         * value: "paid"
         * @const
         */
        "paid" = "paid";

    
        /**
         * value: "done"
         * @const
         */
        "done" = "done";

    
        /**
         * value: "part_paid"
         * @const
         */
        "part_paid" = "part_paid";

    

    /**
    * Returns a <code>TransactionStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TransactionStatusEnum} The enum <code>TransactionStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

