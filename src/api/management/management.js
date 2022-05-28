import {ApiClient, Institute, InstituteControllerApi} from 'backend-client';

const saveInstituteDetails = async ({logoUrl, name, phone, email, instituteId}) => {

    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    if (logoUrl) {
        async function getFileFromUrl(url, name, defaultType = 'image/jpeg') {
            const response = await fetch(url);
            const data = await response.blob();
            return new File([data], name, {
                type: data.type || defaultType,
            });
        }

        const file = await getFileFromUrl(logoUrl, `${name}logoUrl.jpg`);
        logoUrl = file;
    }

    let apiInstance = new InstituteControllerApi();
    let institute = new Institute();
    institute.id = instituteId;
    institute.name = name;
    institute.email = email;
    institute.phone = phone;


    let blob = new Blob([JSON.stringify(institute)], {type: 'application/json'});
    let instituteFile = new File([blob], "file.txt", {type: "application/json"});

    return apiInstance.updateInstitute(instituteFile, logoUrl).then(() => {
        return true;
    }, (error) => {
        console.error(error);
        return false;
    });

};


const fetchInstituteDetails = async (id) => {

    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new InstituteControllerApi();
    return await apiInstance.getInstitute(id).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};


export {fetchInstituteDetails, saveInstituteDetails};