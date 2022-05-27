import {Institute, InstituteControllerApi} from 'backend-client';

const saveInstituteDetails = async ({logoUrl, name, phone, email, instituteId}) => {

    let apiInstance = new InstituteControllerApi();
    let institute = new Institute(); // Institute |
    institute.id = instituteId;
    institute.name = name;
    institute.logoUrl = logoUrl;
    institute.email = email;
    institute.phone = phone;

    return await apiInstance.updateInstitute(instituteId, institute).then(() => {
        return true;
    }, (error) => {
        console.error(error);
    });

};


const fetchInstituteDetails = async (id) => {
    let apiInstance = new InstituteControllerApi();
    return await apiInstance.getInstitute(id).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};


export {fetchInstituteDetails, saveInstituteDetails};