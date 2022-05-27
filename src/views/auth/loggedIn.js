import useSWR from "swr";
import {CREDENTIAL_KEY, fetchCredentials} from "../../api/login/login";
import {CircularProgress, Typography} from "@mui/material";
import {Navigate} from 'react-router-dom';
import {UserResponseDTO} from "auth-backend-client";

const HandleLoggedIn = (props) => {

    const credentials = useSWR(CREDENTIAL_KEY, fetchCredentials);

    if (credentials.isValidating) return <CircularProgress/>;
    else if (credentials.error) return <Typography variant='h2'>Error!</Typography>;

    if (credentials.data.accountType == UserResponseDTO.AppUserRolesEnum.MANAGEMENT)
        return <Navigate to='/main' replace/>;
    else if (credentials.data.accountType == UserResponseDTO.AppUserRolesEnum.ADMIN)
        return <Navigate to='/admin' replace/>;
    else if (credentials.data.accountType == UserResponseDTO.AppUserRolesEnum.HELP_DESK)
        return <Navigate to='/helpdesk/main' replace/>;
    else
        return <Typography variant='h3'>Not Implemented!</Typography>
};


export {HandleLoggedIn};