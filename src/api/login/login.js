const login = (username, password, callback) => {

    setTimeout(() => {

        localStorage.setItem('jwt', "#A105");


        localStorage.setItem('logo', "https://financialallianceforwomen.org/wp-content/uploads/2015/07/BAE-Logo-600x600-profile-picture.jpg");
        localStorage.setItem('profilePic', "https://financialallianceforwomen.org/wp-content/uploads/2015/07/BAE-Logo-600x600-profile-picture.jpg");
        localStorage.setItem('instituteName', "Bank al Etihad");
        localStorage.setItem('employeeName', "Alaa Al-Sabateen");
        localStorage.setItem('employeeId', "#A105");
        localStorage.setItem('instituteEmail', "etihad@bank.com");
        localStorage.setItem('institutePhone', "079 123 4567");

        callback(true);
    }, 2000);

};


export {login};