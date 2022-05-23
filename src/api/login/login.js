import {AccountTypes} from "../employee/employee";

const CREDENTIAL_KEY = '/credentials';

const login = (username, password, callback) => {

    setTimeout(() => {

        localStorage.setItem('jwt', "#A105");


        localStorage.setItem('logo', "https://financialallianceforwomen.org/wp-content/uploads/2015/07/BAE-Logo-600x600-profile-picture.jpg");
        localStorage.setItem('profilePic', "https://financialallianceforwomen.org/wp-content/uploads/2015/07/BAE-Logo-600x600-profile-picture.jpg");
        localStorage.setItem('employeeName', "Alaa Al-Sabateen");
        localStorage.setItem('employeeId', "#A105");
        localStorage.setItem('instituteName', "Bank al Etihad");
        localStorage.setItem('instituteId', "#dasffesdfds43243");
        localStorage.setItem('instituteEmail', "etihad@bank.com");
        localStorage.setItem('institutePhone', "079 123 4567");
        localStorage.setItem('accountType', AccountTypes.Management);

        callback(true);
    }, 2000);

};


const fetchCredentials = async () => {

    return {
        logo: localStorage.getItem('logo'),
        profilePic: localStorage.getItem('profilePic'),
        instituteName: localStorage.getItem('instituteName'),
        employeeName: localStorage.getItem('employeeName'),
        employeeId: localStorage.getItem('employeeId'),
        instituteId: localStorage.getItem('instituteId'),
        instituteEmail: localStorage.getItem('instituteEmail'),
        institutePhone: localStorage.getItem('institutePhone'),
        accountType: localStorage.getItem('accountType')
    };

};


const checkIfLoggedIn = () => {
    return localStorage.hasOwnProperty('jwt');
};

export {login, fetchCredentials, CREDENTIAL_KEY, checkIfLoggedIn};