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
import {useNavigate} from "react-router-dom";
import useSWR from 'swr'
import {branchesFetcher} from "../../api/branch/branches";
import {FixedSizeList} from "react-window";
import {ArrowForwardIos} from "@mui/icons-material";
import {CREDENTIAL_KEY, fetchCredentials} from "../../api/login/login";


const renderRow = (branches) => (props) => {
    const {index, style} = props;

    const history = useNavigate();
    const redirectHandler = (path) => () => {
        history(path);
    };

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton onClick={redirectHandler(`/branch/${branches[index].id}`)}>
                <ListItemText primary={`${branches[index].name}`}/>
                <ListItemIcon>
                    <ArrowForwardIos/>
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}


const BranchesScreen = (props) => {

    const history = useNavigate();
    const redirectHandler = (path) => () => {
        history(path);
    };

    const {data, error, isValidating, mutate} = useSWR('/branchesFetcher', branchesFetcher);


    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    if (!credentialsRequest.data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;


    const Content = (props) => {
        if (isValidating) return <Box height={350} width={600} alignContent='center'><CircularProgress/></Box>;
        else if (error) return <Typography>Error!</Typography>;
        else if (data) {
            return (
                <Stack direction='column' alignItems='center' justifyContent='space-between' spacing={4}>
                    <Typography variant='h4'>Choose a branch.</Typography>
                    <FixedSizeList
                        height={350}
                        width={600}
                        itemSize={46}
                        itemCount={data.length}
                        overscanCount={5}
                        subheader={<li/>}
                    >
                        {renderRow(data)}
                    </FixedSizeList>
                </Stack>);
        }
    }

    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader logo={credentialsRequest.data.logo}
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
                    <Button variant='contained' onClick={redirectHandler('/branch/new')}><Typography variant='body'>Add
                        new branch</Typography></Button>
                    <Button variant='contained'><Typography variant='body' onClick={redirectHandler('/queue/new')}>Add
                        new queue</Typography></Button>
                </Stack>}
        </Stack>
    );
};

export {BranchesScreen};