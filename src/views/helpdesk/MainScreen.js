import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CircularProgress,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import {CommonHeader} from "../common/Headers";
import {useNavigate} from "react-router-dom";
import useSWR from 'swr'
import {FixedSizeList} from "react-window";
import {ArrowForwardIos} from "@mui/icons-material";
import {CREDENTIAL_KEY, fetchCredentials} from "../../api/login/login";
import {branchFetcher} from "../../api/branch/branches";


const renderRow = (queues) => (props) => {
    const {index, style} = props;

    const history = useNavigate();
    const redirectHandler = (path) => () => {
        history(path);
    };

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton onClick={redirectHandler(`/helpdesk/queue/${queues[index].id}`)}>
                <ListItemText primary={`${queues[index].name}`}/>
                <ListItemIcon>
                    <ArrowForwardIos/>
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}


const Content = ({branchId, ...props}) => {

    const {data, error, isValidating, mutate} = useSWR(branchId, branchFetcher);


    if (isValidating) return <Box height={350} width={600} alignContent='center'><CircularProgress/></Box>;
    else if (error) return <Typography>Error!</Typography>;
    else if (data) {
        return (
            <Stack direction='column' alignItems='center' justifyContent='space-between' spacing={4}>
                <Typography variant='h4'>Choose a queue.</Typography>
                <FixedSizeList
                    height={350}
                    width={600}
                    itemSize={46}
                    itemCount={data.queues.length}
                    overscanCount={5}
                    subheader={<li/>}
                >
                    {renderRow(data.queues)}
                </FixedSizeList>
            </Stack>);
    }
}

const HelpDeskMainScreen = (props) => {


    const {data, error, isValidating, mutate} = useSWR(CREDENTIAL_KEY, fetchCredentials);
    if (!data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;

    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader
                branchName={data.branchName}
                logo={data.logo}
                institute={data.instituteName}
                profilePic={data.profilePic}
                employee={data.employeeName}
                employeeId={data.employeeId}/>
            <Card>
                <CardContent>
                    <Content branchId={data.branchId}/>
                </CardContent>
            </Card>

        </Stack>
    );
};

export {HelpDeskMainScreen};