import React from 'react';
import {Stack} from "@mui/material";
import {CommonHeader} from "../common/Headers";
import {CardButton} from "../common/CardButton";
import edit_business from './images/edit_business.svg';
import employees from './images/employees.svg';
import jupyter from './images/jupyter.svg';
import queues_branches from './images/queues_branches.svg';
import {useNavigate} from "react-router-dom";


const MainScreen = (props) => {

    const history = useNavigate();

    const redirectHandler = (path) => () => {
        history(path);
    };

    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader logo={localStorage.getItem('logo')}
                          institute={localStorage.getItem('instituteName')}
                          profilePic={localStorage.getItem('profilePic')}
                          employee={localStorage.getItem('employeeName')}
                          employeeId={localStorage.getItem('employeeId')}/>
            <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={1}>
                <CardButton onClick={redirectHandler('/branches')} image={queues_branches} text='Queues and Branches'/>
                <CardButton onClick={redirectHandler('/employees')} image={employees} text='Employees'/>
                <CardButton onClick={redirectHandler('/jupyter')} image={jupyter} text='Notebooks'/>
                <CardButton onClick={redirectHandler('/edit')} image={edit_business} text='Edit Business'/>
            </Stack>
        </Stack>);
};

export {MainScreen};


