import React from 'react';
import {CircularProgress, Stack} from "@mui/material";
import {CommonHeader} from "../../common/Headers";
import {CardButton} from "../../common/CardButton";
import edit_business from './images/edit_business.svg';
import employees from './images/employees.svg';
import jupyter from './images/jupyter.svg';
import queues_branches from './images/queues_branches.svg';
import {useNavigate} from "react-router-dom";
import useSWR from "swr";
import {CREDENTIAL_KEY, fetchCredentials} from "../../../api/login/login";


const MainScreen = (props) => {

    const history = useNavigate();

    const redirectHandler = (path) => () => {
        history(path);
    };


    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    if (!credentialsRequest.data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;


    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader logo={credentialsRequest.data.logo}
                          institute={credentialsRequest.data.instituteName}
                          profilePic={credentialsRequest.data.profilePic}
                          employee={credentialsRequest.data.employeeName}
                          employeeId={credentialsRequest.data.employeeId}/>
            <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={1}>
                <CardButton onClick={redirectHandler('/branches')} image={queues_branches} text='Queues and Branches'/>
                <CardButton onClick={redirectHandler('/employees')} image={employees} text='Employees'/>
                <CardButton onClick={redirectHandler('/jupyter')} image={jupyter} text='Notebooks'/>
                <CardButton onClick={redirectHandler('/edit')} image={edit_business} text='Edit Business'/>
            </Stack>
        </Stack>);
};

export {MainScreen};


