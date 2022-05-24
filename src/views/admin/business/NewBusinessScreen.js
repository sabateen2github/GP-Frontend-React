import {CommonHeader} from "../../common/Headers";
import React, {useRef, useState} from "react";
import {Avatar, Button, CircularProgress, Stack, TextField, Typography} from "@mui/material";
import {Photo} from "@mui/icons-material";
import useSWR, {mutate} from "swr";
import {CREDENTIAL_KEY, fetchCredentials} from "../../../api/login/login";
import {createBusiness} from "../../../api/admin/admin";

const NewBusinessScreen = (props) => {

    const emailRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();

    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    let [image, setImage] = useState(null);

    if (!credentialsRequest.data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;

    if (!image) image = credentialsRequest.data.logo;

    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader logo={credentialsRequest.data.logo}
                          institute={credentialsRequest.data.instituteName}
                          profilePic={credentialsRequest.data.profilePic}
                          employee={credentialsRequest.data.employeeName}
                          employeeId={credentialsRequest.data.employeeId}/>

            <Stack direction='column' spacing={2}>
                <Stack direction='column' spacing={2} alignItems='center'>
                    <Button variant='contained' component="label">
                        <Typography paddingX={2}>Upload photo</Typography>
                        <input
                            type="file"
                            hidden
                            name='profilePic'
                            accept='.png'
                            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                        />
                        <Photo/>
                    </Button>
                    <Avatar
                        alt="Remy Sharp"
                        src={image}
                        sx={{width: 150, height: 150}}
                        variant="circular"/>
                </Stack>

                <Stack direction='column' spacing={4} width={500}>
                    <TextField inputRef={nameRef} variant='outlined' label='Name'
                               defaultValue={credentialsRequest.data.instituteName}/>
                    <TextField inputRef={emailRef} variant='outlined' label='Email'
                               defaultValue={credentialsRequest.data.instituteEmail}/>
                    <TextField inputRef={phoneRef} variant='outlined' label='Phone'
                               defaultValue={credentialsRequest.data.institutePhone}/>
                </Stack>
            </Stack>

            <Stack direction='row' alignItems='end' justifyContent='space-between' spacing={4} paddingBottom={4}>
                <Button variant='contained' onClick={() => {
                    createBusiness({
                        name: nameRef.current.value,
                        email: emailRef.current.value,
                        phone: phoneRef.current.value,
                        logoUrl: image
                    }).then(r => mutate(CREDENTIAL_KEY))
                }}>Save</Button>
            </Stack>
        </Stack>);
};

export {NewBusinessScreen};