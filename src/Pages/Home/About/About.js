import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Button } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} >
                    <img src={treatment} style={{ height: '400px' }} alt="" />
                </Grid>

                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        alignItems: 'center'
                    }}
                >
                    <Box>
                        <h2>Exceptional Dental care</h2>
                        <h3>for your terms</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius,
                            neque et illum labore provident minima tempore repellat est sint incidunt? Et, magni.
                            Nostrum consectetur ullam voluptatum perspiciatis! Veritatis, animi.</p>
                        <Button variant='contained' >Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default About;