import { Grid } from '@mui/material';
import React from 'react';

const Booking = (props) => {
    const {name,id,space} = props.booking;
    return (
        <Grid item xs={12} md={4}>
            <h5>This is booking</h5>
        </Grid>
    );
};

export default Booking;