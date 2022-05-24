# BackendClient.BranchesControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBranch**](BranchesControllerApi.md#createBranch) | **POST** /branches | 
[**getAllBranches**](BranchesControllerApi.md#getAllBranches) | **GET** /branches | 
[**getBranch**](BranchesControllerApi.md#getBranch) | **GET** /branches/{id} | 
[**updateBranch**](BranchesControllerApi.md#updateBranch) | **PUT** /branches/{id} | 



## createBranch

> createBranch(opts)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.BranchesControllerApi();
let opts = {
  'branch': new BackendClient.Branch() // Branch | 
};
apiInstance.createBranch(opts, (error, data, response) => {
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
 **branch** | [**Branch**](Branch.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getAllBranches

> [Branch] getAllBranches()



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.BranchesControllerApi();
apiInstance.getAllBranches((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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
apiInstance.getBranch(id, (error, data, response) => {
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

let apiInstance = new BackendClient.BranchesControllerApi();
let id = "id_example"; // String | 
let branch = new BackendClient.Branch(); // Branch | 
apiInstance.updateBranch(id, branch, (error, data, response) => {
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
 **branch** | [**Branch**](Branch.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

