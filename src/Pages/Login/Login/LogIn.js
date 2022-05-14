import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const LogIn = () => {

    const [logInData, setLogInData] = useState({})


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData)

    }
    const handleLoginSubmit = e => {
        if (logInData.password !== logInData.password2) {
            alert('Your Password did not Match')
            return
        }
        e.preventDefault()
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 5 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>

                    <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            onChange={handleOnChange}
                            name='email'
                            type='email'
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Your Password"
                            type="password"
                            onChange={handleOnChange}
                            name='password'
                            variant="standard"
                            autoComplete="current-password"
                        />

                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant='contained'> Log IN</Button>
                        <NavLink to='/register' style={{ textDecoration: 'none' }}>
                            <Button variant="text">New User ? Please Register.</Button>
                        </NavLink>
                    </form>
                </Grid>

                <Grid item xs={4}>
                    <img src={login} style={{ width: '150%' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default LogIn;