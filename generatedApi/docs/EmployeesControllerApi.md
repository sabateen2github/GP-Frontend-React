# BackendClient.EmployeesControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmployee**](EmployeesControllerApi.md#createEmployee) | **POST** /employees | 
[**editEmployee**](EmployeesControllerApi.md#editEmployee) | **PUT** /employees | 
[**getEmployee**](EmployeesControllerApi.md#getEmployee) | **GET** /employees/{id} | 
[**searchEmployees**](EmployeesControllerApi.md#searchEmployees) | **GET** /employees | 



## createEmployee

> createEmployee(employee, profilePic)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.EmployeesControllerApi();
let employee = new BackendClient.Employee(); // Employee | 
let profilePic = "/path/to/file"; // File | 
apiInstance.createEmployee(employee, profilePic).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [**Employee**](Employee.md)|  | 
 **profilePic** | **File**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## editEmployee

> editEmployee(id, employee, profilePic)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.EmployeesControllerApi();
let id = "id_example"; // String | 
let employee = new BackendClient.Employee(); // Employee | 
let profilePic = "/path/to/file"; // File | 
apiInstance.editEmployee(id, employee, profilePic).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **employee** | [**Employee**](Employee.md)|  | 
 **profilePic** | **File**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## getEmployee

> Employee getEmployee(id)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.EmployeesControllerApi();
let id = "id_example"; // String | 
apiInstance.getEmployee(id).then((data) => {
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

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## searchEmployees

> [Employee] searchEmployees(searchTerm)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.EmployeesControllerApi();
let searchTerm = "searchTerm_example"; // String | 
apiInstance.searchEmployees(searchTerm).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | **String**|  | 

### Return type

[**[Employee]**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

