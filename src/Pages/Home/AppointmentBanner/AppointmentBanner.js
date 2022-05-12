import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appointMentBg = {
    background: `url(${bg})`,
    marginTop: '200px',
    backgroundColor: 'rgba(45,58,74,.9)',
    backgroundBlendMode: 'darken, luminosity',
}

const AppointmentBanner = () => {
    return (
        <div>
            <Box style={appointMentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={doctor} style={{ height: '400px', marginTop: '-150px' }} alt="" />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign:'left',
                        alignItems:'center'
                    }}>
                        <Box >
                            <Typography variant='h6' sx={{mb:5}} style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>

                            <Typography variant='h4' sx={{my:5}} style={{ color: 'white' }}>
                                Make An Appointment Today
                            </Typography>
                            <Typography variant='h4' sx={{my:5}} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, maxime.
                            </Typography>
                            <Typography variant='h4'>
                                <Button variant='contained'>Learn More</Button>
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;