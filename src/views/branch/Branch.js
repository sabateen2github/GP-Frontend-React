import React from 'react';
import {
    Box,
    Button,
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
import {useNavigate, useParams} from "react-router-dom";
import useSWR from 'swr'
import {branchFetcher} from "../../api/branch/branches";
import {FixedSizeList} from "react-window";
import {ArrowForwardIos} from "@mui/icons-material";
import {CREDENTIAL_KEY, fetchCredentials} from "../../api/login/login";


const renderRow = (queues) => (props) => {
    const {index, style} = props;
    const {id} = useParams();

    const history = useNavigate();
    const redirectHandler = (path) => () => {
        history(path);
    };

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton onClick={redirectHandler(`/branch/${id}/queues/${queues[index].id}`)}>
                <ListItemText primary={`${queues[index].name}`}/>
                <ListItemIcon>
                    <ArrowForwardIos/>
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}


const BranchScreen = (props) => {

    const history = useNavigate();
    const redirectHandler = (path) => () => {
        history(path);
    };

    const {id} = useParams();

    const {data, error, isValidating, mutate} = useSWR(id, branchFetcher);

    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    if (!credentialsRequest.data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;

    const Content = (props) => {
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

    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader
                branchName={data ? data.name : undefined}
                logo={credentialsRequest.data.logo}
                institute={credentialsRequest.data.instituteName}
                profilePic={credentialsRequest.data.profilePic}
                employee={credentialsRequest.data.employeeName}
                employeeId={credentialsRequest.data.employeeId}/>
            <Card>
                <CardContent>
                    <Content/>
                </CardContent>
            </Card>
            {data &&
                <Stack direction='row' alignItems='center' justifyContent='space-between' width={500}>
                    <Button variant='contained'><Typography variant='body'>Add new queue</Typography></Button>
                    <Button variant='contained' onClick={redirectHandler(`/branch/edit/${id}`)}><Typography
                        variant='body'>Edit branch</Typography></Button>
                    <Button variant='contained' color='error'><Typography variant='body'>Delete
                        branch</Typography></Button>
                </Stack>}
        </Stack>
    );
};

export {BranchScreen};