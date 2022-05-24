import BackendClient from 'backend-client';


const queueFetcher = async ({id, branchId}) => {

    let apiInstance = new BackendClient.QueueControllerApi();
    apiInstance.getQueue(id, branchId, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + data);
        }
    });

    return {
        name: `Category 2`,
        id: `dqwdwqwdq`,
        size: 80,
        physicalSize: 40,
        remoteSize: 40,
        averageServiceTime: 30,
        current: 'A105'
    };
};


const resetQueue = async (branchId, queueId) => {

    await sleep(500);

    return true;

};

const deleteQueue = async (branchId, queueId) => {

    await sleep(500);

    return true;

};

const editQueue = async ({branchId, queueId, queueName}) => {

    await sleep(500);

    return true;

};

const advanceQueue = async (branchId, queueId) => {

    await sleep(500);

    return true;

};

export {queueFetcher, advanceQueue, editQueue, deleteQueue, resetQueue};