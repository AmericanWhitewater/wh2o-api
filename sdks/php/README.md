# OpenAPIClient-php

The API for American Whitewater.

## Installation & Usage

### Requirements

PHP 7.4 and later.
Should also work with PHP 8.0.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\FeatureApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$offset = 56; // int | Number of items to skip before starting to return items
$limit = 56; // int | Maximum number of items to return

try {
    $result = $apiInstance->featureGet($offset, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeatureApi->featureGet: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to _http://localhost:3000_

| Class        | Method                                                            | HTTP request                 | Description                                            |
| ------------ | ----------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------ |
| _FeatureApi_ | [**featureGet**](docs/Api/FeatureApi.md#featureget)               | **GET** /feature             | Returns a list of features (rapids, waterfalls, etc.). |
| _FeatureApi_ | [**featureIdDelete**](docs/Api/FeatureApi.md#featureiddelete)     | **DELETE** /feature/{id}     | Deletes a feature by ID.                               |
| _FeatureApi_ | [**featureIdGet**](docs/Api/FeatureApi.md#featureidget)           | **GET** /feature/{id}        | Returns a feature by ID.                               |
| _FeatureApi_ | [**featureIdPut**](docs/Api/FeatureApi.md#featureidput)           | **PUT** /feature/{id}        | Updates a feature by ID.                               |
| _FeatureApi_ | [**featurePost**](docs/Api/FeatureApi.md#featurepost)             | **POST** /feature            | Creates a new feature.                                 |
| _GageApi_    | [**gageGet**](docs/Api/GageApi.md#gageget)                        | **GET** /gage                | Returns a list of gages.                               |
| _GageApi_    | [**gagePost**](docs/Api/GageApi.md#gagepost)                      | **POST** /gage               | Creates a new gage.                                    |
| _ReachApi_   | [**reachGet**](docs/Api/ReachApi.md#reachget)                     | **GET** /reach               | Returns a list of reaches (rivers, creeks, streams).   |
| _ReachApi_   | [**reachIdAccidentGet**](docs/Api/ReachApi.md#reachidaccidentget) | **GET** /reach/{id}/accident | Gets all the accidents for a reach by ID.              |
| _ReachApi_   | [**reachIdArticleGet**](docs/Api/ReachApi.md#reachidarticleget)   | **GET** /reach/{id}/article  | Gets all the articles for a reach by ID.               |
| _ReachApi_   | [**reachIdDelete**](docs/Api/ReachApi.md#reachiddelete)           | **DELETE** /reach/{id}       | Deletes a reach by ID.                                 |
| _ReachApi_   | [**reachIdEventGet**](docs/Api/ReachApi.md#reachideventget)       | **GET** /reach/{id}/event    | Gets all the events for a reach by ID.                 |
| _ReachApi_   | [**reachIdFeatureGet**](docs/Api/ReachApi.md#reachidfeatureget)   | **GET** /reach/{id}/feature  | Gets all the features for a reach by ID.               |
| _ReachApi_   | [**reachIdGageGet**](docs/Api/ReachApi.md#reachidgageget)         | **GET** /reach/{id}/gage     | Gets all the gages for a reach by ID.                  |
| _ReachApi_   | [**reachIdGet**](docs/Api/ReachApi.md#reachidget)                 | **GET** /reach/{id}          | Gets a reach by ID.                                    |
| _ReachApi_   | [**reachIdPostGet**](docs/Api/ReachApi.md#reachidpostget)         | **GET** /reach/{id}/post     | Gets all the posts for a reach by ID.                  |
| _ReachApi_   | [**reachIdPut**](docs/Api/ReachApi.md#reachidput)                 | **PUT** /reach/{id}          | Updates a reach by ID.                                 |
| _ReachApi_   | [**reachPost**](docs/Api/ReachApi.md#reachpost)                   | **POST** /reach              | Creates a new reach.                                   |
| _ReachApi_   | [**reachStateStateGet**](docs/Api/ReachApi.md#reachstatestateget) | **GET** /reach/state/{state} | Gets all the reaches for U.S. State.                   |

## Models

- [Accident](docs/Model/Accident.md)
- [Article](docs/Model/Article.md)
- [Event](docs/Model/Event.md)
- [Feature](docs/Model/Feature.md)
- [Gage](docs/Model/Gage.md)
- [Permit](docs/Model/Permit.md)
- [Post](docs/Model/Post.md)
- [Reach](docs/Model/Reach.md)
- [Revision](docs/Model/Revision.md)
- [User](docs/Model/User.md)

## Authorization

Authentication schemes defined for the API:

### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-WH2O-API-KEY
- **Location**: HTTP header

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author

## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
