import BackendClient from 'backend-client';

const fetchEmployees = async (searchTerm) => {

    let apiInstance = new BackendClient.EmployeesControllerApi();
    return await apiInstance.searchEmployees(searchTerm).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
};

const getEmployee = async (id) => {
    let apiInstance = new BackendClient.EmployeesControllerApi();
    return await apiInstance.getEmployee(id).then((data) => {
        return data;
    }, (error) => {
        console.error(error);
    });
}

const saveEmployee = async ({id, profilePic, fullName, dateOfBirth, username, password, email, phone, branchId}) => {

    let apiInstance = new BackendClient.EmployeesControllerApi();
    let employee = new BackendClient.Employee(); // Employee |
    employee.name = fullName;
    employee.fullName = fullName;
    employee.id = id;
    employee.profilePic = profilePic;
    employee.dateOfBirth = dateOfBirth;
    employee.username = username;
    employee.password = password;
    employee.email = email;
    employee.phone = phone;
    employee.branchId = branchId;

    return await apiInstance.editEmployee(id, employee).then(() => {
        return true;
    }, (error) => {
        console.error(error);
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

    let apiInstance = new BackendClient.EmployeesControllerApi();

    let employee = new BackendClient.Employee(); // Employee |
    employee.name = fullName;
    employee.fullName = fullName;
    employee.accountType = accountType;
    employee.profilePic = profilePic;
    employee.dateOfBirth = dateOfBirth;
    employee.username = username;
    employee.password = password;
    employee.email = email;
    employee.phone = phone;
    employee.branchId = branchId;

    let opts = {
        'employee': employee // Employee |
    };
    apiInstance.createEmployee(opts).then(() => {
        console.log('API called successfully.');
    }, (error) => {
        console.error(error);
    });
    return true;
};


export {fetchEmployees, getEmployee, saveEmployee, createEmployee};
