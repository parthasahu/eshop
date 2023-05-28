import React, { useState } from 'react';
import { TextField, Button, Grid } from "@mui/material/";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AddAddress = (props) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [landmark, setLandmark] = useState('');
    const [zipcode, setZipcode] = useState('');

    var addressList = props.address;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, contact, street);
    };

    const [selectValue, setSelectValue] = useState();

    const selectChange = (event) => {
        setSelectValue(event.target.value);
        props.addressListIndexChange(event.target.value);
      };

    return (
        <>
        <>
            <h1>Select Address :</h1>
            <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectValue}
                    label={selectValue}
                    onChange={selectChange}
                    >
                {addressList.map((address, index) => {
                        index=index+1;
                        return (
                            <MenuItem value={index-1}>{address.name + " --> "+address.street+", "+address.city}</MenuItem>
                        )
                })}
            </Select>
        </>
        <h1>OR</h1>
        <h1>Add Address</h1>
        <form className='form-wrapper' onSubmit={handleSubmit}>
            
            <Grid container rowSpacing={1} alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField 
                        label="Name"
                        required
                        size="small"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Contact Number"
                        size="small"
                        required
                        value={contact}
                        onChange={e => setContact(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Street"
                        size="small"
                        required
                        value={street}
                        onChange={e => setStreet(e.target.value)}
                    /></Grid>
                <Grid item>
                    <TextField
                        label="City"
                        size="small"
                        required
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="State"
                        size="small"
                        required
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Landmark"
                        size="small"
                        value={landmark}
                        onChange={e => setLandmark(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Zipcode"
                        size="small"
                        required
                        value={zipcode}
                        onChange={e => setZipcode(e.target.value)}
                    />
                </Grid>
            </Grid>
            <div className='action-panel'>
                <Button size='small' variant="contained" type="submit" style={{width:150, borderRadius:0}}>Add Address</Button>
            </div>
        </form>
        </>
    );
};

export default AddAddress;