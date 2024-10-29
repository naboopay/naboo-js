# NabooApiV1.TransactionService

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTransactionTransactionCreateTransactionPost**](TransactionService.md#createTransactionTransactionCreateTransactionPost) | **PUT** /transaction/create-transaction | Create Transaction
[**deleteTransactionTransactionDeleteTransactionDelete**](TransactionService.md#deleteTransactionTransactionDeleteTransactionDelete) | **DELETE** /transaction/delete-transaction | Delete Transaction
[**getOneTransactionTransactionGetOneTransactionGet**](TransactionService.md#getOneTransactionTransactionGetOneTransactionGet) | **GET** /transaction/get-one-transaction | Get One Transaction
[**getTransactionsTransactionGetTransactionsGet**](TransactionService.md#getTransactionsTransactionGetTransactionsGet) | **GET** /transaction/get-transactions | Get Transactions



## createTransactionTransactionCreateTransactionPost

> TransactionResponse createTransactionTransactionCreateTransactionPost(transactionRequest)

Create Transaction

This endpoint allows authenticated users to create a transaction by submitting a request with the necessary details. The endpoint ensures that the user&#39;s access level permits transaction creation and enforces a rate limit of 30 requests. It checks that the number of products is within the allowed range (1-20) and calculates the total transaction amount, applying a 20% charge for escrow transactions. It also verifies that the total amount does not exceed a specific threshold (2,000,000). The user&#39;s IP address and browser information are logged, and the transaction details are saved with relevant metadata, including a unique order ID and the associated account state. If any conditions are not met, appropriate error messages are returned.

### Example

```javascript
import NabooApiV1 from 'naboo_api_v1';
let defaultClient = NabooApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NabooApiV1.TransactionService();
let transactionRequest = new NabooApiV1.TransactionRequest(); // TransactionRequest | 
apiInstance.createTransactionTransactionCreateTransactionPost(transactionRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequest** | [**TransactionRequest**](TransactionRequest.md)|  | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTransactionTransactionDeleteTransactionDelete

> DeleteTransactionResponse deleteTransactionTransactionDeleteTransactionDelete(deleteTransactionRequest)

Delete Transaction

This endpoint allows authenticated users to delete a transaction by submitting a request with the necessary details. The endpoint checks the user&#39;s access level to ensure they have permission to delete transactions and enforces a rate limit of 30 requests. It verifies that the transaction belongs to the user and has not already been deleted or withdrawn. If the transaction is paid and has a payment reference, it processes refunds and updates the user&#39;s account balance accordingly.

### Example

```javascript
import NabooApiV1 from 'naboo_api_v1';
let defaultClient = NabooApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NabooApiV1.TransactionService();
let deleteTransactionRequest = new NabooApiV1.DeleteTransactionRequest(); // DeleteTransactionRequest | 
apiInstance.deleteTransactionTransactionDeleteTransactionDelete(deleteTransactionRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteTransactionRequest** | [**DeleteTransactionRequest**](DeleteTransactionRequest.md)|  | 

### Return type

[**DeleteTransactionResponse**](DeleteTransactionResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOneTransactionTransactionGetOneTransactionGet

> GetOneTransaction getOneTransactionTransactionGetOneTransactionGet(orderId)

Get One Transaction

This endpoint allows authenticated users to retrieve the details of a specific transaction using the order ID. The endpoint ensures the user has read access and enforces a rate limit of 30 requests. It checks if the transaction exists in the database and if the user has the appropriate access rights,then provides a checkout URL for the transaction and others informations

### Example

```javascript
import NabooApiV1 from 'naboo_api_v1';
let defaultClient = NabooApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NabooApiV1.TransactionService();
let orderId = "orderId_example"; // String | 
apiInstance.getOneTransactionTransactionGetOneTransactionGet(orderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**|  | 

### Return type

[**GetOneTransaction**](GetOneTransaction.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransactionsTransactionGetTransactionsGet

> GetAllTransaction getTransactionsTransactionGetTransactionsGet()

Get Transactions

This endpoint allows authenticated users to retrieve a list of their visible transactions, up to a maximum of 50. The endpoint enforces a rate limit of 30 requests and ensures the user has read access.

### Example

```javascript
import NabooApiV1 from 'naboo_api_v1';
let defaultClient = NabooApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NabooApiV1.TransactionService();
apiInstance.getTransactionsTransactionGetTransactionsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAllTransaction**](GetAllTransaction.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

