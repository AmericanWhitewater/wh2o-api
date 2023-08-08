# OpenAPI\Client\GageApi

All URIs are relative to http://localhost:3000, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**gageGet()**](GageApi.md#gageGet) | **GET** /gage | Returns a list of gages. |
| [**gagePost()**](GageApi.md#gagePost) | **POST** /gage | Creates a new gage. |


## `gageGet()`

```php
gageGet($offset, $limit): \OpenAPI\Client\Model\Gage[]
```

Returns a list of gages.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\GageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$offset = 56; // int | Number of items to skip before starting to return items
$limit = 56; // int | Maximum number of items to return

try {
    $result = $apiInstance->gageGet($offset, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GageApi->gageGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **offset** | **int**| Number of items to skip before starting to return items | [optional] |
| **limit** | **int**| Maximum number of items to return | [optional] |

### Return type

[**\OpenAPI\Client\Model\Gage[]**](../Model/Gage.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `gagePost()`

```php
gagePost($gage): \OpenAPI\Client\Model\Gage
```

Creates a new gage.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\GageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$gage = new \OpenAPI\Client\Model\Gage(); // \OpenAPI\Client\Model\Gage

try {
    $result = $apiInstance->gagePost($gage);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GageApi->gagePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **gage** | [**\OpenAPI\Client\Model\Gage**](../Model/Gage.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Gage**](../Model/Gage.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
