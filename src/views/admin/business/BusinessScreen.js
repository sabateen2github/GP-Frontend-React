import {useNavigate, useParams} from "react-router-dom";
import useSWR, {mutate} from "swr";
import {CREDENTIAL_KEY, fetchCredentials, loginAdminAsInstitute} from "../../../api/login/login";
import {Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Stack, Typography} from "@mui/material";
import React from "react";
import {CommonHeader} from "../../common/Headers";
import {fetchInstituteDetails} from "../../../api/management/management";
import {deleteBusiness} from "../../../api/admin/admin";
import {ApiClient} from "backend-client";

const BusinessScreen = (props) => {


    const history = useNavigate();
    const {id} = useParams();
    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    const businessRequest = useSWR(id, fetchInstituteDetails);
    if (!credentialsRequest.data || !businessRequest.data) return <Stack justifyContent='center'
                                                                         alignItems='center'><CircularProgress/></Stack>;

    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader logo={`${ApiClient.instance.basePath}${businessRequest.data.logoUrl}`}
                          institute={businessRequest.data.name}
                          profilePic={credentialsRequest.data.profilePic}
                          employee={credentialsRequest.data.employeeName}
                          employeeId={credentialsRequest.data.employeeId}/>
            <Card sx={{width: 400, height: 280}}>
                <CardActionArea onClick={() => {
                    loginAdminAsInstitute(id).then(result => {
                        return mutate(CREDENTIAL_KEY);
                    }).then(() => {
                        history('/main');
                    });
                }}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            image={`${ApiClient.instance.basePath}${businessRequest.data.logoUrl}`}
                            alt="green iguana"
                        />
                        <Typography align='center' gutterBottom variant="h5" component="div">
                            Login as management
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Button variant='contained' color='error' onClick={() => {
                deleteBusiness(id).then(result => {
                    if (result) history('/admin');
                });
            }}>Delete this business</Button>
        </Stack>
    );

};

export {BusinessScreen};