import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png'
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    // border: '1px solid red'

}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>


                <Grid  style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={5}>
                    <Box>
                        <Typography variant='h4'>
                            Your new smile
                        </Typography>

                        <Typography variant='h6' sx={{ my:5,fontSize: 13, fontWeight: '300', color: 'gray' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsa ipsam eius deleniti recusandae at tempore consequuntur
                            sapiente voluptatum ullam labore?
                        </Typography>
                        <Button variant='contained' >Get Appointment</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{ width: '300px' }} src={chair} alt="" srcSet="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;