# BackendClient.InstituteControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstitute**](InstituteControllerApi.md#createInstitute) | **POST** /institute | 
[**deleteInstitute**](InstituteControllerApi.md#deleteInstitute) | **DELETE** /institute/{id} | 
[**getInstitute**](InstituteControllerApi.md#getInstitute) | **GET** /institute/{id} | 
[**searchInstitutes**](InstituteControllerApi.md#searchInstitutes) | **GET** /institute | 



## createInstitute

> createInstitute(opts)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.InstituteControllerApi();
let opts = {
  'institute': new BackendClient.Institute() // Institute | 
};
apiInstance.createInstitute(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institute** | [**Institute**](Institute.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteInstitute

> deleteInstitute(id)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.InstituteControllerApi();
let id = "id_example"; // String | 
apiInstance.deleteInstitute(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getInstitute

> Institute getInstitute(id)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.InstituteControllerApi();
let id = "id_example"; // String | 
apiInstance.getInstitute(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Institute**](Institute.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## searchInstitutes

> [Institute] searchInstitutes(opts)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.InstituteControllerApi();
let opts = {
  'searchTerms': "searchTerms_example" // String | 
};
apiInstance.searchInstitutes(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerms** | **String**|  | [optional] 

### Return type

[**[Institute]**](Institute.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

