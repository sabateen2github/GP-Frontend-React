import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
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
import useSWR from "swr";
import {addQueueForBranches, branchesFetcher} from "../../../api/branch/branches";
import {FixedSizeList} from "react-window";
import {CREDENTIAL_KEY, fetchCredentials} from "../../../api/login/login";
import {useNavigate} from "react-router-dom";

let queueName = null;


const renderRow = (branches, handleToggle, checked, setChecked) => ({index, style, ...props}) => {

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(index) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{'aria-labelledby': `checkbox-list-label-${index}`}}
                    />
                </ListItemIcon>
                <ListItemText id={index} primary={branches[index].name}/>
            </ListItemButton>
        </ListItem>
    );
}

const GeneralQueueScreen = (props) => {

    const {data, error, isValidating, mutate} = useSWR('/branchesFetcher', branchesFetcher);
    const [checked, setChecked] = React.useState([]);

    const history = useNavigate();

    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    if (!credentialsRequest.data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;


    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const Content = (props) => {
        if (isValidating) return <Box height={350} width={600} alignContent='center'><CircularProgress/></Box>;
        else if (error) return <Typography>Error!</Typography>;
        else if (data) {
            return (
                <Stack direction='column' alignItems='center' justifyContent='space-between' spacing={4}>
                    <Typography variant='h4'>Select Branches.</Typography>
                    <FixedSizeList
                        height={300}
                        width={600}
                        itemSize={46}
                        itemCount={data.length}
                        overscanCount={5}
                    >
                        {renderRow(data, handleToggle, checked, setChecked)}
                    </FixedSizeList>
                </Stack>);
        }
    }

    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader
                logo={credentialsRequest.data.logo}
                institute={credentialsRequest.data.instituteName}
                profilePic={credentialsRequest.data.profilePic}
                employee={credentialsRequest.data.employeeName}
                employeeId={credentialsRequest.data.employeeId}
            />
            <TextField label="Queue name" sx={{width: 400}} variant="outlined"
                       onChange={(event) => queueName = event.target.value}/>
            <Card>
                <CardContent>
                    <Content/>
                </CardContent>
            </Card>
            <Button variant='contained' onClick={() => {
                addQueueForBranches(queueName, checked.map((index) => data[index].id)).then(result => {
                    if (result) history(-1);
                });
            }}>Save new Queue</Button>
        </Stack>);
};

export {GeneralQueueScreen};