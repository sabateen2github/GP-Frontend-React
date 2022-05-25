import BackendClient from 'backend-client';

const saveInstituteDetails = async ({logoUrl, name, phone, email}) => {

    return true;
};


const fetchInstituteDetails = async (id) => {
    let apiInstance = new BackendClient.InstituteControllerApi();
    return await apiInstance.getInstitute(id).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};


export {fetchInstituteDetails, saveInstituteDetails};