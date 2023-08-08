# ReachApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reachGet**](ReachApi.md#reachGet) | **GET** /reach | Returns a list of reaches (rivers, creeks, streams).
[**reachIdAccidentGet**](ReachApi.md#reachIdAccidentGet) | **GET** /reach/{id}/accident | Gets all the accidents for a reach by ID.
[**reachIdArticleGet**](ReachApi.md#reachIdArticleGet) | **GET** /reach/{id}/article | Gets all the articles for a reach by ID.
[**reachIdDelete**](ReachApi.md#reachIdDelete) | **DELETE** /reach/{id} | Deletes a reach by ID.
[**reachIdEventGet**](ReachApi.md#reachIdEventGet) | **GET** /reach/{id}/event | Gets all the events for a reach by ID.
[**reachIdFeatureGet**](ReachApi.md#reachIdFeatureGet) | **GET** /reach/{id}/feature | Gets all the features for a reach by ID.
[**reachIdGageGet**](ReachApi.md#reachIdGageGet) | **GET** /reach/{id}/gage | Gets all the gages for a reach by ID.
[**reachIdGet**](ReachApi.md#reachIdGet) | **GET** /reach/{id} | Gets a reach by ID.
[**reachIdPostGet**](ReachApi.md#reachIdPostGet) | **GET** /reach/{id}/post | Gets all the posts for a reach by ID.
[**reachIdPut**](ReachApi.md#reachIdPut) | **PUT** /reach/{id} | Updates a reach by ID.
[**reachPost**](ReachApi.md#reachPost) | **POST** /reach | Creates a new reach.
[**reachStateStateGet**](ReachApi.md#reachStateStateGet) | **GET** /reach/state/{state} | Gets all the reaches for U.S. State.


<a id="reachGet"></a>
# **reachGet**
> kotlin.collections.List&lt;Reach&gt; reachGet(offset, limit)

Returns a list of reaches (rivers, creeks, streams).

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val offset : kotlin.Int = 56 // kotlin.Int | Number of items to skip before starting to return items
val limit : kotlin.Int = 56 // kotlin.Int | Maximum number of items to return
try {
    val result : kotlin.collections.List<Reach> = apiInstance.reachGet(offset, limit)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **kotlin.Int**| Number of items to skip before starting to return items | [optional]
 **limit** | **kotlin.Int**| Maximum number of items to return | [optional]

### Return type

[**kotlin.collections.List&lt;Reach&gt;**](Reach.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="reachIdAccidentGet"></a>
# **reachIdAccidentGet**
> Accident reachIdAccidentGet(id)

Gets all the accidents for a reach by ID.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : Accident = apiInstance.reachIdAccidentGet(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachIdAccidentGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachIdAccidentGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |

### Return type

[**Accident**](Accident.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="reachIdArticleGet"></a>
# **reachIdArticleGet**
> Article reachIdArticleGet(id)

Gets all the articles for a reach by ID.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : Article = apiInstance.reachIdArticleGet(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachIdArticleGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachIdArticleGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |

### Return type

[**Article**](Article.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="reachIdDelete"></a>
# **reachIdDelete**
> reachIdDelete(id)

Deletes a reach by ID.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    apiInstance.reachIdDelete(id)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachIdDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |

### Return type

null (empty response body)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a id="reachIdEventGet"></a>
# **reachIdEventGet**
> Event reachIdEventGet(id)

Gets all the events for a reach by ID.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : Event = apiInstance.reachIdEventGet(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachIdEventGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachIdEventGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |

### Return type

[**Event**](Event.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="reachIdFeatureGet"></a>
# **reachIdFeatureGet**
> Feature reachIdFeatureGet(id)

Gets all the features for a reach by ID.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : Feature = apiInstance.reachIdFeatureGet(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachIdFeatureGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachIdFeatureGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |

### Return type

[**Feature**](Feature.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="reachIdGageGet"></a>
# **reachIdGageGet**
> Gage reachIdGageGet(id)

Gets all the gages for a reach by ID.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : Gage = apiInstance.reachIdGageGet(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachIdGageGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachIdGageGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |

### Return type

[**Gage**](Gage.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="reachIdGet"></a>
# **reachIdGet**
> Reach reachIdGet(id)

Gets a reach by ID.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : Reach = apiInstance.reachIdGet(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachIdGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |

### Return type

[**Reach**](Reach.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="reachIdPostGet"></a>
# **reachIdPostGet**
> Post reachIdPostGet(id)

Gets all the posts for a reach by ID.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val id : kotlin.String = id_example // kotlin.String | 
try {
    val result : Post = apiInstance.reachIdPostGet(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachIdPostGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachIdPostGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |

### Return type

[**Post**](Post.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="reachIdPut"></a>
# **reachIdPut**
> Reach reachIdPut(id, reach)

Updates a reach by ID.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val id : kotlin.String = id_example // kotlin.String | 
val reach : Reach =  // Reach | 
try {
    val result : Reach = apiInstance.reachIdPut(id, reach)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachIdPut")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachIdPut")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.String**|  |
 **reach** | [**Reach**](Reach.md)|  |

### Return type

[**Reach**](Reach.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="reachPost"></a>
# **reachPost**
> Reach reachPost(reach)

Creates a new reach.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val reach : Reach =  // Reach | 
try {
    val result : Reach = apiInstance.reachPost(reach)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reach** | [**Reach**](Reach.md)|  |

### Return type

[**Reach**](Reach.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="reachStateStateGet"></a>
# **reachStateStateGet**
> Reach reachStateStateGet(state)

Gets all the reaches for U.S. State.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ReachApi()
val state : kotlin.String = CO // kotlin.String | 
try {
    val result : Reach = apiInstance.reachStateStateGet(state)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ReachApi#reachStateStateGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ReachApi#reachStateStateGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **kotlin.String**|  |

### Return type

[**Reach**](Reach.md)

### Authorization


Configure ApiKeyAuth:
    ApiClient.apiKey["X-WH2O-API-KEY"] = ""
    ApiClient.apiKeyPrefix["X-WH2O-API-KEY"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

