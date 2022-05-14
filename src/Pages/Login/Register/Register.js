import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Register = () => {
    const [logInData, setLogInData] = useState({})


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        console.log(newLogInData);
        setLogInData(newLogInData)

    }
    const handleLoginSubmit = e => {

        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 5 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>REGISTER</Typography>

                    <form onSubmit={handleLoginSubmit}>

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
                    </form>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Register;