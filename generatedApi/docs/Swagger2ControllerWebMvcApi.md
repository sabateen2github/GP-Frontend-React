# BackendClient.Swagger2ControllerWebMvcApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDocumentation1**](Swagger2ControllerWebMvcApi.md#getDocumentation1) | **GET** /v2/api-docs | 



## getDocumentation1

> String getDocumentation1(opts)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.Swagger2ControllerWebMvcApi();
let opts = {
  'group': "group_example" // String | 
};
apiInstance.getDocumentation1(opts).then((data) => {
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

