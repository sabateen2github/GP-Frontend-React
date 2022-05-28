import {ApiClient, Branch, BranchesControllerApi, QueueControllerApi, QueueSpec} from 'backend-client';
import {fetchCredentials} from "../login/login";


if (!localStorage.hasOwnProperty('location-edit-branch')) {
    localStorage.setItem('location-edit-branch', JSON.stringify({lat: 31.952308, lng: 35.819598}));
}
const branchesFetcher = async () => {

    let apiInstance = new BranchesControllerApi();
    return apiInstance.getAllBranches().then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};


const branchFetcher = async (id) => {

    let apiInstance = new BranchesControllerApi();
    let finalBranch;
    return apiInstance.getBranch(id).then((data) => {
        return data;
    }).then(branch => {
        finalBranch = branch;
        return fetchCredentials();
    }).then(credentials => {
        let apiInstance = new QueueControllerApi();
        return apiInstance.getAllQueues(credentials.instituteId, finalBranch.id);
    }).then(queues => {
        finalBranch.queues = queues;
        return finalBranch;
    }).catch((error) => {
        console.error(error);
    });
};


const updateBranch = async ({id, location, name, phone, instituteId}) => {
    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");
    let apiInstance = new BranchesControllerApi();
    let branch = new Branch();
    branch.id = id;
    branch.name = name;
    branch.phone = phone;
    branch.location = location;
    branch.instituteId = instituteId;

    return await apiInstance.updateBranch(id, branch).then(() => {
        return true;
    }, (error) => {
        console.error(error);
    });
};

const addQueue = async (queueName, branchId) => {

    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");
    let apiInstance = new QueueControllerApi();
    let queueSpec = new QueueSpec(); // QueueSpec |
    queueSpec.name = queueName;
    queueSpec.branchId = branchId;

    return apiInstance.createQueueSpec(queueSpec).then(() => {
        return true;
    }, (error) => {
        console.error(error);
        return false;
    });

};


const addQueueForBranches = async (queueName, branchesIds) => {

    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new QueueControllerApi();

    let promises = branchesIds.map((branchId) => {
        let queueSpec = new QueueSpec(); // QueueSpec |
        queueSpec.name = queueName;
        queueSpec.branchId = branchId;
        console.log(queueSpec);
        return apiInstance.createQueueSpec(queueSpec);
    })


    for (let i = 0, len = promises.length; i < len; i++) {
        await promises[i];
    }
    return true;
};

const deleteBranch = async (branchId) => {
    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new BranchesControllerApi();
    return apiInstance.deleteBranch(branchId).then(() => {
        return true;
    }, (error) => {
        console.error(error);
        return false;
    });
};

const createBranch = async ({location, name, phone, instituteId}) => {

    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new BranchesControllerApi();

    let branch = new Branch();
    branch.name = name;
    branch.phone = phone;
    branch.location = location;
    branch.instituteId = instituteId;

    return apiInstance.createBranch(branch).then((branch) => {
        return branch;
    }, (error) => {
        console.error(error);
        return false;
    });
};


export {addQueueForBranches, branchesFetcher, branchFetcher, updateBranch, createBranch, deleteBranch, addQueue};