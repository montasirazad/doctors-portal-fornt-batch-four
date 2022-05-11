import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (

        <Grid item xs={4} sm={4} md={4} mt={5} >
            <Card sx={{ minWidth: 275, boxShadow:0 }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={img}
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        alt="Paella dish"
                    />

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2">
                        {description}
                    </Typography>

                </CardContent>
                
            </Card>
        </Grid>

    );
};

export default Service;