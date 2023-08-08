# FeatureApi

All URIs are relative to _http://localhost:3000_

| Method                                               | HTTP request             | Description                                            |
| ---------------------------------------------------- | ------------------------ | ------------------------------------------------------ |
| [**featureGet**](FeatureApi.md#featureGet)           | **GET** /feature         | Returns a list of features (rapids, waterfalls, etc.). |
| [**featureIdDelete**](FeatureApi.md#featureIdDelete) | **DELETE** /feature/{id} | Deletes a feature by ID.                               |
| [**featureIdGet**](FeatureApi.md#featureIdGet)       | **GET** /feature/{id}    | Returns a feature by ID.                               |
| [**featureIdPut**](FeatureApi.md#featureIdPut)       | **PUT** /feature/{id}    | Updates a feature by ID.                               |
| [**featurePost**](FeatureApi.md#featurePost)         | **POST** /feature        | Creates a new feature.                                 |

<a id="featureGet"></a>

# **featureGet**

> kotlin.collections.List&lt;Feature&gt; featureGet(offset, limit)

Returns a list of features (rapids, waterfalls, etc.).

### Example

```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FeatureApi()
val offset : kotlin.Int = 56 // kotlin.Int | Number of items to skip before starting to return items
val limit : kotlin.Int = 56 // kotlin.Int | Maximum number of items to return
try {
    val result : kotlin.collections.List<Feature> = apiInstance.featureGet(offset, limit)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FeatureApi#featureGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FeatureApi#featureGet")
    e.printStackTrace()
}
```

### Parameters

| Name       | Type           | Description                                             | Notes      |
| ---------- | -------------- | ------------------------------------------------------- | ---------- |
| **offset** | **kotlin.Int** | Number of items to skip before starting to return items | [optional] |
| **limit**  | **kotlin.Int** | Maximum number of items to return                       | [optional] |

### Return type

[**kotlin.collections.List&lt;Feature&gt;**](Feature.md)

### Authorization

Configure ApiKeyAuth:
ApiClient.apiKey["X-WH2O-API-KEY"] = ""
ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a id="featureIdDelete"></a>

# **featureIdDelete**

> Feature featureIdDelete(id)

Deletes a feature by ID.

### Example

```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FeatureApi()
val id : kotlin.String = id_example // kotlin.String |
try {
    val result : Feature = apiInstance.featureIdDelete(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FeatureApi#featureIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FeatureApi#featureIdDelete")
    e.printStackTrace()
}
```

### Parameters

| Name   | Type              | Description | Notes |
| ------ | ----------------- | ----------- | ----- |
| **id** | **kotlin.String** |             |

### Return type

[**Feature**](Feature.md)

### Authorization

Configure ApiKeyAuth:
ApiClient.apiKey["X-WH2O-API-KEY"] = ""
ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a id="featureIdGet"></a>

# **featureIdGet**

> Feature featureIdGet(id)

Returns a feature by ID.

### Example

```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FeatureApi()
val id : kotlin.String = id_example // kotlin.String |
try {
    val result : Feature = apiInstance.featureIdGet(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FeatureApi#featureIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FeatureApi#featureIdGet")
    e.printStackTrace()
}
```

### Parameters

| Name   | Type              | Description | Notes |
| ------ | ----------------- | ----------- | ----- |
| **id** | **kotlin.String** |             |

### Return type

[**Feature**](Feature.md)

### Authorization

Configure ApiKeyAuth:
ApiClient.apiKey["X-WH2O-API-KEY"] = ""
ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a id="featureIdPut"></a>

# **featureIdPut**

> Feature featureIdPut(id, feature)

Updates a feature by ID.

### Example

```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FeatureApi()
val id : kotlin.String = id_example // kotlin.String |
val feature : Feature =  // Feature |
try {
    val result : Feature = apiInstance.featureIdPut(id, feature)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FeatureApi#featureIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FeatureApi#featureIdPut")
    e.printStackTrace()
}
```

### Parameters

| Name        | Type                      | Description | Notes |
| ----------- | ------------------------- | ----------- | ----- |
| **id**      | **kotlin.String**         |             |
| **feature** | [**Feature**](Feature.md) |             |

### Return type

[**Feature**](Feature.md)

### Authorization

Configure ApiKeyAuth:
ApiClient.apiKey["X-WH2O-API-KEY"] = ""
ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a id="featurePost"></a>

# **featurePost**

> Feature featurePost(feature)

Creates a new feature.

### Example

```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = FeatureApi()
val feature : Feature =  // Feature |
try {
    val result : Feature = apiInstance.featurePost(feature)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling FeatureApi#featurePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling FeatureApi#featurePost")
    e.printStackTrace()
}
```

### Parameters

| Name        | Type                      | Description | Notes |
| ----------- | ------------------------- | ----------- | ----- |
| **feature** | [**Feature**](Feature.md) |             |

### Return type

[**Feature**](Feature.md)

### Authorization

Configure ApiKeyAuth:
ApiClient.apiKey["X-WH2O-API-KEY"] = ""
ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
