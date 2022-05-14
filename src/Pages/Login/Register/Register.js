import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [logInData, setLogInData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData)
        console.log(logInData);

    }
    const handleLoginSubmit = e => {
        if (logInData.password !== logInData.password2) {
            alert('Password did not match')
            return
        }
        registerUser(logInData.email, logInData.password)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 5 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>REGISTER</Typography>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            onChange={handleOnChange}
                            name='email'
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="Your Password"
                            type="password"
                            onChange={handleOnChange}
                            name='password'
                            variant="standard"
                            autoComplete="current-password"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="Retype Your Password"
                            type="password"
                            onChange={handleOnChange}
                            name='password2'
                            variant="standard"
                            autoComplete="current-password"
                        />
                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant='contained'> Register</Button>
                        <NavLink to='/login' style={{ textDecoration: 'none' }}>
                            <Button variant="text">Already registered ? Please Log in</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Created Successfully</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>


            </Grid>
        </Container>
    );
};

export default Register;