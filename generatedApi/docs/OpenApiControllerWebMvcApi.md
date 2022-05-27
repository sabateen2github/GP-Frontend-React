# BackendClient.OpenApiControllerWebMvcApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDocumentation**](OpenApiControllerWebMvcApi.md#getDocumentation) | **GET** /v3/api-docs | 



## getDocumentation

> String getDocumentation(opts)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.OpenApiControllerWebMvcApi();
let opts = {
  'group': "group_example" // String | 
};
apiInstance.getDocumentation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/hal+json

