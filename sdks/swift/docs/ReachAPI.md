# ReachAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reachGet**](ReachAPI.md#reachget) | **GET** /reach | Returns a list of reaches (rivers, creeks, streams).
[**reachIdAccidentGet**](ReachAPI.md#reachidaccidentget) | **GET** /reach/{id}/accident | Gets all the accidents for a reach by ID.
[**reachIdArticleGet**](ReachAPI.md#reachidarticleget) | **GET** /reach/{id}/article | Gets all the articles for a reach by ID.
[**reachIdDelete**](ReachAPI.md#reachiddelete) | **DELETE** /reach/{id} | Deletes a reach by ID.
[**reachIdEventGet**](ReachAPI.md#reachideventget) | **GET** /reach/{id}/event | Gets all the events for a reach by ID.
[**reachIdFeatureGet**](ReachAPI.md#reachidfeatureget) | **GET** /reach/{id}/feature | Gets all the features for a reach by ID.
[**reachIdGageGet**](ReachAPI.md#reachidgageget) | **GET** /reach/{id}/gage | Gets all the gages for a reach by ID.
[**reachIdGet**](ReachAPI.md#reachidget) | **GET** /reach/{id} | Gets a reach by ID.
[**reachIdPostGet**](ReachAPI.md#reachidpostget) | **GET** /reach/{id}/post | Gets all the posts for a reach by ID.
[**reachIdPut**](ReachAPI.md#reachidput) | **PUT** /reach/{id} | Updates a reach by ID.
[**reachPost**](ReachAPI.md#reachpost) | **POST** /reach | Creates a new reach.
[**reachStateStateGet**](ReachAPI.md#reachstatestateget) | **GET** /reach/state/{state} | Gets all the reaches for U.S. State.


# **reachGet**
```swift
    internal class func reachGet(offset: Int? = nil, limit: Int? = nil, completion: @escaping (_ data: [Reach]?, _ error: Error?) -> Void)
```

Returns a list of reaches (rivers, creeks, streams).

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let offset = 987 // Int | Number of items to skip before starting to return items (optional)
let limit = 987 // Int | Maximum number of items to return (optional)

// Returns a list of reaches (rivers, creeks, streams).
ReachAPI.reachGet(offset: offset, limit: limit) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Int** | Number of items to skip before starting to return items | [optional] 
 **limit** | **Int** | Maximum number of items to return | [optional] 

### Return type

[**[Reach]**](Reach.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachIdAccidentGet**
```swift
    internal class func reachIdAccidentGet(id: String, completion: @escaping (_ data: Accident?, _ error: Error?) -> Void)
```

Gets all the accidents for a reach by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Gets all the accidents for a reach by ID.
ReachAPI.reachIdAccidentGet(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 

### Return type

[**Accident**](Accident.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachIdArticleGet**
```swift
    internal class func reachIdArticleGet(id: String, completion: @escaping (_ data: Article?, _ error: Error?) -> Void)
```

Gets all the articles for a reach by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Gets all the articles for a reach by ID.
ReachAPI.reachIdArticleGet(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 

### Return type

[**Article**](Article.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachIdDelete**
```swift
    internal class func reachIdDelete(id: String, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```

Deletes a reach by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Deletes a reach by ID.
ReachAPI.reachIdDelete(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 

### Return type

Void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachIdEventGet**
```swift
    internal class func reachIdEventGet(id: String, completion: @escaping (_ data: Event?, _ error: Error?) -> Void)
```

Gets all the events for a reach by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Gets all the events for a reach by ID.
ReachAPI.reachIdEventGet(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 

### Return type

[**Event**](Event.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachIdFeatureGet**
```swift
    internal class func reachIdFeatureGet(id: String, completion: @escaping (_ data: Feature?, _ error: Error?) -> Void)
```

Gets all the features for a reach by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Gets all the features for a reach by ID.
ReachAPI.reachIdFeatureGet(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 

### Return type

[**Feature**](Feature.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachIdGageGet**
```swift
    internal class func reachIdGageGet(id: String, completion: @escaping (_ data: Gage?, _ error: Error?) -> Void)
```

Gets all the gages for a reach by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Gets all the gages for a reach by ID.
ReachAPI.reachIdGageGet(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 

### Return type

[**Gage**](Gage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachIdGet**
```swift
    internal class func reachIdGet(id: String, completion: @escaping (_ data: Reach?, _ error: Error?) -> Void)
```

Gets a reach by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Gets a reach by ID.
ReachAPI.reachIdGet(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 

### Return type

[**Reach**](Reach.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachIdPostGet**
```swift
    internal class func reachIdPostGet(id: String, completion: @escaping (_ data: Post?, _ error: Error?) -> Void)
```

Gets all the posts for a reach by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Gets all the posts for a reach by ID.
ReachAPI.reachIdPostGet(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 

### Return type

[**Post**](Post.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachIdPut**
```swift
    internal class func reachIdPut(id: String, reach: Reach, completion: @escaping (_ data: Reach?, _ error: Error?) -> Void)
```

Updates a reach by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 
let reach = Reach(id: 123, river: "river_example", section: "section_example", alternateName: "alternateName_example", abstract: "abstract_example", averageGradient: 123, maximumGradient: 123, minimumGradient: 123, county: "county_example", description: "description_example", grade: "grade_example", state: "state_example", zipcode: "zipcode_example", length: 123, events: [Event(id: 123, name: "name_example", reach: nil)], features: [Feature(id: 123, name: "name_example", description: "description_example", distance: 123, character: "character_example", reachId: 123)], gages: [Gage(id: 123, name: "name_example")], posts: [Post(id: 123, title: "title_example", content: "content_example", published: false, createdAt: Date(), updatedAt: Date(), author: User(id: 123, email: "email_example", name: "name_example", posts: [nil], articles: [Article(id: 123, title: "title_example", author: nil)]), reach: nil)], permit: Permit(id: 123, name: "name_example")) // Reach | 

// Updates a reach by ID.
ReachAPI.reachIdPut(id: id, reach: reach) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** |  | 
 **reach** | [**Reach**](Reach.md) |  | 

### Return type

[**Reach**](Reach.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachPost**
```swift
    internal class func reachPost(reach: Reach, completion: @escaping (_ data: Reach?, _ error: Error?) -> Void)
```

Creates a new reach.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let reach = Reach(id: 123, river: "river_example", section: "section_example", alternateName: "alternateName_example", abstract: "abstract_example", averageGradient: 123, maximumGradient: 123, minimumGradient: 123, county: "county_example", description: "description_example", grade: "grade_example", state: "state_example", zipcode: "zipcode_example", length: 123, events: [Event(id: 123, name: "name_example", reach: nil)], features: [Feature(id: 123, name: "name_example", description: "description_example", distance: 123, character: "character_example", reachId: 123)], gages: [Gage(id: 123, name: "name_example")], posts: [Post(id: 123, title: "title_example", content: "content_example", published: false, createdAt: Date(), updatedAt: Date(), author: User(id: 123, email: "email_example", name: "name_example", posts: [nil], articles: [Article(id: 123, title: "title_example", author: nil)]), reach: nil)], permit: Permit(id: 123, name: "name_example")) // Reach | 

// Creates a new reach.
ReachAPI.reachPost(reach: reach) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reach** | [**Reach**](Reach.md) |  | 

### Return type

[**Reach**](Reach.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reachStateStateGet**
```swift
    internal class func reachStateStateGet(state: String, completion: @escaping (_ data: Reach?, _ error: Error?) -> Void)
```

Gets all the reaches for U.S. State.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let state = "state_example" // String | 

// Gets all the reaches for U.S. State.
ReachAPI.reachStateStateGet(state: state) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **String** |  | 

### Return type

[**Reach**](Reach.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

