# NabooApiV1.AccountService

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountInformationAccountGet**](AccountService.md#getAccountInformationAccountGet) | **GET** /account/ | Get Account Information



## getAccountInformationAccountGet

> GetAccountResponse getAccountInformationAccountGet()

Get Account Information

### Example

```javascript
import NabooApiV1 from 'naboo_api_v1';
let defaultClient = NabooApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NabooApiV1.AccountService();
apiInstance.getAccountInformationAccountGet((error, data, response) => {
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

[**GetAccountResponse**](GetAccountResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

