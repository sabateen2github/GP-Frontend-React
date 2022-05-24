const CREDENTIAL_KEY = '/credentials';

const AccountTypes = {
    HelpDesk: 0, Management: 1, Admin: 2
};

const login = (username, password, callback) => {

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
        if (username == 'alaa2sbateen') accountType = AccountTypes.Management;
        else if (username == 'alaa3sbateen') accountType = AccountTypes.HelpDesk;
        else accountType = AccountTypes.Admin;

        localStorage.setItem('accountType', accountType);
        if (accountType == AccountTypes.HelpDesk) {
            localStorage.setItem('branchId', '#ads3reef');
            localStorage.setItem('branchName', 'Bank al Etihad');
        }

        callback(true);
    }, 2000);

};


const fetchCredentials = async () => {

    const accountType = localStorage.getItem('accountType');

    let helpDeskMetaData = {};
    if (accountType == AccountTypes.HelpDesk) {
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

export {login, fetchCredentials, CREDENTIAL_KEY, checkIfLoggedIn, logout, loginAdminAsInstitute};
export {AccountTypes};