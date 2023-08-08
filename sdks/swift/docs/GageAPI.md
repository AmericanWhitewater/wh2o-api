# GageAPI

All URIs are relative to _http://localhost:3000_

| Method                              | HTTP request   | Description              |
| ----------------------------------- | -------------- | ------------------------ |
| [**gageGet**](GageAPI.md#gageget)   | **GET** /gage  | Returns a list of gages. |
| [**gagePost**](GageAPI.md#gagepost) | **POST** /gage | Creates a new gage.      |

# **gageGet**

```swift
    internal class func gageGet(offset: Int? = nil, limit: Int? = nil, completion: @escaping (_ data: [Gage]?, _ error: Error?) -> Void)
```

Returns a list of gages.

### Example

```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let offset = 987 // Int | Number of items to skip before starting to return items (optional)
let limit = 987 // Int | Maximum number of items to return (optional)

// Returns a list of gages.
GageAPI.gageGet(offset: offset, limit: limit) { (response, error) in
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

| Name       | Type    | Description                                             | Notes      |
| ---------- | ------- | ------------------------------------------------------- | ---------- |
| **offset** | **Int** | Number of items to skip before starting to return items | [optional] |
| **limit**  | **Int** | Maximum number of items to return                       | [optional] |

### Return type

[**[Gage]**](Gage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gagePost**

```swift
    internal class func gagePost(gage: Gage, completion: @escaping (_ data: Gage?, _ error: Error?) -> Void)
```

Creates a new gage.

### Example

```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let gage = Gage(id: 123, name: "name_example") // Gage |

// Creates a new gage.
GageAPI.gagePost(gage: gage) { (response, error) in
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

| Name     | Type                | Description | Notes |
| -------- | ------------------- | ----------- | ----- |
| **gage** | [**Gage**](Gage.md) |             |

### Return type

[**Gage**](Gage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
