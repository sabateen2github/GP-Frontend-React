import {CommonHeader} from "../common/Headers";
import React, {useRef, useState} from "react";
import {Avatar, Button, Stack, TextField, Typography} from "@mui/material";
import {Photo} from "@mui/icons-material";
import {saveInstituteDetails} from "../../api/management/management";

const EditBusinessScreen = (props) => {

    const emailRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();

    const [image, setImage] = useState(localStorage.getItem('logo'));

    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader logo={localStorage.getItem('logo')}
                          institute={localStorage.getItem('instituteName')}
                          profilePic={localStorage.getItem('profilePic')}
                          employee={localStorage.getItem('employeeName')}
                          employeeId={localStorage.getItem('employeeId')}/>

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
                               defaultValue={localStorage.getItem('instituteName')}/>
                    <TextField inputRef={emailRef} variant='outlined' label='Email'
                               defaultValue={localStorage.getItem('instituteEmail')}/>
                    <TextField inputRef={phoneRef} variant='outlined' label='Phone'
                               defaultValue={localStorage.getItem('institutePhone')}/>
                </Stack>
            </Stack>

            <Stack direction='row' alignItems='end' justifyContent='space-between' spacing={4} paddingBottom={4}>
                <Button variant='contained' onClick={() => {
                    saveInstituteDetails({
                        name: nameRef.current.value,
                        email: emailRef.current.value,
                        phone: phoneRef.current.value,
                        logoUrl: image
                    });
                }}>Save</Button>
            </Stack>
        </Stack>);
};

export {EditBusinessScreen};