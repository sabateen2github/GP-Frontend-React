import BackendClient from 'backend-client';


if (!localStorage.hasOwnProperty('location-edit-branch')) {
    localStorage.setItem('location-edit-branch', JSON.stringify({lat: 31.952308, lng: 35.819598}));
}
const branchesFetcher = async () => {

    let apiInstance = new BackendClient.BranchesControllerApi();
    return await apiInstance.getAllBranches().then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};


const branchFetcher = async (id) => {

    let apiInstance = new BackendClient.BranchesControllerApi();
    return await apiInstance.getBranch(id).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};


const updateBranch = async ({id, location, name, phone}) => {

    let apiInstance = new BackendClient.BranchesControllerApi();
    let branch = new BackendClient.Branch();
    branch.id = id;
    branch.name = name;
    branch.phone = phone;


    apiInstance.updateBranch(id, branch).then(() => {
        console.log('API called successfully.');
    }, (error) => {
        console.error(error);
    });
};

const createBranch = async ({location, name, phone}) => {

    await sleep(1000);
    return true;
};


export {branchesFetcher, branchFetcher, updateBranch, createBranch};