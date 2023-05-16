import React, { useState } from 'react';
import { TextField, Button, Grid } from "@mui/material/";
import './SignUp.css'

const Signup = () => {
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);

        // post api: user details

        // redirect to login
    };

    return (
        <form className='form-wrapper' onSubmit={handleSubmit}>
            <Grid container rowSpacing={1} alignItems="center" justify="center" direction="column">
                <Grid item marginTop={1}>
                    <TextField className='text-field'
                        label="First Name"
                        required
                        size="small"                        
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField className='text-field'
                        label="Last Name"
                        required
                        size="small"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField className='text-field'
                        label="Email Address"
                        type="email"
                        size="small"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    /></Grid>
                <Grid item>
                    <TextField className='text-field'
                        label="Password"
                        type="password"
                        size="small"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField className='text-field'
                        label="Confirm Password"
                        type="confirmPassword"
                        size="small"
                        required
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField className='text-field'
                        label="Contact Number"
                        type="contact"
                        size="small"
                        required
                        value={contact}
                        onChange={e => setContact(e.target.value)}
                    />
                </Grid>
            </Grid>
            <div className='action-panel'>
                <Button size='small' variant="contained" type="submit" style={{width:350, borderRadius:0}}>Signup</Button>
            </div>
        </form>
    );
};

export default Signup;