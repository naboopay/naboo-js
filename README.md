# Naboo API v1

**NabooApiV1** - JavaScript client for the Naboo API v1

This is the first version of the Naboo API, designed to create checkouts automatically.

- **API version**: 0.1.0

## Table of Contents

- [Installation](#installation)
  - [From Git Repository](#from-git-repository)
  - [Local Development](#local-development)
  - [For Browser Environments](#for-browser-environments)
  - [Webpack Configuration](#webpack-configuration)
- [Getting Started](#getting-started)
- [Documentation for API Endpoints](#documentation-for-api-endpoints)
- [Documentation for Models](#documentation-for-models)
- [Documentation for Authorization](#documentation-for-authorization)

## Installation

Since the package is not yet published on npm, you can install it directly from the Git repository.

### From Git Repository

Clone the repository:

```shell
git clone https://github.com/naboopay/naboo-js.git
```

Navigate to the cloned directory:

```shell
cd naboo-js
```

Install the dependencies:

```shell
npm install
```

Build the module:

```shell
npm run build
```

### Local Development

If you want to use the library locally in your project without publishing it to a remote npm registry, you can use `npm link`.

First, in the library directory (where `package.json` is located), run:

```shell
npm link
```

Then, in your project directory where you want to use `naboo_api_v1`, run:

```shell
npm link naboo_api_v1
```

This will create a symbolic link from your project's `node_modules` to the library's directory.

### For Browser Environments

The library can also be used in browser environments via [Browserify](http://browserify.org/). After installing Browserify (`npm install -g browserify`), bundle your main JavaScript file:

```shell
browserify main.js > bundle.js
```

Then include `bundle.js` in your HTML page.

### Webpack Configuration

When using Webpack, you may encounter the following error: "Module not found: Error: Cannot resolve module". To fix this, disable the AMD loader by adding the following to your Webpack configuration:

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

After installing the library, you can use the following code to get started:

```javascript
const NabooApiV1 = require('naboo_api_v1');

const defaultClient = NabooApiV1.ApiClient.instance;

// Configure Bearer access token for authorization: HTTPBearer
const HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = 'YOUR_ACCESS_TOKEN';

const apiInstance = new NabooApiV1.AccountService();

apiInstance.getAccountInformationAccountGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data:', data);
  }
});
```

## Documentation for API Endpoints

All URIs are relative to `/api/v1`

| Class                  | Method                                                                                                                     | HTTP Request                                | Description             |
|------------------------|----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|-------------------------|
| **AccountService**     | [**getAccountInformationAccountGet**](docs/AccountService.md#getAccountInformationAccountGet)                              | **GET** `/account/`                         | Get Account Information |
| **CashoutService**     | [**cashOutOrangeMoneyCashoutOrangeMoneyPost**](docs/CashoutService.md#cashOutOrangeMoneyCashoutOrangeMoneyPost)            | **POST** `/cashout/orange-money`            | Cash Out Orange Money   |
| **CashoutService**     | [**cashOutWaveCashoutWavePost**](docs/CashoutService.md#cashOutWaveCashoutWavePost)                                        | **POST** `/cashout/wave`                    | Cash Out Wave           |
| **TransactionService** | [**createTransactionTransactionCreateTransactionPost**](docs/TransactionService.md#createTransactionTransactionCreateTransactionPost)     | **PUT** `/transaction/create-transaction`   | Create Transaction      |
| **TransactionService** | [**deleteTransactionTransactionDeleteTransactionDelete**](docs/TransactionService.md#deleteTransactionTransactionDeleteTransactionDelete) | **DELETE** `/transaction/delete-transaction` | Delete Transaction      |
| **TransactionService** | [**getOneTransactionTransactionGetOneTransactionGet**](docs/TransactionService.md#getOneTransactionTransactionGetOneTransactionGet)       | **GET** `/transaction/get-one-transaction`  | Get One Transaction     |
| **TransactionService** | [**getTransactionsTransactionGetTransactionsGet**](docs/TransactionService.md#getTransactionsTransactionGetTransactionsGet)               | **GET** `/transaction/get-transactions`     | Get Transactions        |

## Documentation for Models

- [CashOutOrangeRequest](docs/CashOutOrangeRequest.md)
- [CashOutResponse](docs/CashOutResponse.md)
- [CashOutWaveRequest](docs/CashOutWaveRequest.md)
- [DeleteTransactionRequest](docs/DeleteTransactionRequest.md)
- [DeleteTransactionResponse](docs/DeleteTransactionResponse.md)
- [GetAccountResponse](docs/GetAccountResponse.md)
- [GetAllTransaction](docs/GetAllTransaction.md)
- [GetOneTransaction](docs/GetOneTransaction.md)
- [HTTPValidationError](docs/HTTPValidationError.md)
- [ProductModel](docs/ProductModel.md)
- [TransactionRequest](docs/TransactionRequest.md)
- [TransactionResponse](docs/TransactionResponse.md)
- [TransactionStatusEnum](docs/TransactionStatusEnum.md)
- [ValidationError](docs/ValidationError.md)
- [ValidationErrorLocInner](docs/ValidationErrorLocInner.md)
- [Wallet](docs/Wallet.md)

## Documentation for Authorization

Authentication schemes defined for the API:

### HTTPBearer

- **Type**: Bearer authentication

