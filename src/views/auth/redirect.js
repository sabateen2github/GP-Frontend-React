import {Navigate,} from 'react-router-dom';
import useSWR from "swr";
import {CREDENTIAL_KEY, fetchCredentials} from "../../api/login/login";
import {CircularProgress, Typography} from "@mui/material";
import {AccountTypes} from "../../api/employee/employee";

const ProtectedManagement = ({children, ...props}) => {

    const credentials = useSWR(CREDENTIAL_KEY, fetchCredentials);

    if (credentials.isValidating) return <CircularProgress/>;
    else if (credentials.error) return <Typography variant='h2'>Error!</Typography>;

    if (credentials.data.accountType == AccountTypes.Management)
        return children;
    else return <Typography variant='h2'>Not Implemented!</Typography>
};

const ProtectedAdmin = ({children, ...props}) => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) return <Navigate to="/" replace/>;
    return children;
};


const ProtectedHelpDesk = ({children, ...props}) => {

    const jwt = localStorage.getItem('jwt');
    if (!jwt) return <Navigate to="/" replace/>;

    return children;
};

export {ProtectedHelpDesk, ProtectedAdmin, ProtectedManagement};

