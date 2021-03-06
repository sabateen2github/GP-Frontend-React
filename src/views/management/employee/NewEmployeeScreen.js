import {Avatar, Button, CircularProgress, Stack, TextField, Typography} from "@mui/material";
import {CommonHeader} from "../../common/Headers";
import React, {useRef, useState} from "react";
import {DatePicker} from "@mui/x-date-pickers";
import {Photo} from "@mui/icons-material";
import useSWR from "swr";
import {branchesFetcher} from "../../../api/branch/branches";
import {createEmployee} from "../../../api/employee/employee";
import {CREDENTIAL_KEY, fetchCredentials} from "../../../api/login/login";
import {UserResponseDTO} from "auth-backend-client";


const EmployeeLoaded = ({branches, ...props}) => {

    const fullNameRef = useRef();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const [date, setDate] = useState(new Date());
    const [branch, setBranch] = useState(branches[0]);
    const [accountType, setAccountType] = useState({name: 'Help Desk', id: UserResponseDTO.AppUserRolesEnum.HELP_DESK});

    const [image, setImage] = useState();

    const credentialsRequest = useSWR(CREDENTIAL_KEY, fetchCredentials);
    if (!credentialsRequest.data) return <Stack justifyContent='center' alignItems='center'><CircularProgress/></Stack>;


    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='space-between'>
            <CommonHeader logo={credentialsRequest.data.logo}
                          institute={credentialsRequest.data.instituteName}
                          profilePic={credentialsRequest.data.profilePic}
                          employee={credentialsRequest.data.employeeName}
                          employeeId={credentialsRequest.data.employeeId}/>
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
            <Stack direction='column' spacing={2} width={500}>
                <TextField inputRef={fullNameRef} variant='outlined' label='Full name'/>
                <TextField
                    id="outlined-select-account-type-native"
                    select
                    label="Account Type"
                    defaultValue={accountType.name}
                    onChange={(e) => setAccountType(JSON.parse(e.target.value))}
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option key={0}
                            value={JSON.stringify({name: 'Help Desk', id: UserResponseDTO.AppUserRolesEnum.HELP_DESK})}>
                        {'Help Desk'}
                    </option>
                    <option key={1}
                            value={JSON.stringify({
                                name: 'Management',
                                id: UserResponseDTO.AppUserRolesEnum.MANAGEMENT
                            })}>
                        {'Management'}
                    </option>
                </TextField>
                <DatePicker
                    label="Date of birth"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TextField inputRef={userNameRef} variant='outlined' label='Username'/>
                <TextField inputRef={passwordRef} variant='outlined' label='Password' type='password'/>
                <TextField inputRef={emailRef} variant='outlined' label='Email'/>
                <TextField inputRef={phoneRef} variant='outlined' label='Phone'/>
                <TextField
                    id="outlined-select-branch-native"
                    select
                    label="Branch"
                    defaultValue={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select the branch the employee is assigned to"
                >
                    {branches.map((option) => (
                        <option key={option.id} value={option}>
                            {option.name}
                        </option>
                    ))}
                </TextField>
            </Stack>

            <Stack direction='row' alignItems='end' justifyContent='space-between' spacing={4} paddingBottom={4}>
                <Button variant='contained' onClick={() => {
                    createEmployee({
                        fullName: fullNameRef.current.value,
                        profilePic: image,
                        dateOfBirth: date,
                        username: userNameRef.current.value,
                        password: passwordRef.current.value ? passwordRef.current.value : undefined,
                        email: emailRef.current.value,
                        phone: phoneRef.current.value,
                        branchId: branch ? branch.id : undefined,
                        accountType: accountType.id
                    }).then(r => console.log(r));
                }}>Save</Button>
            </Stack>
        </Stack>
    );

};

const NewEmployeeScreen = (props) => {
    const {data, error, isValidating, mutate} = useSWR('/branchesFetcher', branchesFetcher);
    if (!data) return <div
        style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress/>
    </div>;
    return <EmployeeLoaded branches={data}/>
};

export {NewEmployeeScreen};