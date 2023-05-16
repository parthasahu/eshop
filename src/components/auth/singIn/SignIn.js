import React, { useState } from 'react';
import { TextField, Button, Grid } from "@mui/material/";
import './SignIn.css'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password);

        // redirect to product page
    };

    return (
        <form className='form-wrapper' onSubmit={handleLogin}>
            <Grid container rowSpacing={1} alignItems="center" justify="center" direction="column">                
                <Grid item>
                    <TextField
                        label="Email Address"
                        type="email"
                        size="small"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    /></Grid>
                <Grid item>
                    <TextField
                        label="Password"
                        type="password"
                        size="small"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Grid>                
            </Grid>
            <div className='action-panel'>
                <Button size='small' variant="contained" type="submit" style={{width:150, borderRadius:0}}>Login</Button>
            </div>
        </form>
    );
};

export default Signin;