import {Avatar, Button, CircularProgress, Stack, TextField, Typography} from "@mui/material";
import {CommonHeader} from "../../common/Headers";
import React, {useRef, useState} from "react";
import {DatePicker} from "@mui/x-date-pickers";
import {Photo} from "@mui/icons-material";
import useSWR from "swr";
import {branchesFetcher} from "../../../api/branch/branches";
import {useParams} from "react-router-dom";
import {getEmployee, saveEmployee} from "../../../api/employee/employee";
import {CREDENTIAL_KEY, fetchCredentials} from "../../../api/login/login";
import {ApiClient} from "backend-client";


const EmployeeLoaded = ({id, employeeDetails, branches, ...props}) => {


    const fullNameRef = useRef();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();


    const [date, setDate] = useState(employeeDetails.dateOfBirth);
    const [branch, setBranch] = useState(employeeDetails.branchId ? branches.filter(b => b.id === employeeDetails.branchId).at(0).name : undefined);
    const [image, setImage] = useState(employeeDetails.profilePic);

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
                    src={`${ApiClient.instance.basePath}${image}`}
                    sx={{width: 150, height: 150}}
                    variant="circular"/>
            </Stack>
            <Stack direction='column' spacing={2} width={500}>
                <TextField inputRef={fullNameRef} variant='outlined' label='Full name'
                           defaultValue={employeeDetails.fullName}/>
                <DatePicker
                    label="Date of birth"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TextField inputRef={userNameRef} variant='outlined' label='Username'
                           defaultValue={employeeDetails.username}/>
                <TextField inputRef={passwordRef} variant='outlined' label='Password' type='password'
                           helperText="Leave the password field empty if you don't want to update the password."/>
                <TextField inputRef={emailRef} variant='outlined' label='Email'
                           defaultValue={employeeDetails.email}/>
                <TextField inputRef={phoneRef} variant='outlined' label='Phone'
                           defaultValue={employeeDetails.phone}/>
                <TextField
                    id="outlined-select-currency-native"
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
                    saveEmployee({
                        fullName: fullNameRef.current.value,
                        id: id,
                        profilePic: image,
                        dateOfBirth: date,
                        username: userNameRef.current.value,
                        password: passwordRef.current.value ? passwordRef.current.value : undefined,
                        email: emailRef.current.value,
                        phone: phoneRef.current.value,
                        branchId: branch ? branch.id : undefined,
                        accountType: employeeDetails.accountType
                    });
                }}>Save</Button>
                <Button variant='contained' color='error'>Delete this Employee</Button>
            </Stack>
        </Stack>
    );

};

const EditEmployeeScreen = (props) => {

    const {id} = useParams();

    const employeeDetailsRequest = useSWR(id, getEmployee);
    const {data, error, isValidating, mutate} = useSWR('/branchesFetcher', branchesFetcher);

    if (!data || !employeeDetailsRequest.data) return <div
        style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress/>
    </div>;
    return <EmployeeLoaded id={id} employeeDetails={employeeDetailsRequest.data} branches={data}/>

};

export {EditEmployeeScreen};