import {Avatar, Button, Stack, Typography} from "@mui/material";
import React from 'react';
import {logout} from "../../api/login/login";
import {useNavigate} from "react-router-dom";


const CommonHeader = ({branchName, queueName, ...props}) => {

    return (
        <Stack direction='row' alignItems='flex-start' justifyContent='space-between' sx={{width: 1}}>
            <InstitutionHeader
                branchName={branchName}
                queueName={queueName}
                logo={props.logo}
                institute={props.institute}
            />
            <UserHeader profilePic={props.profilePic}
                        employee={props.employee}
                        employeeId={props.employeeId}/>
        </Stack>
    );
};

const InstitutionHeader = ({branchName, queueName, ...props}) => {
    return (
        <Stack direction='row' alignItems='center' justifyContent='flex-end' spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src={props.logo}
                sx={{width: 150, height: 150}}
                variant="square"/>
            <Stack>
                <Typography variant='h5'>{props.institute}</Typography>
                {branchName && <Typography variant='h5'>{branchName}</Typography>}
                {queueName && <Typography variant='h5'>{queueName}</Typography>}
            </Stack>
        </Stack>);
};

const UserHeader = (props) => {

    const navigate = useNavigate();

    return (
        <Stack direction='row' alignItems='center' spacing={2}>

            <Stack direction='column' alignItems='flex-start' justifyContent='flex-end' sx={{width: 300}}>
                <Typography variant='h5'>{props.employee}</Typography>
                <Typography variant='h5'>{`Employee ID: ${props.employeeId}`}</Typography>
            </Stack>
            <Stack direction='column' spacing={1}>
                <Avatar
                    alt="Remy Sharp"
                    src={props.profilePic}
                    sx={{width: 150, height: 150}}
                    variant="circular"/>
                <Button variant='contained' color='error' onClick={() => {
                    logout().then((result) => navigate('/login'));
                }}>Logout</Button>
            </Stack>

        </Stack>);

};


export {CommonHeader, InstitutionHeader, UserHeader};