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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NabooApiV1);
  }
}(this, function(expect, NabooApiV1) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NabooApiV1.TransactionService();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TransactionService', function() {
    describe('createTransactionTransactionCreateTransactionPost', function() {
      it('should call createTransactionTransactionCreateTransactionPost successfully', function(done) {
        //uncomment below and update the code to test createTransactionTransactionCreateTransactionPost
        //instance.createTransactionTransactionCreateTransactionPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTransactionTransactionDeleteTransactionDelete', function() {
      it('should call deleteTransactionTransactionDeleteTransactionDelete successfully', function(done) {
        //uncomment below and update the code to test deleteTransactionTransactionDeleteTransactionDelete
        //instance.deleteTransactionTransactionDeleteTransactionDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOneTransactionTransactionGetOneTransactionGet', function() {
      it('should call getOneTransactionTransactionGetOneTransactionGet successfully', function(done) {
        //uncomment below and update the code to test getOneTransactionTransactionGetOneTransactionGet
        //instance.getOneTransactionTransactionGetOneTransactionGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactionsTransactionGetTransactionsGet', function() {
      it('should call getTransactionsTransactionGetTransactionsGet successfully', function(done) {
        //uncomment below and update the code to test getTransactionsTransactionGetTransactionsGet
        //instance.getTransactionsTransactionGetTransactionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
