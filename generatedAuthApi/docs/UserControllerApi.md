# BackendClient.UserControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](UserControllerApi.md#callDelete) | **DELETE** /users/{username} | 
[**login**](UserControllerApi.md#login) | **POST** /users/signin | 
[**refresh**](UserControllerApi.md#refresh) | **GET** /users/refresh | 
[**search**](UserControllerApi.md#search) | **GET** /users/{username} | 
[**signup**](UserControllerApi.md#signup) | **POST** /users/signup | 
[**whoami**](UserControllerApi.md#whoami) | **GET** /users/me | 



## callDelete

> String callDelete(username)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.UserControllerApi();
let username = "username_example"; // String | 
apiInstance.callDelete(username).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## login

> String login(username, password)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.UserControllerApi();
let username = "username_example"; // String | 
let password = "password_example"; // String | 
apiInstance.login(username, password).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## refresh

> String refresh()



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.UserControllerApi();
apiInstance.refresh().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## search

> UserResponseDTO search(username)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.UserControllerApi();
let username = "username_example"; // String | 
apiInstance.search(username).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 

### Return type

[**UserResponseDTO**](UserResponseDTO.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## signup

> String signup(userDataDTO)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.UserControllerApi();
let userDataDTO = new BackendClient.UserDataDTO(); // UserDataDTO | 
apiInstance.signup(userDataDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDataDTO** | [**UserDataDTO**](UserDataDTO.md)|  | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## whoami

> UserResponseDTO whoami()



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.UserControllerApi();
apiInstance.whoami().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserResponseDTO**](UserResponseDTO.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

