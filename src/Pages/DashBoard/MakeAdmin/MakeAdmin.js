import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false);

    const user = { email }
    const handleAdminSubmit = (e) => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    console.log(data);
                }

            })
        e.preventDefault()
    }

    const handleBlur = e => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <h5>Make a admin</h5>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type='email'
                    onBlur={handleBlur}
                    variant='standard'
                />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made Admin Successfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;