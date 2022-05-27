# BackendClient.FileServingControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFile**](FileServingControllerApi.md#getFile) | **GET** /files/{filename} | 



## getFile

> File getFile(filename)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.FileServingControllerApi();
let filename = "filename_example"; // String | 
apiInstance.getFile(filename).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

