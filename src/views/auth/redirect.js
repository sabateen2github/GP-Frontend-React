import useSWR from "swr";
import {CREDENTIAL_KEY, fetchCredentials} from "../../api/login/login";
import {CircularProgress, Typography} from "@mui/material";
import {UserResponseDTO} from "auth-backend-client";

const ProtectedManagement = ({children, ...props}) => {

    const credentials = useSWR(CREDENTIAL_KEY, fetchCredentials);

    if (credentials.isValidating) return <CircularProgress/>; else if (credentials.error) return <Typography
        variant='h2'>Error!</Typography>;

    if (credentials.data.accountType == UserResponseDTO.AppUserRolesEnum.MANAGEMENT || credentials.data.accountType == UserResponseDTO.AppUserRolesEnum.ADMIN) return children;
    else return <Typography variant='h2'>Not Implemented!</Typography>
};

const ProtectedAdmin = ({children, ...props}) => {
    const credentials = useSWR(CREDENTIAL_KEY, fetchCredentials);

    if (credentials.isValidating) return <CircularProgress/>;
    else if (credentials.error) return <Typography
        variant='h2'>Error!</Typography>;

    if (credentials.data.accountType == UserResponseDTO.AppUserRolesEnum.ADMIN) return children;
    else return <Typography variant='h2'>Not
        Implemented!</Typography>
};


const ProtectedHelpDesk = ({children, ...props}) => {

    const credentials = useSWR(CREDENTIAL_KEY, fetchCredentials);

    if (credentials.isValidating) return <CircularProgress/>; else if (credentials.error) return <Typography
        variant='h2'>Error!</Typography>;

    if (credentials.data.accountType == UserResponseDTO.AppUserRolesEnum.MANAGEMENT || credentials.data.accountType == UserResponseDTO.AppUserRolesEnum.ADMIN || credentials.data.accountType == UserResponseDTO.AppUserRolesEnum.HELP_DESK) return children;
    else return <Typography
        variant='h2'>Not Implemented!</Typography>
};

export {ProtectedHelpDesk, ProtectedAdmin, ProtectedManagement};

