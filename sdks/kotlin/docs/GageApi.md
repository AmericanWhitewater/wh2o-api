# GageApi

All URIs are relative to _http://localhost:3000_

| Method                              | HTTP request   | Description              |
| ----------------------------------- | -------------- | ------------------------ |
| [**gageGet**](GageApi.md#gageGet)   | **GET** /gage  | Returns a list of gages. |
| [**gagePost**](GageApi.md#gagePost) | **POST** /gage | Creates a new gage.      |

<a id="gageGet"></a>

# **gageGet**

> kotlin.collections.List&lt;Gage&gt; gageGet(offset, limit)

Returns a list of gages.

### Example

```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GageApi()
val offset : kotlin.Int = 56 // kotlin.Int | Number of items to skip before starting to return items
val limit : kotlin.Int = 56 // kotlin.Int | Maximum number of items to return
try {
    val result : kotlin.collections.List<Gage> = apiInstance.gageGet(offset, limit)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GageApi#gageGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GageApi#gageGet")
    e.printStackTrace()
}
```

### Parameters

| Name       | Type           | Description                                             | Notes      |
| ---------- | -------------- | ------------------------------------------------------- | ---------- |
| **offset** | **kotlin.Int** | Number of items to skip before starting to return items | [optional] |
| **limit**  | **kotlin.Int** | Maximum number of items to return                       | [optional] |

### Return type

[**kotlin.collections.List&lt;Gage&gt;**](Gage.md)

### Authorization

Configure ApiKeyAuth:
ApiClient.apiKey["X-WH2O-API-KEY"] = ""
ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a id="gagePost"></a>

# **gagePost**

> Gage gagePost(gage)

Creates a new gage.

### Example

```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GageApi()
val gage : Gage =  // Gage |
try {
    val result : Gage = apiInstance.gagePost(gage)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GageApi#gagePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GageApi#gagePost")
    e.printStackTrace()
}
```

### Parameters

| Name     | Type                | Description | Notes |
| -------- | ------------------- | ----------- | ----- |
| **gage** | [**Gage**](Gage.md) |             |

### Return type

[**Gage**](Gage.md)

### Authorization

Configure ApiKeyAuth:
ApiClient.apiKey["X-WH2O-API-KEY"] = ""
ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
