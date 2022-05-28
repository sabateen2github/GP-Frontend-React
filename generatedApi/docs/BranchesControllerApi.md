# BackendClient.BranchesControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBranch**](BranchesControllerApi.md#createBranch) | **POST** /branches | 
[**deleteBranch**](BranchesControllerApi.md#deleteBranch) | **DELETE** /branches/{id} | 
[**getAllBranches**](BranchesControllerApi.md#getAllBranches) | **GET** /branches | 
[**getBranch**](BranchesControllerApi.md#getBranch) | **GET** /branches/{id} | 
[**updateBranch**](BranchesControllerApi.md#updateBranch) | **PUT** /branches/{id} | 



## createBranch

> Branch createBranch(branch)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.BranchesControllerApi();
let branch = new BackendClient.Branch(); // Branch | 
apiInstance.createBranch(branch).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | [**Branch**](Branch.md)|  | 

### Return type

[**Branch**](Branch.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteBranch

> deleteBranch(id)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.BranchesControllerApi();
let id = "id_example"; // String | 
apiInstance.deleteBranch(id).then(() => {
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


## getAllBranches

> [Branch] getAllBranches()



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.BranchesControllerApi();
apiInstance.getAllBranches().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Branch]**](Branch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getBranch

> Branch getBranch(id)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.BranchesControllerApi();
let id = "id_example"; // String | 
apiInstance.getBranch(id).then((data) => {
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

[**Branch**](Branch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateBranch

> updateBranch(id, branch)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.BranchesControllerApi();
let id = "id_example"; // String | 
let branch = new BackendClient.Branch(); // Branch | 
apiInstance.updateBranch(id, branch).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **branch** | [**Branch**](Branch.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

