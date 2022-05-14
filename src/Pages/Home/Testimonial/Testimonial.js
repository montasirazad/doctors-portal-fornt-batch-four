import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';




const Testimonial = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={10} sx={{ color: 'info.main' }} style={{ textAlign: 'left', marginLeft: '15px' }} >
                    <h5>Testimonial</h5>
                    <h3>What Our Patient Say</h3>
                </Grid>

                <Grid container item spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ justifyContent: 'center' }}>

                    <Card sx={{ maxWidth: 345, mx: 3, my: 3 }} >

                        <CardActionArea>

                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                <div style={{ display: 'flex' }}>
                                    <Avatar alt="" src={people1} sx={{ mx: 2, my: 2 }} />
                                    <h6>amet consectetur.</h6>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345, mx: 3, my: 3 }}  >

                        <CardActionArea>

                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>

                                <div style={{ display: 'flex' }}>
                                    <Avatar alt="" src={people2} sx={{ mx: 2, my: 2 }} />
                                    <h6>Lorem, ipsum.</h6>
                                </div>




                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345, mx: 3, my: 3 }} >

                        <CardActionArea>

                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>

                                <div style={{ display: 'flex' }}>
                                    <Avatar alt="" src={people3} sx={{ mx: 2, my: 2 }} />
                                    <h6>dolor sit.</h6>
                                </div>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>


            </Grid>
        </Box>
    );
};

export default Testimonial;