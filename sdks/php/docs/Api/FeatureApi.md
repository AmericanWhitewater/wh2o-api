# OpenAPI\Client\FeatureApi

All URIs are relative to http://localhost:3000, except if the operation defines another base path.

| Method                                                 | HTTP request             | Description                                            |
| ------------------------------------------------------ | ------------------------ | ------------------------------------------------------ |
| [**featureGet()**](FeatureApi.md#featureGet)           | **GET** /feature         | Returns a list of features (rapids, waterfalls, etc.). |
| [**featureIdDelete()**](FeatureApi.md#featureIdDelete) | **DELETE** /feature/{id} | Deletes a feature by ID.                               |
| [**featureIdGet()**](FeatureApi.md#featureIdGet)       | **GET** /feature/{id}    | Returns a feature by ID.                               |
| [**featureIdPut()**](FeatureApi.md#featureIdPut)       | **PUT** /feature/{id}    | Updates a feature by ID.                               |
| [**featurePost()**](FeatureApi.md#featurePost)         | **POST** /feature        | Creates a new feature.                                 |

## `featureGet()`

```php
featureGet($offset, $limit): \OpenAPI\Client\Model\Feature[]
```

Returns a list of features (rapids, waterfalls, etc.).

### Example

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

### Parameters

| Name       | Type    | Description                                             | Notes      |
| ---------- | ------- | ------------------------------------------------------- | ---------- |
| **offset** | **int** | Number of items to skip before starting to return items | [optional] |
| **limit**  | **int** | Maximum number of items to return                       | [optional] |

### Return type

[**\OpenAPI\Client\Model\Feature[]**](../Model/Feature.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `featureIdDelete()`

```php
featureIdDelete($id): \OpenAPI\Client\Model\Feature
```

Deletes a feature by ID.

### Example

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
$id = 'id_example'; // string

try {
    $result = $apiInstance->featureIdDelete($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeatureApi->featureIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **string** |             |       |

### Return type

[**\OpenAPI\Client\Model\Feature**](../Model/Feature.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `featureIdGet()`

```php
featureIdGet($id): \OpenAPI\Client\Model\Feature
```

Returns a feature by ID.

### Example

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
$id = 'id_example'; // string

try {
    $result = $apiInstance->featureIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeatureApi->featureIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **string** |             |       |

### Return type

[**\OpenAPI\Client\Model\Feature**](../Model/Feature.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `featureIdPut()`

```php
featureIdPut($id, $feature): \OpenAPI\Client\Model\Feature
```

Updates a feature by ID.

### Example

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
$id = 'id_example'; // string
$feature = new \OpenAPI\Client\Model\Feature(); // \OpenAPI\Client\Model\Feature

try {
    $result = $apiInstance->featureIdPut($id, $feature);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeatureApi->featureIdPut: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name        | Type                                                     | Description | Notes |
| ----------- | -------------------------------------------------------- | ----------- | ----- |
| **id**      | **string**                                               |             |       |
| **feature** | [**\OpenAPI\Client\Model\Feature**](../Model/Feature.md) |             |       |

### Return type

[**\OpenAPI\Client\Model\Feature**](../Model/Feature.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `featurePost()`

```php
featurePost($feature): \OpenAPI\Client\Model\Feature
```

Creates a new feature.

### Example

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
$feature = new \OpenAPI\Client\Model\Feature(); // \OpenAPI\Client\Model\Feature

try {
    $result = $apiInstance->featurePost($feature);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FeatureApi->featurePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name        | Type                                                     | Description | Notes |
| ----------- | -------------------------------------------------------- | ----------- | ----- |
| **feature** | [**\OpenAPI\Client\Model\Feature**](../Model/Feature.md) |             |       |

### Return type

[**\OpenAPI\Client\Model\Feature**](../Model/Feature.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
