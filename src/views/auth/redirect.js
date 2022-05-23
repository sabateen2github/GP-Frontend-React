import useSWR from "swr";
import {AccountTypes, CREDENTIAL_KEY, fetchCredentials} from "../../api/login/login";
import {CircularProgress, Typography} from "@mui/material";

const ProtectedManagement = ({children, ...props}) => {

    const credentials = useSWR(CREDENTIAL_KEY, fetchCredentials);

    if (credentials.isValidating) return <CircularProgress/>; else if (credentials.error) return <Typography
        variant='h2'>Error!</Typography>;
    
    if (credentials.data.accountType == AccountTypes.Management || credentials.data.accountType == AccountTypes.Admin) return children;
    else return <Typography variant='h2'>Not Implemented!</Typography>
};

const ProtectedAdmin = ({children, ...props}) => {
    const credentials = useSWR(CREDENTIAL_KEY, fetchCredentials);

    if (credentials.isValidating) return <CircularProgress/>;
    else if (credentials.error) return <Typography
        variant='h2'>Error!</Typography>;

    if (credentials.data.accountType == AccountTypes.Admin) return children;
    else return <Typography variant='h2'>Not
        Implemented!</Typography>
};


const ProtectedHelpDesk = ({children, ...props}) => {

    const credentials = useSWR(CREDENTIAL_KEY, fetchCredentials);

    if (credentials.isValidating) return <CircularProgress/>; else if (credentials.error) return <Typography
        variant='h2'>Error!</Typography>;

    if (credentials.data.accountType == AccountTypes.Management || credentials.data.accountType == AccountTypes.Admin || credentials.data.accountType == AccountTypes.HelpDesk) return children; else return <Typography
        variant='h2'>Not Implemented!</Typography>
};

export {ProtectedHelpDesk, ProtectedAdmin, ProtectedManagement};

