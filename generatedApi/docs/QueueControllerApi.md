# BackendClient.QueueControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**advanceQueue**](QueueControllerApi.md#advanceQueue) | **PUT** /queues/queue/advance | 
[**bookQueue**](QueueControllerApi.md#bookQueue) | **PUT** /queues/queue/book | 
[**cancelTurn**](QueueControllerApi.md#cancelTurn) | **DELETE** /queues/queue/book | 
[**createQueueSpec**](QueueControllerApi.md#createQueueSpec) | **POST** /queues/queue | 
[**deleteQueue**](QueueControllerApi.md#deleteQueue) | **DELETE** /queues/queue | 
[**editQueueSpec**](QueueControllerApi.md#editQueueSpec) | **PUT** /queues/queue | 
[**getActiveQueues**](QueueControllerApi.md#getActiveQueues) | **GET** /queues/active/{userId} | 
[**getAllQueueSpecs**](QueueControllerApi.md#getAllQueueSpecs) | **GET** /queues/spec/all | 
[**getAllQueues**](QueueControllerApi.md#getAllQueues) | **GET** /queues/queues/all | 
[**getArchivedQueues**](QueueControllerApi.md#getArchivedQueues) | **GET** /queues/archived/{userId} | 
[**getQueue**](QueueControllerApi.md#getQueue) | **GET** /queues/queue | 
[**resetQueue**](QueueControllerApi.md#resetQueue) | **PUT** /queues/queue/reset | 
[**switchUserLocationMode**](QueueControllerApi.md#switchUserLocationMode) | **PUT** /queues/queue/book/toggle | 



## advanceQueue

> advanceQueue(id, branchId)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.QueueControllerApi();
let id = "id_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.advanceQueue(id, branchId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **branchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bookQueue

> bookQueue(userId, queueId, branchId, location)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.QueueControllerApi();
let userId = "userId_example"; // String | 
let queueId = "queueId_example"; // String | 
let branchId = "branchId_example"; // String | 
let location = "location_example"; // String | 
apiInstance.bookQueue(userId, queueId, branchId, location).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **queueId** | **String**|  | 
 **branchId** | **String**|  | 
 **location** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## cancelTurn

> cancelTurn(userId, queueId, branchId)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.QueueControllerApi();
let userId = "userId_example"; // String | 
let queueId = "queueId_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.cancelTurn(userId, queueId, branchId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **queueId** | **String**|  | 
 **branchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## createQueueSpec

> createQueueSpec(queueSpec)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.QueueControllerApi();
let queueSpec = new BackendClient.QueueSpec(); // QueueSpec | 
apiInstance.createQueueSpec(queueSpec).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queueSpec** | [**QueueSpec**](QueueSpec.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteQueue

> deleteQueue(id, branchId)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.QueueControllerApi();
let id = "id_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.deleteQueue(id, branchId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **branchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editQueueSpec

> editQueueSpec(queueSpec)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.QueueControllerApi();
let queueSpec = new BackendClient.QueueSpec(); // QueueSpec | 
apiInstance.editQueueSpec(queueSpec).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queueSpec** | [**QueueSpec**](QueueSpec.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getActiveQueues

> [BookedTurnQueue] getActiveQueues(userId)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.QueueControllerApi();
let userId = "userId_example"; // String | 
apiInstance.getActiveQueues(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**[BookedTurnQueue]**](BookedTurnQueue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllQueueSpecs

> [QueueSpec] getAllQueueSpecs(branchId)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.QueueControllerApi();
let branchId = "branchId_example"; // String | 
apiInstance.getAllQueueSpecs(branchId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branchId** | **String**|  | 

### Return type

[**[QueueSpec]**](QueueSpec.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllQueues

> [Queue] getAllQueues(instituteId, branchId)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.QueueControllerApi();
let instituteId = "instituteId_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.getAllQueues(instituteId, branchId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instituteId** | **String**|  | 
 **branchId** | **String**|  | 

### Return type

[**[Queue]**](Queue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getArchivedQueues

> [BookedTurnQueue] getArchivedQueues(userId)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.QueueControllerApi();
let userId = "userId_example"; // String | 
apiInstance.getArchivedQueues(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**[BookedTurnQueue]**](BookedTurnQueue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getQueue

> Queue getQueue(id, branchId)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.QueueControllerApi();
let id = "id_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.getQueue(id, branchId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **branchId** | **String**|  | 

### Return type

[**Queue**](Queue.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## resetQueue

> resetQueue(id, branchId)



### Example

```javascript
import BackendClient from 'backend-client';
let defaultClient = BackendClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new BackendClient.QueueControllerApi();
let id = "id_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.resetQueue(id, branchId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **branchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## switchUserLocationMode

> switchUserLocationMode(instituteId, userId, queueId, branchId)



### Example

```javascript
import BackendClient from 'backend-client';

let apiInstance = new BackendClient.QueueControllerApi();
let instituteId = "instituteId_example"; // String | 
let userId = "userId_example"; // String | 
let queueId = "queueId_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.switchUserLocationMode(instituteId, userId, queueId, branchId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instituteId** | **String**|  | 
 **userId** | **String**|  | 
 **queueId** | **String**|  | 
 **branchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

