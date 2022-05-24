# open_api_definition

OpenApiDefinition - JavaScript client for open_api_definition
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v0
- Package version: v0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install open_api_definition --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your open_api_definition from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OpenApiDefinition = require('open_api_definition');


var api = new OpenApiDefinition.BranchesControllerApi()
var opts = {
  'branch': new OpenApiDefinition.Branch() // {Branch} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.createBranch(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenApiDefinition.BranchesControllerApi* | [**createBranch**](docs/BranchesControllerApi.md#createBranch) | **POST** /branches | 
*OpenApiDefinition.BranchesControllerApi* | [**getAllBranches**](docs/BranchesControllerApi.md#getAllBranches) | **GET** /branches | 
*OpenApiDefinition.BranchesControllerApi* | [**getBranch**](docs/BranchesControllerApi.md#getBranch) | **GET** /branches/{id} | 
*OpenApiDefinition.BranchesControllerApi* | [**updateBranch**](docs/BranchesControllerApi.md#updateBranch) | **PUT** /branches/{id} | 
*OpenApiDefinition.EmployeesControllerApi* | [**createEmployee**](docs/EmployeesControllerApi.md#createEmployee) | **POST** /employees | 
*OpenApiDefinition.EmployeesControllerApi* | [**editEmployee**](docs/EmployeesControllerApi.md#editEmployee) | **PUT** /employees/{id} | 
*OpenApiDefinition.EmployeesControllerApi* | [**getEmployee**](docs/EmployeesControllerApi.md#getEmployee) | **GET** /employees/{id} | 
*OpenApiDefinition.EmployeesControllerApi* | [**searchEmployees**](docs/EmployeesControllerApi.md#searchEmployees) | **GET** /employees | 
*OpenApiDefinition.InstituteControllerApi* | [**createInstitute**](docs/InstituteControllerApi.md#createInstitute) | **POST** /institute | 
*OpenApiDefinition.InstituteControllerApi* | [**deleteInstitute**](docs/InstituteControllerApi.md#deleteInstitute) | **DELETE** /institute/{id} | 
*OpenApiDefinition.InstituteControllerApi* | [**getInstitute**](docs/InstituteControllerApi.md#getInstitute) | **GET** /institute/{id} | 
*OpenApiDefinition.InstituteControllerApi* | [**searchInstitutes**](docs/InstituteControllerApi.md#searchInstitutes) | **GET** /institute | 
*OpenApiDefinition.QueueControllerApi* | [**advanceQueue**](docs/QueueControllerApi.md#advanceQueue) | **PUT** /queues/queue/advance | 
*OpenApiDefinition.QueueControllerApi* | [**bookQueue**](docs/QueueControllerApi.md#bookQueue) | **PUT** /queues/queue/book | 
*OpenApiDefinition.QueueControllerApi* | [**deleteQueue**](docs/QueueControllerApi.md#deleteQueue) | **DELETE** /queues/queue | 
*OpenApiDefinition.QueueControllerApi* | [**editQueueSpec**](docs/QueueControllerApi.md#editQueueSpec) | **PUT** /queues/queue | 
*OpenApiDefinition.QueueControllerApi* | [**getActiveQueues**](docs/QueueControllerApi.md#getActiveQueues) | **GET** /queues/active/{userId} | 
*OpenApiDefinition.QueueControllerApi* | [**getAllQueueSpecs**](docs/QueueControllerApi.md#getAllQueueSpecs) | **GET** /queues/spec/all | 
*OpenApiDefinition.QueueControllerApi* | [**getAllQueues**](docs/QueueControllerApi.md#getAllQueues) | **GET** /queues/queues/all | 
*OpenApiDefinition.QueueControllerApi* | [**getArchivedQueues**](docs/QueueControllerApi.md#getArchivedQueues) | **GET** /queues/archived/{userId} | 
*OpenApiDefinition.QueueControllerApi* | [**getQueue**](docs/QueueControllerApi.md#getQueue) | **GET** /queues/queue | 
*OpenApiDefinition.QueueControllerApi* | [**resetQueue**](docs/QueueControllerApi.md#resetQueue) | **PUT** /queues/queue/reset | 


## Documentation for Models

 - [OpenApiDefinition.BookedTurnQueue](docs/BookedTurnQueue.md)
 - [OpenApiDefinition.Branch](docs/Branch.md)
 - [OpenApiDefinition.Employee](docs/Employee.md)
 - [OpenApiDefinition.Institute](docs/Institute.md)
 - [OpenApiDefinition.Queue](docs/Queue.md)
 - [OpenApiDefinition.QueueSpec](docs/QueueSpec.md)


## Documentation for Authorization

All endpoints do not require authorization.