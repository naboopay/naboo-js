# NabooApiV1.CashoutService

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cashOutOrangeMoneyCashoutOrangeMoneyPost**](CashoutService.md#cashOutOrangeMoneyCashoutOrangeMoneyPost) | **POST** /cashout/orange-money | Cash Out Orange Money
[**cashOutWaveCashoutWavePost**](CashoutService.md#cashOutWaveCashoutWavePost) | **POST** /cashout/wave | Cash Out Wave



## cashOutOrangeMoneyCashoutOrangeMoneyPost

> CashOutResponse cashOutOrangeMoneyCashoutOrangeMoneyPost(cashOutOrangeRequest)

Cash Out Orange Money

This endpoint enables a user to withdraw funds from their NabooPay account to their Orange Money account. Authentication is required, and users with the &#39;dev&#39; role are not permitted to perform this operation. The amount to be withdrawn must be positive and within the user&#39;s available balance. The user&#39;s account must be active and registered in the system. After validation, the user&#39;s account balance is adjusted accordingly, and the transaction is logged for record-keeping.

### Example

```javascript
import NabooApiV1 from 'naboo_api_v1';
let defaultClient = NabooApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NabooApiV1.CashoutService();
let cashOutOrangeRequest = new NabooApiV1.CashOutOrangeRequest(); // CashOutOrangeRequest | 
apiInstance.cashOutOrangeMoneyCashoutOrangeMoneyPost(cashOutOrangeRequest, (error, data, response) => {
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
 **cashOutOrangeRequest** | [**CashOutOrangeRequest**](CashOutOrangeRequest.md)|  | 

### Return type

[**CashOutResponse**](CashOutResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cashOutWaveCashoutWavePost

> CashOutResponse cashOutWaveCashoutWavePost(cashOutWaveRequest)

Cash Out Wave

This endpoint allows a user to withdraw funds from their NabooPay account to their Wave account. The user must be authenticated and not possess the &#39;dev&#39; role. The withdrawal amount must be greater than 10 and not exceed the user&#39;s account balance. The user&#39;s account must exist and be active. Upon successful validation, the system updates the user&#39;s account balance and records the transaction for tracking purposes.

### Example

```javascript
import NabooApiV1 from 'naboo_api_v1';
let defaultClient = NabooApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NabooApiV1.CashoutService();
let cashOutWaveRequest = new NabooApiV1.CashOutWaveRequest(); // CashOutWaveRequest | 
apiInstance.cashOutWaveCashoutWavePost(cashOutWaveRequest, (error, data, response) => {
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
 **cashOutWaveRequest** | [**CashOutWaveRequest**](CashOutWaveRequest.md)|  | 

### Return type

[**CashOutResponse**](CashOutResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

