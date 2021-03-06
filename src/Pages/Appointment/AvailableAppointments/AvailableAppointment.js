import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../../Booking/Booking';

const bookings = [
    {
        id: '1',
        subject: 'Root canals',
        time: '8:00 AM - 9:00 AM',
        space: 10
    }, {
        id: '2',
        subject: 'Cosmetic Dentistry',
        time: '10:05 AM - 11:30 AM',
        space: 10
    }, {
        id: '3',
        subject: 'Teeth Cleaning',
        time: '5:00 PM - 6:30 PM',
        space: 10
    }, {
        id: '4',
        subject: 'Cavity Protection',
        time: '7:00 AM - 8:30AM',
        space: 10
    }, {
        id: '5',
        subject: 'Teeth Orthodontics',
        time: '9:00 AM - 9:30',
        space: 10
    }, {
        id: '6',
        subject: 'Implants',
        time: '10:00 AM - 12:00 AM',
        space: 10
    }
]
const AvailableAppointment = ({ date }) => {

    const [bookingSuccess, setBookingSuccess] = useState(false)

    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', mb: 3 }}>Available appointment {date.toDateString()}</Typography>
            {
                            bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>
                        }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}>

                    </Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointment;