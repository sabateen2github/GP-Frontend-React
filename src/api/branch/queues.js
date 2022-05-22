function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const queueFetcher = async ({id, branchId}) => {

    await sleep(500);
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