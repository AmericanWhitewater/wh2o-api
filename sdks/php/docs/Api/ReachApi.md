# OpenAPI\Client\ReachApi

All URIs are relative to http://localhost:3000, except if the operation defines another base path.

| Method                                                     | HTTP request                 | Description                                          |
| ---------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| [**reachGet()**](ReachApi.md#reachGet)                     | **GET** /reach               | Returns a list of reaches (rivers, creeks, streams). |
| [**reachIdAccidentGet()**](ReachApi.md#reachIdAccidentGet) | **GET** /reach/{id}/accident | Gets all the accidents for a reach by ID.            |
| [**reachIdArticleGet()**](ReachApi.md#reachIdArticleGet)   | **GET** /reach/{id}/article  | Gets all the articles for a reach by ID.             |
| [**reachIdDelete()**](ReachApi.md#reachIdDelete)           | **DELETE** /reach/{id}       | Deletes a reach by ID.                               |
| [**reachIdEventGet()**](ReachApi.md#reachIdEventGet)       | **GET** /reach/{id}/event    | Gets all the events for a reach by ID.               |
| [**reachIdFeatureGet()**](ReachApi.md#reachIdFeatureGet)   | **GET** /reach/{id}/feature  | Gets all the features for a reach by ID.             |
| [**reachIdGageGet()**](ReachApi.md#reachIdGageGet)         | **GET** /reach/{id}/gage     | Gets all the gages for a reach by ID.                |
| [**reachIdGet()**](ReachApi.md#reachIdGet)                 | **GET** /reach/{id}          | Gets a reach by ID.                                  |
| [**reachIdPostGet()**](ReachApi.md#reachIdPostGet)         | **GET** /reach/{id}/post     | Gets all the posts for a reach by ID.                |
| [**reachIdPut()**](ReachApi.md#reachIdPut)                 | **PUT** /reach/{id}          | Updates a reach by ID.                               |
| [**reachPost()**](ReachApi.md#reachPost)                   | **POST** /reach              | Creates a new reach.                                 |
| [**reachStateStateGet()**](ReachApi.md#reachStateStateGet) | **GET** /reach/state/{state} | Gets all the reaches for U.S. State.                 |

## `reachGet()`

```php
reachGet($offset, $limit): \OpenAPI\Client\Model\Reach[]
```

Returns a list of reaches (rivers, creeks, streams).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$offset = 56; // int | Number of items to skip before starting to return items
$limit = 56; // int | Maximum number of items to return

try {
    $result = $apiInstance->reachGet($offset, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name       | Type    | Description                                             | Notes      |
| ---------- | ------- | ------------------------------------------------------- | ---------- |
| **offset** | **int** | Number of items to skip before starting to return items | [optional] |
| **limit**  | **int** | Maximum number of items to return                       | [optional] |

### Return type

[**\OpenAPI\Client\Model\Reach[]**](../Model/Reach.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachIdAccidentGet()`

```php
reachIdAccidentGet($id): \OpenAPI\Client\Model\Accident
```

Gets all the accidents for a reach by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->reachIdAccidentGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachIdAccidentGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **string** |             |       |

### Return type

[**\OpenAPI\Client\Model\Accident**](../Model/Accident.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachIdArticleGet()`

```php
reachIdArticleGet($id): \OpenAPI\Client\Model\Article
```

Gets all the articles for a reach by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->reachIdArticleGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachIdArticleGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **string** |             |       |

### Return type

[**\OpenAPI\Client\Model\Article**](../Model/Article.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachIdDelete()`

```php
reachIdDelete($id)
```

Deletes a reach by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $apiInstance->reachIdDelete($id);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **string** |             |       |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachIdEventGet()`

```php
reachIdEventGet($id): \OpenAPI\Client\Model\Event
```

Gets all the events for a reach by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->reachIdEventGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachIdEventGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **string** |             |       |

### Return type

[**\OpenAPI\Client\Model\Event**](../Model/Event.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachIdFeatureGet()`

```php
reachIdFeatureGet($id): \OpenAPI\Client\Model\Feature
```

Gets all the features for a reach by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->reachIdFeatureGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachIdFeatureGet: ', $e->getMessage(), PHP_EOL;
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

## `reachIdGageGet()`

```php
reachIdGageGet($id): \OpenAPI\Client\Model\Gage
```

Gets all the gages for a reach by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->reachIdGageGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachIdGageGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **string** |             |       |

### Return type

[**\OpenAPI\Client\Model\Gage**](../Model/Gage.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachIdGet()`

```php
reachIdGet($id): \OpenAPI\Client\Model\Reach
```

Gets a reach by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->reachIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **string** |             |       |

### Return type

[**\OpenAPI\Client\Model\Reach**](../Model/Reach.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachIdPostGet()`

```php
reachIdPostGet($id): \OpenAPI\Client\Model\Post
```

Gets all the posts for a reach by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

try {
    $result = $apiInstance->reachIdPostGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachIdPostGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **id** | **string** |             |       |

### Return type

[**\OpenAPI\Client\Model\Post**](../Model/Post.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachIdPut()`

```php
reachIdPut($id, $reach): \OpenAPI\Client\Model\Reach
```

Updates a reach by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string
$reach = new \OpenAPI\Client\Model\Reach(); // \OpenAPI\Client\Model\Reach

try {
    $result = $apiInstance->reachIdPut($id, $reach);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachIdPut: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name      | Type                                                 | Description | Notes |
| --------- | ---------------------------------------------------- | ----------- | ----- |
| **id**    | **string**                                           |             |       |
| **reach** | [**\OpenAPI\Client\Model\Reach**](../Model/Reach.md) |             |       |

### Return type

[**\OpenAPI\Client\Model\Reach**](../Model/Reach.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachPost()`

```php
reachPost($reach): \OpenAPI\Client\Model\Reach
```

Creates a new reach.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reach = new \OpenAPI\Client\Model\Reach(); // \OpenAPI\Client\Model\Reach

try {
    $result = $apiInstance->reachPost($reach);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name      | Type                                                 | Description | Notes |
| --------- | ---------------------------------------------------- | ----------- | ----- |
| **reach** | [**\OpenAPI\Client\Model\Reach**](../Model/Reach.md) |             |       |

### Return type

[**\OpenAPI\Client\Model\Reach**](../Model/Reach.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `reachStateStateGet()`

```php
reachStateStateGet($state): \OpenAPI\Client\Model\Reach
```

Gets all the reaches for U.S. State.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKey('X-WH2O-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-WH2O-API-KEY', 'Bearer');


$apiInstance = new OpenAPI\Client\Api\ReachApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$state = CO; // string

try {
    $result = $apiInstance->reachStateStateGet($state);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReachApi->reachStateStateGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name      | Type       | Description | Notes |
| --------- | ---------- | ----------- | ----- |
| **state** | **string** |             |       |

### Return type

[**\OpenAPI\Client\Model\Reach**](../Model/Reach.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
