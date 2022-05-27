import {ApiClient, Institute, InstituteControllerApi} from "backend-client";
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

    let institute = new Institute();
    let profilePic = null;
    if (logoUrl) {
        async function getFileFromUrl(url, name, defaultType = 'image/jpeg') {
            const response = await fetch(url);
            const data = await response.blob();
            return new File([data], name, {
                type: data.type || defaultType,
            });
        }

        const file = await getFileFromUrl(logoUrl, `${name}logoUrl.jpg`);
        profilePic = file;
    }

    let apiInstance = new InstituteControllerApi();

    institute.name = name;
    institute.phone = phone;
    institute.email = email;

    return apiInstance.createInstitute(institute, profilePic).then(() => {
        console.log('API called successfully.');
    }, (error) => {
        console.error(error);
    });

};

export {fetchBusinesses, deleteBusiness, createBusiness};