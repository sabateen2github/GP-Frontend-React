import useSWR from "swr";
import {CREDENTIAL_KEY, fetchCredentials} from "../../api/login/login";
import {CircularProgress, Typography} from "@mui/material";
import {AccountTypes} from "../../api/employee/employee";
import {Navigate} from 'react-router-dom';

const HandleLoggedIn = (props) => {

    const credentials = useSWR(CREDENTIAL_KEY, fetchCredentials);

    if (credentials.isValidating) return <CircularProgress/>;
    else if (credentials.error) return <Typography variant='h2'>Error!</Typography>;

    if (credentials.data.accountType == AccountTypes.Management)
        return <Navigate to='/main' replace/>;
    else return <Typography variant='h2'>Not Implemented!</Typography>
};

export {HandleLoggedIn};