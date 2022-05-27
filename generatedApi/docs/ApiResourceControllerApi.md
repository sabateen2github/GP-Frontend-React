# BackendClient.ApiResourceControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**securityConfiguration**](ApiResourceControllerApi.md#securityConfiguration) | **GET** /swagger-resources/configuration/security | 
[**swaggerResources**](ApiResourceControllerApi.md#swaggerResources) | **GET** /swagger-resources | 
[**uiConfiguration**](ApiResourceControllerApi.md#uiConfiguration) | **GET** /swagger-resources/configuration/ui | 



## securityConfiguration

> SecurityConfiguration securityConfiguration()



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.ApiResourceControllerApi();
apiInstance.securityConfiguration().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SecurityConfiguration**](SecurityConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## swaggerResources

> [SwaggerResource] swaggerResources()



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.ApiResourceControllerApi();
apiInstance.swaggerResources().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[SwaggerResource]**](SwaggerResource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uiConfiguration

> UiConfiguration uiConfiguration()



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.ApiResourceControllerApi();
apiInstance.uiConfiguration().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UiConfiguration**](UiConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

