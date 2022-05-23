import {
    Avatar,
    Button,
    Card,
    CardContent,
    CircularProgress,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {CommonHeader} from "../../common/Headers";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import {ArrowForwardIos} from "@mui/icons-material";
import useSWR from "swr";
import {FixedSizeList} from "react-window";
import {CREDENTIAL_KEY, fetchCredentials} from "../../../api/login/login";
import {fetchBusinesses} from "../../../api/admin/admin";


const renderRow = (businesses) => (props) => {
    const {index, style} = props;

    const history = useNavigate();
    const redirectHandler = (path) => () => {
        history(path);
    };

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton onClick={redirectHandler(`/admin/business/${businesses[index].id}`)}>
                <Avatar
                    alt="Remy Sharp"
                    src={businesses[index].logoUrl}
                    sx={{width: 64, height: 64}}
                    variant="circular"/>
                <Stack direction='column' paddingX={2} width='100%'>
                    <ListItemText primary={`${businesses[index].name}`}/>
                    <ListItemText primary={`#${businesses[index].id}`}/>
                </Stack>
                <ListItemIcon>
                    <ArrowForwardIos/>
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}


let searchTerm = "all";

const AdminScreen = (props) => {

    const history = useNavigate();

    const {data, error, isValidating, mutate} = useSWR(searchTerm, fetchBusinesses);

    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    if (!credentialsRequest.data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;

    return (
        <Stack direction='column' spacing={4} alignItems='start' justifyContent='space-between'>
            <CommonHeader logo={credentialsRequest.data.logo}
                          institute={credentialsRequest.data.instituteName}
                          profilePic={credentialsRequest.data.profilePic}
                          employee={credentialsRequest.data.employeeName}
                          employeeId={credentialsRequest.data.employeeId}/>

            <Stack direction='row' spacing={8} paddingX={8}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    mutate(searchTerm);
                }}>
                    <Stack direction='column' spacing={2}>
                        <TextField type='text' label='Name or ID' style={{width: 350}}
                                   onChange={(e) => searchTerm = e.target.value}/>
                        <Button variant='contained' type='submit'>
                            <SearchIcon/>
                            <Typography>Search</Typography>
                        </Button>
                    </Stack>
                </form>
                <Card>
                    <CardContent>
                        <Stack direction='column' alignItems='center' justifyContent='space-between' spacing={4}>
                            <Typography variant='h4'>Businesses</Typography>
                            {!data && <CircularProgress size={350}/>}
                            {data &&
                                <FixedSizeList
                                    height={350}
                                    width={600}
                                    itemSize={80}
                                    itemCount={data.length}
                                    overscanCount={5}
                                >
                                    {renderRow(data)}
                                </FixedSizeList>}
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
            <Stack direction='row' width='95%' justifyContent='center'>
                <Button variant='contained' onClick={() => {
                    history('/business/new');
                }}>Add new business</Button>
            </Stack>
        </Stack>);

};

export {AdminScreen};