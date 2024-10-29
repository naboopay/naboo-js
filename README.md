# naboo_api_v1

NabooApiV1 - JavaScript client for naboo_api_v1
Here you have the first version of the naboo api to create checkout automatically

- API version: 0.1.0

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install naboo_api_v1 --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your naboo_api_v1 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/naboopay/naboo-js
then install it via:

```shell
    npm install naboopay/naboo-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NabooApiV1 = require('naboo_api_v1');

var defaultClient = NabooApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
var HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

var api = new NabooApiV1.AccountService()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAccountInformationAccountGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to */api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NabooApiV1.AccountService* | [**getAccountInformationAccountGet**](docs/AccountService.md#getAccountInformationAccountGet) | **GET** /account/ | Get Account Information
*NabooApiV1.CashoutService* | [**cashOutOrangeMoneyCashoutOrangeMoneyPost**](docs/CashoutService.md#cashOutOrangeMoneyCashoutOrangeMoneyPost) | **POST** /cashout/orange-money | Cash Out Orange Money
*NabooApiV1.CashoutService* | [**cashOutWaveCashoutWavePost**](docs/CashoutService.md#cashOutWaveCashoutWavePost) | **POST** /cashout/wave | Cash Out Wave
*NabooApiV1.TransactionService* | [**createTransactionTransactionCreateTransactionPost**](docs/TransactionService.md#createTransactionTransactionCreateTransactionPost) | **PUT** /transaction/create-transaction | Create Transaction
*NabooApiV1.TransactionService* | [**deleteTransactionTransactionDeleteTransactionDelete**](docs/TransactionService.md#deleteTransactionTransactionDeleteTransactionDelete) | **DELETE** /transaction/delete-transaction | Delete Transaction
*NabooApiV1.TransactionService* | [**getOneTransactionTransactionGetOneTransactionGet**](docs/TransactionService.md#getOneTransactionTransactionGetOneTransactionGet) | **GET** /transaction/get-one-transaction | Get One Transaction
*NabooApiV1.TransactionService* | [**getTransactionsTransactionGetTransactionsGet**](docs/TransactionService.md#getTransactionsTransactionGetTransactionsGet) | **GET** /transaction/get-transactions | Get Transactions


## Documentation for Models

 - [NabooApiV1.CashOutOrangeRequest](docs/CashOutOrangeRequest.md)
 - [NabooApiV1.CashOutResponse](docs/CashOutResponse.md)
 - [NabooApiV1.CashOutWaveRequest](docs/CashOutWaveRequest.md)
 - [NabooApiV1.DeleteTransactionRequest](docs/DeleteTransactionRequest.md)
 - [NabooApiV1.DeleteTransactionResponse](docs/DeleteTransactionResponse.md)
 - [NabooApiV1.GetAccountResponse](docs/GetAccountResponse.md)
 - [NabooApiV1.GetAllTransaction](docs/GetAllTransaction.md)
 - [NabooApiV1.GetOneTransaction](docs/GetOneTransaction.md)
 - [NabooApiV1.HTTPValidationError](docs/HTTPValidationError.md)
 - [NabooApiV1.ProductModel](docs/ProductModel.md)
 - [NabooApiV1.TransactionRequest](docs/TransactionRequest.md)
 - [NabooApiV1.TransactionResponse](docs/TransactionResponse.md)
 - [NabooApiV1.TransactionStatusEnum](docs/TransactionStatusEnum.md)
 - [NabooApiV1.ValidationError](docs/ValidationError.md)
 - [NabooApiV1.ValidationErrorLocInner](docs/ValidationErrorLocInner.md)
 - [NabooApiV1.Wallet](docs/Wallet.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### HTTPBearer

- **Type**: Bearer authentication

