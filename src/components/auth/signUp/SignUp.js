import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Select, MenuItem } from "@mui/material/";
import './SignUp.css'
import { AppContext } from '../../../AppProvider';

const Signup = () => {
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contact, setContact] = useState('');
    const [confirmPasswordEror, setConfirmPasswordEror] = useState('');
    const [userRole, setuserRole] = useState('');

    const {
        services: {
            userService
        }
    } = useContext(AppContext);


    const reset = () => {
        setConfirmPasswordEror('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, contact);

        if (password != confirmPassword) {
            setConfirmPasswordEror('Password and confirm password must match.');
        }

        const data = { firstName, lastName, email, password, confirmPassword, contact };
        // post api: user details
        const resp = userService.getUser('123');
        console.log('service resp: ' + resp);

        await userService.create(data);
        console.log('user created: ', data);
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
                        autoComplete="new-password"
                        onChange={e => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField className='text-field'
                        label="Last Name"
                        required
                        size="small"
                        value={lastName}
                        autoComplete="new-password"
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
                        autoComplete="new-password"
                        onChange={e => setEmail(e.target.value)}
                    /></Grid>
                <Grid item>
                    <TextField className='text-field'
                        label="Password"
                        type="password"
                        size="small"
                        required
                        value={password}
                        onChange={e => { setPassword(e.target.value); reset() }}
                    />
                </Grid>
                <Grid item>
                    <TextField className='text-field'
                        label="Confirm Password"
                        type="confirmPassword"
                        size="small"
                        required
                        value={confirmPassword}
                        autoComplete="new-password"
                        onChange={e => { setConfirmPassword(e.target.value); reset() }}
                    />
                    <p className="error-message">{confirmPasswordEror}</p>
                </Grid>
                <Grid item>
                    <TextField className='text-field'
                        label="Contact Number"
                        type="contact"
                        size="small"
                        required
                        value={contact}
                        autoComplete="new-password"
                        onChange={e => setContact(e.target.value)}
                    />
                </Grid>
                {/* <Grid item>
                    <Select className='text-field'
                        label="Role"
                        onChange={e=> setuserRole(e.target.value)}>
                        <MenuItem value="USER">User</MenuItem>
                        <MenuItem value="ADMIN">Admin</MenuItem>
                    </Select>
                </Grid> */}
            </Grid>
            <div className='action-panel'>
                <Button size='small' variant="contained" type="submit" style={{ width: 350, borderRadius: 0 }}>Signup</Button>
            </div>
        </form>
    );
};

export default Signup;