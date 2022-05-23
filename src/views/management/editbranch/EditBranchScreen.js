import {Button, CircularProgress, Snackbar, Stack, TextField, Typography} from "@mui/material";
import {CommonHeader} from "../../common/Headers";
import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useSWR from "swr";
import {branchFetcher, createBranch, updateBranch} from "../../../api/branch/branches";
import RoomIcon from "@mui/icons-material/Room";
import {Map, Marker} from "../../common/Map";
import {CREDENTIAL_KEY, fetchCredentials} from "../../../api/login/login";


const BranchDetails = ({data, id, successCallback, ...props}) => {

    const [saving, setSaving] = useState(false);
    const [{snackBarOpened, success}, setSnackBar] = useState({snackBarOpened: false, success: false});

    const [updating, setUpdating] = useState(false);

    let location = {lat: 0, lng: 0};
    if (data) {
        location = data.location
    }

    let [markerLocation, setMarkerLocation] = useState(location);
    if (data && !updating) {
        markerLocation = location;
    }

    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    if (!credentialsRequest.data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;


    return (<Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader
                branchName={data ? data.name : undefined}
                logo={credentialsRequest.data.logo}
                institute={credentialsRequest.data.instituteName}
                profilePic={credentialsRequest.data.profilePic}
                employee={credentialsRequest.data.employeeName}
                employeeId={credentialsRequest.data.employeeId}/>

            {saving && <CircularProgress/>}
            {(!saving && data) &&
                <Stack
                    paddingY={2}
                    spacing={2}
                    direction='column'
                    justifyContent="center"
                    alignItems="center">

                    <Button variant='contained' color={updating ? 'secondary' : 'primary'}
                            onClick={() => {
                                if (!updating) setMarkerLocation(location);
                                setUpdating(!updating);
                            }}>
                        <Typography>{updating ? 'Cancel' : 'Update Location'}</Typography>
                        <RoomIcon sx={{padding: 0.5}}/>
                    </Button>
                    <Map
                        center={location}
                        onCenterChange={(center) => {
                            if (updating) setMarkerLocation(center);
                        }}

                        onIdle={() => {
                            console.log("Called")
                        }}
                        zoom={15}
                        style={{width: '300%', height: 300}}
                    >
                        <Marker key={'hello'} position={markerLocation}/>
                    </Map>

                    <TextField label="Name" sx={{width: 400}} variant="outlined" defaultValue={data.name}
                               onChange={(event) => data.name = event.target.value}/>
                    <TextField label="Phone" sx={{width: 400}} variant="outlined" defaultValue={data.phone}
                               onChange={(event) => data.phone = event.target.value}/>
                    <Button variant="contained" onClick={() => {
                        setSaving(true);

                        const submitData = {
                            id: id,
                            location: markerLocation,
                            name: data.name,
                            phone: data.phone
                        };
                        if (id) {
                            updateBranch(submitData).then(success => {
                                if (success) successCallback({...data, ...submitData});
                                setSaving(false);
                                setUpdating(false);
                                setSnackBar({success: success, snackBarOpened: true});

                            });
                        } else {
                            createBranch(submitData).then(success => {
                                if (success) successCallback({...data, ...submitData});
                                setSaving(false);
                                setUpdating(false);
                                setSnackBar({success: success, snackBarOpened: true});

                            });
                        }

                    }}>Save</Button>

                </Stack>}

            <Snackbar
                open={snackBarOpened}
                autoHideDuration={6000}
                onClose={(event, reason) => {
                    setSnackBar({success: success, snackBarOpened: false});
                }}
                message={success ? "Details saved!" : "Error while saving!"}
            />
        </Stack>

    );

};


const ExistingBranchScreen = ({id, ...props}) => {
    const {data, error, isValidating, mutate} = useSWR(id, branchFetcher);
    return <BranchDetails data={data} id={id} successCallback={(newDetails) => mutate(newDetails)}/>
};

const NewBranchScreen = (props) => {

    const history = useNavigate();

    return <BranchDetails data={{
        location: {
            lat: 31.955419516647584,
            lng: 35.9069478426797
        },
        name: '',
        phone: ''
    }} successCallback={(newDetails) => {
        history(`/branch/${newDetails.id}`);
        history(0);
    }
    }/>
};


const EditBranchScreen = (props) => {
    const {id} = useParams();
    if (id) return <ExistingBranchScreen id={id}/>
    else return <NewBranchScreen/>
};


export {EditBranchScreen};