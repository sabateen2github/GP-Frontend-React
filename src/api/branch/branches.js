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


const updateBranch = async ({id, location, name, phone, instituteId}) => {

    let apiInstance = new BackendClient.BranchesControllerApi();
    let branch = new BackendClient.Branch();
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

const createBranch = async ({location, name, phone, instituteId}) => {

    let apiInstance = new BackendClient.BranchesControllerApi();

    let branch = new BackendClient.Branch();
    branch.name = name;
    branch.phone = phone;
    branch.location = location;
    branch.instituteId = instituteId;

    let opts = {
        'branch': branch // Branch |
    };

    return await apiInstance.createBranch(opts).then(() => {
        return true;
    }, (error) => {
        console.error(error);
    });
};


export {branchesFetcher, branchFetcher, updateBranch, createBranch};