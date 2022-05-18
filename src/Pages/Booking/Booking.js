import { Grid, Paper, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import BookingModal from '../Appointment/BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {

    const { subject, id, space, time } = booking;

    const [openBooking, setOpenBooking] = useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} md={4}>

                <Paper elevation={3} sx={{ py: 3 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant='h5' gutterBottom component='div'>
                        {subject}
                    </Typography>

                    <Typography variant='h5' gutterBottom component='div'>
                        {time}
                    </Typography>
                    <Typography variant='h5' gutterBottom component='div'>
                        {space} space available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant='contained'>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>

            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                setBookingSuccess={setBookingSuccess}
                handleBookingClose={handleBookingClose}>

            </BookingModal>
        </>
    );
};

export default Booking;