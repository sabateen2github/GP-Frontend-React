# BackendClient.EmployeesControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmployee**](EmployeesControllerApi.md#createEmployee) | **POST** /employees | 
[**editEmployee**](EmployeesControllerApi.md#editEmployee) | **PUT** /employees/{id} | 
[**getEmployee**](EmployeesControllerApi.md#getEmployee) | **GET** /employees/{id} | 
[**searchEmployees**](EmployeesControllerApi.md#searchEmployees) | **GET** /employees | 



## createEmployee

> createEmployee(opts)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.EmployeesControllerApi();
let opts = {
  'employee': new BackendClient.Employee() // Employee | 
};
apiInstance.createEmployee(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [**Employee**](Employee.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## editEmployee

> editEmployee(id, employee)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.EmployeesControllerApi();
let id = "id_example"; // String | 
let employee = new BackendClient.Employee(); // Employee | 
apiInstance.editEmployee(id, employee).then(() => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
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

