# BackendClient.InstituteControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstitute**](InstituteControllerApi.md#createInstitute) | **POST** /institute | 
[**deleteInstitute**](InstituteControllerApi.md#deleteInstitute) | **DELETE** /institute/{id} | 
[**getInstitute**](InstituteControllerApi.md#getInstitute) | **GET** /institute/{id} | 
[**searchInstitutes**](InstituteControllerApi.md#searchInstitutes) | **GET** /institute | 
[**updateInstitute**](InstituteControllerApi.md#updateInstitute) | **PUT** /institute | 



## createInstitute

> createInstitute(opts)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.InstituteControllerApi();
let opts = {
  'inlineObject1': new BackendClient.InlineObject1() // InlineObject1 | 
};
apiInstance.createInstitute(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteInstitute

> deleteInstitute(id)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.InstituteControllerApi();
let id = "id_example"; // String | 
apiInstance.deleteInstitute(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

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
apiInstance.getInstitute(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
apiInstance.searchInstitutes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## updateInstitute

> updateInstitute(opts)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.InstituteControllerApi();
let opts = {
  'inlineObject': new BackendClient.InlineObject() // InlineObject | 
};
apiInstance.updateInstitute(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

