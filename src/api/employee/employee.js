import {ApiClient, Employee, EmployeesControllerApi} from 'backend-client';

const fetchEmployees = async (searchTerm) => {

    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new EmployeesControllerApi();
    return await apiInstance.searchEmployees(searchTerm).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};

const getEmployee = async (id) => {
    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new EmployeesControllerApi();
    return await apiInstance.getEmployee(id).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
}

const saveEmployee = async ({
                                id,
                                profilePic,
                                fullName,
                                dateOfBirth,
                                username,
                                password,
                                email,
                                phone,
                                branchId,
                                accountType
                            }) => {

    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");
    let apiInstance = new EmployeesControllerApi();

    if (profilePic) {
        async function getFileFromUrl(url, name, defaultType = 'image/jpeg') {
            const response = await fetch(url);
            const data = await response.blob();
            return new File([data], name, {
                type: data.type || defaultType,
            });
        }

        const file = await getFileFromUrl(profilePic, `${fullName}logoUrl.jpg`);
        profilePic = file;
    }

    let employee = new Employee(); // Employee |
    employee.id = id;
    employee.name = fullName;
    employee.fullName = fullName;
    employee.dateOfBirth = dateOfBirth;
    employee.username = username;
    employee.password = password;
    employee.email = email;
    employee.phone = phone;
    employee.branchId = branchId;
    employee.accountType = accountType;


    let blob = new Blob([JSON.stringify(employee)], {type: 'application/json'});
    let employeeFile = new File([blob], "employee.txt", {type: "application/json"});

    return apiInstance.editEmployee(employeeFile, profilePic).then(() => {
        return true;
    }, (error) => {
        console.error(error);
        return false;
    });
};


const createEmployee = async ({
                                  profilePic,
                                  fullName,
                                  dateOfBirth,
                                  username,
                                  password,
                                  email,
                                  phone,
                                  branchId,
                                  accountType
                              }) => {

    ApiClient.instance.authentications['bearerAuth'].accessToken = localStorage.getItem("jwt");

    let apiInstance = new EmployeesControllerApi();

    if (profilePic) {
        async function getFileFromUrl(url, name, defaultType = 'image/jpeg') {
            const response = await fetch(url);
            const data = await response.blob();
            return new File([data], name, {
                type: data.type || defaultType,
            });
        }

        const file = await getFileFromUrl(profilePic, `${fullName}logoUrl.jpg`);
        profilePic = file;
    }

    let employee = new Employee(); // Employee |
    employee.name = fullName;
    employee.fullName = fullName;
    employee.dateOfBirth = dateOfBirth;
    employee.username = username;
    employee.password = password;
    employee.email = email;
    employee.phone = phone;
    employee.branchId = branchId;
    employee.accountType = accountType;


    let blob = new Blob([JSON.stringify(employee)], {type: 'application/json'});
    let employeeFile = new File([blob], "employee.txt", {type: "application/json"});

    return apiInstance.createEmployee(employeeFile, profilePic).then(() => {
        return true;
    }, (error) => {
        console.error(error);
        return false;
    });

};


export {fetchEmployees, getEmployee, saveEmployee, createEmployee};
