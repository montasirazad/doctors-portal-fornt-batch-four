import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Apponitments/Appointments';

const DashBoardHome = () => {
    const [date, setDate] = useState(new Date());

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Appointments date={date} />
            </Grid>

        </Grid>
    );
};

export default DashBoardHome;