import {ApiClient, Institute, InstituteControllerApi, UpdateInstituteRequest} from "backend-client";
import {ApiClient as AuthApiClient} from "auth-backend-client";


const fetchBusinesses = async (searchTerm) => {

    console.log("esarching");
    let apiInstance = new InstituteControllerApi();
    let opts = {
        'searchTerms': searchTerm.term // String |
    };
    return apiInstance.searchInstitutes(opts).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });

};

const deleteBusiness = async (id) => {

    return true;
};

const createBusiness = async ({logoUrl, name, phone, email}) => {

    AuthApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");
    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let updateInstituteReq = new UpdateInstituteRequest();
    updateInstituteReq.institute = new Institute();
    if (logoUrl) {
        async function getFileFromUrl(url, name, defaultType = 'image/jpeg') {
            const response = await fetch(url);
            const data = await response.blob();
            return new File([data], name, {
                type: data.type || defaultType,
            });
        }

        const file = await getFileFromUrl(logoUrl, `${name}logoUrl.jpg`);
        updateInstituteReq.profilePic = file;
    }

    let apiInstance = new InstituteControllerApi();

    updateInstituteReq.institute.name = name;
    updateInstituteReq.institute.phone = phone;
    updateInstituteReq.institute.email = email;


    let opts = {
        'updateInstituteRequest': updateInstituteReq // UpdateInstituteRequest |
    };
    return apiInstance.createInstitute(opts).then(() => {
        return true;
    }, (error) => {
        console.log(error);
        return false;
    });

};

export {fetchBusinesses, deleteBusiness, createBusiness};