# FeatureAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**featureGet**](FeatureAPI.md#featureget) | **GET** /feature | Returns a list of features (rapids, waterfalls, etc.).
[**featureIdDelete**](FeatureAPI.md#featureiddelete) | **DELETE** /feature/{id} | Deletes a feature by ID.
[**featureIdGet**](FeatureAPI.md#featureidget) | **GET** /feature/{id} | Returns a feature by ID.
[**featureIdPut**](FeatureAPI.md#featureidput) | **PUT** /feature/{id} | Updates a feature by ID.
[**featurePost**](FeatureAPI.md#featurepost) | **POST** /feature | Creates a new feature.


# **featureGet**
```swift
    internal class func featureGet(offset: Int? = nil, limit: Int? = nil, completion: @escaping (_ data: [Feature]?, _ error: Error?) -> Void)
```

Returns a list of features (rapids, waterfalls, etc.).

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let offset = 987 // Int | Number of items to skip before starting to return items (optional)
let limit = 987 // Int | Maximum number of items to return (optional)

// Returns a list of features (rapids, waterfalls, etc.).
FeatureAPI.featureGet(offset: offset, limit: limit) { (response, error) in
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

[**[Feature]**](Feature.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featureIdDelete**
```swift
    internal class func featureIdDelete(id: String, completion: @escaping (_ data: Feature?, _ error: Error?) -> Void)
```

Deletes a feature by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Deletes a feature by ID.
FeatureAPI.featureIdDelete(id: id) { (response, error) in
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

# **featureIdGet**
```swift
    internal class func featureIdGet(id: String, completion: @escaping (_ data: Feature?, _ error: Error?) -> Void)
```

Returns a feature by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 

// Returns a feature by ID.
FeatureAPI.featureIdGet(id: id) { (response, error) in
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

# **featureIdPut**
```swift
    internal class func featureIdPut(id: String, feature: Feature, completion: @escaping (_ data: Feature?, _ error: Error?) -> Void)
```

Updates a feature by ID.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let id = "id_example" // String | 
let feature = Feature(id: 123, name: "name_example", description: "description_example", distance: 123, character: "character_example", reachId: 123) // Feature | 

// Updates a feature by ID.
FeatureAPI.featureIdPut(id: id, feature: feature) { (response, error) in
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
 **feature** | [**Feature**](Feature.md) |  | 

### Return type

[**Feature**](Feature.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featurePost**
```swift
    internal class func featurePost(feature: Feature, completion: @escaping (_ data: Feature?, _ error: Error?) -> Void)
```

Creates a new feature.

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import AmericanWhitewater

let feature = Feature(id: 123, name: "name_example", description: "description_example", distance: 123, character: "character_example", reachId: 123) // Feature | 

// Creates a new feature.
FeatureAPI.featurePost(feature: feature) { (response, error) in
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
 **feature** | [**Feature**](Feature.md) |  | 

### Return type

[**Feature**](Feature.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

