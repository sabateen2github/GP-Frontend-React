import {UserControllerApi, UserResponseDTO} from "auth-backend-client";
import {ApiClient, EmployeesControllerApi} from "backend-client";

const CREDENTIAL_KEY = 'CREDENTIAL_KEY';

const login = (username, password, callback) => {

    let apiInstance = new UserControllerApi();

    apiInstance.login(username, password).then((data) => {
        localStorage.setItem('jwt-login', data);
        console.log(data);
        //fetchDataAfterLogin();
        //callback(true);
    }, (error) => {
        console.log(error);
        //callback(false);
    });

    setTimeout(() => {

        const adminLogo = 'https://www.pngitem.com/pimgs/m/226-2260470_transparent-admin-icon-png-admin-logo-png-png.png';
        const businessLogo = "https://financialallianceforwomen.org/wp-content/uploads/2015/07/BAE-Logo-600x600-profile-picture.jpg";
        localStorage.setItem('jwt', "#A105");
        localStorage.setItem('logo', username == 'alaa2sbateen' ? businessLogo : adminLogo);
        localStorage.setItem('profilePic', username == 'alaa2sbateen' ? businessLogo : adminLogo);
        localStorage.setItem('employeeName', "Alaa Al-Sabateen");

        localStorage.setItem('employeeId', "Admin");
        localStorage.setItem('instituteName', username == 'alaa2sbateen' ? "Bank al Etihad" : "Admin");
        localStorage.setItem('instituteId', "#dasffesdfds43243");
        localStorage.setItem('instituteEmail', "etihad@bank.com");
        localStorage.setItem('institutePhone', "079 123 4567");

        let accountType;
        if (username == 'alaa2sbateen') accountType = UserResponseDTO.AppUserRolesEnum.MANAGEMENT;
        else if (username == 'alaa3sbateen') accountType = UserResponseDTO.AppUserRolesEnum.HELP_DESK;
        else accountType = UserResponseDTO.AppUserRolesEnum.ADMIN;

        localStorage.setItem('accountType', accountType);
        if (accountType == UserResponseDTO.AppUserRolesEnum.HELP_DESK) {
            localStorage.setItem('branchId', '#ads3reef');
            localStorage.setItem('branchName', 'Bank al Etihad');
        }

        callback(true);
    }, 2000);

};

const fetchDataAfterLogin = () => {
    let defaultClient = ApiClient.instance;
    // Configure Bearer (JWT) access token for authorization: bearerAuth
    let bearerAuth = defaultClient.authentications['bearerAuth'];
    bearerAuth.accessToken = "YOUR ACCESS TOKEN"

    let apiInstance = new EmployeesControllerApi();
    let id = "id_example"; // String |
    apiInstance.getEmployee(id).then((data) => {
        console.log('API called successfully. Returned data: ' + data);
    }, (error) => {
        console.error(error);
    });
};


const fetchCredentials = async () => {

    const accountType = localStorage.getItem('accountType');

    let helpDeskMetaData = {};
    if (accountType == UserResponseDTO.AppUserRolesEnum.HELP_DESK) {
        helpDeskMetaData = {
            branchName: localStorage.getItem('branchName'),
            branchId: localStorage.getItem('branchId')
        };
    }

    return {
        logo: localStorage.getItem('logo'),
        profilePic: localStorage.getItem('profilePic'),
        instituteName: localStorage.getItem('instituteName'),
        employeeName: localStorage.getItem('employeeName'),
        employeeId: localStorage.getItem('employeeId'),
        instituteId: localStorage.getItem('instituteId'),
        instituteEmail: localStorage.getItem('instituteEmail'),
        institutePhone: localStorage.getItem('institutePhone'),
        accountType: accountType,
        ...helpDeskMetaData
    };

};


const loginAdminAsInstitute = async (instituteId) => {
    return true;
};

const checkIfLoggedIn = () => {
    return localStorage.hasOwnProperty('jwt');
};


const logout = async () => {
    localStorage.clear();
    return true;
};

export {login, fetchCredentials, checkIfLoggedIn, logout, loginAdminAsInstitute, CREDENTIAL_KEY};
