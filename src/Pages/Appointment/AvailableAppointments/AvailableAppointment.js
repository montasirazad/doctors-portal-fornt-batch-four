import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h3>Available appointment {date.toDateString()}</h3>
        </div>
    );
};

export default AvailableAppointment;