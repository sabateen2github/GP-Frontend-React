import BackendClient from 'backend-client';


const queueFetcher = async ({id, branchId}) => {

    let apiInstance = new BackendClient.QueueControllerApi();

    return await apiInstance.getQueue(id, branchId).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};


const resetQueue = async (branchId, queueId) => {

    let apiInstance = new BackendClient.QueueControllerApi();

    return await apiInstance.resetQueue(queueId, branchId).then(() => {
        return true;
    }, (error) => {
        console.log(error);
    });

};

const deleteQueue = async (branchId, queueId) => {

    let apiInstance = new BackendClient.QueueControllerApi();

    return await apiInstance.deleteQueue(queueId, branchId).then(() => {
        return true;
    }, (error) => {
        console.log(error);
    });

};

const editQueue = async ({branchId, queueId, queueName}) => {


    let apiInstance = new BackendClient.QueueControllerApi();
    let queueSpec = new BackendClient.QueueSpec();
    queueSpec.name = queueName;
    queueSpec.id = queueId;
    queueSpec.branchId = branchId;

    return await apiInstance.editQueueSpec(queueSpec).then(() => {
        return true;
    }, (error) => {
        console.log(error);
    });

};

const advanceQueue = async (branchId, queueId) => {

    let apiInstance = new BackendClient.QueueControllerApi();

    return await apiInstance.advanceQueue(queueId, branchId).then(() => {
        return true;
    }, (error) => {
        console.error(error);
    });

};

export {queueFetcher, advanceQueue, editQueue, deleteQueue, resetQueue};