import React, {useState} from 'react';
import {Avatar, Button, CircularProgress, Stack, TextField, Typography} from "@mui/material";
import {Navigate} from "react-router-dom";
import {login} from "../../api/login/login";
import loginLogo from './images/login_logo.svg';

let username = null;
let password = null;

const onLoginClicked = (state, setState) => () => {

    setState({...state, isSigningIn: true});
    login(username, password, (bool) => {
        if (bool) {
            setState({...state, isSigningIn: false, isFailedLogin: false});
        } else {
            setState({...state, isSigningIn: false, isFailedLogin: true});
        }
    });
};


const checkIfLoggedIn = () => {
    return localStorage.hasOwnProperty('jwt');
};

const LoginScreen = (props) => {

    const [state, setState] = useState({
        isSigningIn: false, isFailedLogin: false,
    });

    if (checkIfLoggedIn()) {
        return <Navigate to='/main'/>
    } else if (state.isSigningIn) {
        return <CircularProgress/>
    }

    return (<form onSubmit={onLoginClicked(state, setState)}>
        <Stack
            paddingY={2}
            spacing={1}
            direction='column'
            justifyContent="center"
            alignItems="center">
            <Avatar
                alt="Remy Sharp"
                src={loginLogo}
                sx={{width: 200, height: 200}}
                variant="square"
            />
            <TextField label="Username" sx={{width: 400}} variant="outlined"
                       onChange={(event) => username = event.target.value}/>
            <TextField label="Password" type="password" sx={{width: 400}} variant="outlined"
                       onChange={(event) => password = event.target.value}/>

            <Button type='submit' variant="contained" color="secondary">Login</Button>

            {state.isFailedLogin && <Typography variant='h4'>Failed to login!</Typography>}
        </Stack>
    </form>);
}


export default LoginScreen;