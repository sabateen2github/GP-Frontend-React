import {useNavigate, useParams} from "react-router-dom";
import useSWR from "swr";
import {CREDENTIAL_KEY, fetchCredentials} from "../../../api/login/login";
import {CircularProgress, Stack} from "@mui/material";
import React from "react";
import {CommonHeader} from "../../common/Headers";

const BusinessScreen = (props) => {


    const history = useNavigate();
    const {id} = useParams();
    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    if (!credentialsRequest.data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;

    return (
        <Stack direction='column' spacing={4} alignItems='start' justifyContent='space-between'>
            <CommonHeader logo={credentialsRequest.data.logo}
                          institute={credentialsRequest.data.instituteName}
                          profilePic={credentialsRequest.data.profilePic}
                          employee={credentialsRequest.data.employeeName}
                          employeeId={credentialsRequest.data.employeeId}/>
        </Stack>
    );

};

export {BusinessScreen};