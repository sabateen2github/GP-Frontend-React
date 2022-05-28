import {ApiClient, Institute, InstituteControllerApi} from "backend-client";


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
    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new InstituteControllerApi();
    return apiInstance.deleteInstitute(id).then(() => {
        return true;
    }, (error) => {
        console.error(error);
        return false;
    });

};

const createBusiness = async ({logoUrl, name, phone, email}) => {

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

    institute.name = name;
    institute.phone = phone;
    institute.email = email;

    let apiInstance = new InstituteControllerApi();

    let blob = new Blob([JSON.stringify(institute)], {type: 'application/json'});
    let file = new File([blob], "foo.txt", {type: "application/json"});

    return apiInstance.createInstitute(file, profilePic).then(() => {
        console.log('API called successfully.');
        return true;
    }, (error) => {
        console.error(error);
        return false;
    });

};

export {fetchBusinesses, deleteBusiness, createBusiness};