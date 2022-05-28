import {ApiClient, QueueControllerApi, QueueSpec} from 'backend-client';


const queueFetcher = async ({id, branchId}) => {
    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new QueueControllerApi();

    return apiInstance.getQueue(id, branchId).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};


const resetQueue = async (branchId, queueId) => {
    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new QueueControllerApi();

    return apiInstance.resetQueue(queueId, branchId).then(() => {
        return true;
    }, (error) => {
        console.log(error);
    });

};

const deleteQueue = async (branchId, queueId) => {
    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new QueueControllerApi();

    return apiInstance.deleteQueue(queueId, branchId).then(() => {
        return true;
    }, (error) => {
        console.log(error);
    });

};

const editQueue = async ({branchId, queueId, queueName}) => {

    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new QueueControllerApi();
    let queueSpec = new QueueSpec();
    queueSpec.name = queueName;
    queueSpec.id = queueId;
    queueSpec.branchId = branchId;

    return apiInstance.editQueueSpec(queueSpec).then(() => {
        return true;
    }, (error) => {
        console.log(error);
    });

};

const advanceQueue = async (branchId, queueId) => {
    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new QueueControllerApi();

    return apiInstance.advanceQueue(queueId, branchId).then(() => {
        return true;
    }, (error) => {
        console.error(error);
    });

};

export {queueFetcher, advanceQueue, editQueue, deleteQueue, resetQueue};