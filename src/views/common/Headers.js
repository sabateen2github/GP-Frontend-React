import {Avatar, Stack, Typography} from "@mui/material";
import React from 'react';


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
    console.log(branchName);
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
    return (
        <Stack direction='row' alignItems='center' spacing={2}>

            <Stack direction='column' alignItems='flex-start' justifyContent='flex-end' sx={{width: 300}}>
                <Typography variant='h5'>{props.employee}</Typography>
                <Typography variant='h5'>{`Employee ID: ${props.employeeId}`}</Typography>
            </Stack>
            <Avatar
                alt="Remy Sharp"
                src={props.profilePic}
                sx={{width: 150, height: 150}}
                variant="square"/>

        </Stack>);

};


export {CommonHeader, InstitutionHeader, UserHeader};