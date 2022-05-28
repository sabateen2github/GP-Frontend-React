import {ApiClient as AuthApiClient, UserControllerApi, UserResponseDTO} from "auth-backend-client";
import {ApiClient, BranchesControllerApi, EmployeesControllerApi, InstituteControllerApi} from "backend-client";
import jwt_decode from "jwt-decode";
import {fetchInstituteDetails} from "../management/management";

const CREDENTIAL_KEY = 'CREDENTIAL_KEY';

const login = (username, password, callback) => {
    let loginApi = new UserControllerApi();

    loginApi.login(username, password).then((data) => {
        localStorage.setItem('jwt', data);

        AuthApiClient.instance.authentications['bearerAuth'].accessToken = data;
        ApiClient.instance.authentications['bearerAuth'].accessToken = data;
        let employeeApi = new EmployeesControllerApi();
        return employeeApi.getEmployeeByUsername(username);

    }).then((employee) => {
        localStorage.setItem('employeeId', employee.id);
        localStorage.setItem('employeeName', employee.name);
        localStorage.setItem('employeeFullName', employee.fullName);

        if (employee.branchId != null) localStorage.setItem("branchId", employee.branchId); else localStorage.removeItem("branchId");

        if (employee.accountType == UserResponseDTO.AppUserRolesEnum.ADMIN) {
            const adminLogo = 'https://image.pngaaa.com/702/6256702-middle.png';
            localStorage.setItem('profilePic', adminLogo);
        } else {
            localStorage.setItem('profilePic', employee.profilePic);
        }
        localStorage.setItem('accountType', employee.accountType);
        let decoded = jwt_decode(localStorage.getItem("jwt"));
        let instituteApi = new InstituteControllerApi();
        return instituteApi.getInstitute(decoded.instituteId);

    }).then((institute) => {
        localStorage.setItem('instituteId', institute.id);
        localStorage.setItem('instituteName', institute.name);
        localStorage.setItem('instituteEmail', institute.email);
        localStorage.setItem('institutePhone', institute.phone);
        if (localStorage.getItem("accountType") == UserResponseDTO.AppUserRolesEnum.ADMIN) {
            const adminLogo = 'https://image.pngaaa.com/702/6256702-middle.png';
            localStorage.setItem('logo', adminLogo);
        } else {
            localStorage.setItem('logo', institute.logoUrl);
        }
        if (localStorage.getItem("branchId")) {
            let branchApi = new BranchesControllerApi();
            return branchApi.getBranch(localStorage.getItem("branchId")).then((branch) => {
                localStorage.setItem('branchName', branch.name);
                callback(true);
            }).catch((error) => {
                console.log(error);
                callback(false);
            });
        }
        callback(true);
    }).catch((error) => {
        console.log(error);
        callback(false);
    });
};

const fetchCredentials = async () => {

    const accountType = localStorage.getItem('accountType');

    let helpDeskMetaData = {};
    if (accountType == UserResponseDTO.AppUserRolesEnum.HELP_DESK) {
        helpDeskMetaData = {
            branchName: localStorage.getItem('branchName'), branchId: localStorage.getItem('branchId')
        };
    }

    if (accountType == UserResponseDTO.AppUserRolesEnum.ADMIN && localStorage.hasOwnProperty("loggedAs")) {
        return {
            logo: localStorage.getItem('loggedAs_logo'),
            profilePic: localStorage.getItem('profilePic'),
            instituteName: localStorage.getItem('loggedAs_InstituteName'),
            employeeName: localStorage.getItem('employeeName'),
            employeeId: localStorage.getItem('employeeId'),
            instituteId: localStorage.getItem('loggedAs_InstituteId'),
            instituteEmail: localStorage.getItem('instituteEmail'),
            institutePhone: localStorage.getItem('institutePhone'),
            accountType: accountType
        };
    } else {
        return {
            logo: localStorage.getItem('logo'),
            profilePic: localStorage.getItem('profilePic'),
            instituteName: localStorage.getItem('instituteName'),
            employeeName: localStorage.getItem('employeeName'),
            employeeId: localStorage.getItem('employeeId'),
            instituteId: localStorage.getItem('instituteId'),
            instituteEmail: localStorage.getItem('instituteEmail'),
            institutePhone: localStorage.getItem('institutePhone'),
            accountType: accountType, ...helpDeskMetaData
        };
    }


};


const loginAdminAsInstitute = async (instituteId) => {
    return fetchInstituteDetails(instituteId).then((institute) => {
        localStorage.setItem("loggedAs", 'true');
        localStorage.setItem("loggedAs_InstituteId", institute.id);
        localStorage.setItem("loggedAs_InstituteName", institute.name);
        localStorage.setItem("loggedAs_logo", institute.logoUrl);
        return true;
    }).catch((error) => {
        console.log(error);
        return false;
    });
};

const checkIfLoggedIn = () => {
    return localStorage.hasOwnProperty('jwt');
};


const logout = async () => {
    const accountType = localStorage.getItem('accountType');
    if (accountType == UserResponseDTO.AppUserRolesEnum.ADMIN && localStorage.hasOwnProperty("loggedAs")) {
        localStorage.removeItem("loggedAs");
        return true;
    }
    localStorage.clear();
    return true;
};

export {login, fetchCredentials, checkIfLoggedIn, logout, loginAdminAsInstitute, CREDENTIAL_KEY};
