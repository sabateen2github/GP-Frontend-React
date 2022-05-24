# OpenApiDefinition.QueueControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**advanceQueue**](QueueControllerApi.md#advanceQueue) | **PUT** /queues/queue/advance | 
[**bookQueue**](QueueControllerApi.md#bookQueue) | **PUT** /queues/queue/book | 
[**deleteQueue**](QueueControllerApi.md#deleteQueue) | **DELETE** /queues/queue | 
[**editQueueSpec**](QueueControllerApi.md#editQueueSpec) | **PUT** /queues/queue | 
[**getActiveQueues**](QueueControllerApi.md#getActiveQueues) | **GET** /queues/active/{userId} | 
[**getAllQueueSpecs**](QueueControllerApi.md#getAllQueueSpecs) | **GET** /queues/spec/all | 
[**getAllQueues**](QueueControllerApi.md#getAllQueues) | **GET** /queues/queues/all | 
[**getArchivedQueues**](QueueControllerApi.md#getArchivedQueues) | **GET** /queues/archived/{userId} | 
[**getQueue**](QueueControllerApi.md#getQueue) | **GET** /queues/queue | 
[**resetQueue**](QueueControllerApi.md#resetQueue) | **PUT** /queues/queue/reset | 



## advanceQueue

> advanceQueue(id, branchId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let id = "id_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.advanceQueue(id, branchId, (error, data, response) => {
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
 **branchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## bookQueue

> bookQueue(userId, queueId, branchId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let userId = "userId_example"; // String | 
let queueId = "queueId_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.bookQueue(userId, queueId, branchId, (error, data, response) => {
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


## deleteQueue

> deleteQueue(id, branchId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let id = "id_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.deleteQueue(id, branchId, (error, data, response) => {
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
 **branchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## editQueueSpec

> editQueueSpec(queueSpec)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let queueSpec = new OpenApiDefinition.QueueSpec(); // QueueSpec | 
apiInstance.editQueueSpec(queueSpec, (error, data, response) => {
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
 **queueSpec** | [**QueueSpec**](QueueSpec.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getActiveQueues

> [BookedTurnQueue] getActiveQueues(userId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let userId = "userId_example"; // String | 
apiInstance.getActiveQueues(userId, (error, data, response) => {
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
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let branchId = "branchId_example"; // String | 
apiInstance.getAllQueueSpecs(branchId, (error, data, response) => {
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
 **branchId** | **String**|  | 

### Return type

[**[QueueSpec]**](QueueSpec.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAllQueues

> [Queue] getAllQueues(branchId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let branchId = "branchId_example"; // String | 
apiInstance.getAllQueues(branchId, (error, data, response) => {
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
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let userId = "userId_example"; // String | 
apiInstance.getArchivedQueues(userId, (error, data, response) => {
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
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let id = "id_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.getQueue(id, branchId, (error, data, response) => {
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
 **branchId** | **String**|  | 

### Return type

[**Queue**](Queue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## resetQueue

> resetQueue(id, branchId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.QueueControllerApi();
let id = "id_example"; // String | 
let branchId = "branchId_example"; // String | 
apiInstance.resetQueue(id, branchId, (error, data, response) => {
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
 **branchId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

