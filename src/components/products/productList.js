import { Button } from "@mui/base";
import MultiActionAreaCard from "./productDisplay";
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

export default function ProductsList() {
    const [category, setCategory] = useState("ALL");

    const [select, setSelect] = useState("default");

    const handleChange = (event) => {
        setCategory(event.target.value);
        setfilteredProduct(productdetail.filter(product =>  (event.target.value==="ALL") ? true : product.category===event.target.value))
      };

      const handleChangeSelect = (event) => {
        setSelect(event.target.value);
        console.log(event.target.value==="1");
        console.log(filteredProduct.sort((a,b)=>{return a.price<b.price}));
        if(event.target.value==="1"){
            setfilteredProduct(productdetail.sort((a,b)=>{
                return a.price<b.price ? 1 : -1;
            }),console.log(productdetail));
        }
        if(event.target.value==="2"){
            setfilteredProduct(productdetail.sort((a,b)=>{
                return a.price>b.price;
            }),console.log(productdetail));
        }
      };

    const productdetail = [
        {
            id : "64690aadeb1109261e5bf831",
            name : "Shoes",
            price : 1000,
            category : "APPAREL",
            description : "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            manufacturer : "test1",
            availableItems : 100,
            imageUrl : ""
        },
        {
            id : "64690aadeb1109261e5bf832",
            name : "Shoes",
            price : 1001,
            category : "APPAREL",
            description : "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            manufacturer : "test1",
            availableItems : 100,
            imageUrl : ""
        },
        {
            id : "64690aadeb1109261e5bf833",
            name : "Shoes",
            price : 1002,
            category : "ELECTRONICS",
            description : "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            manufacturer : "test1",
            availableItems : 100,
            imageUrl : ""
        },
        {
            id : "64690aadeb1109261e5bf834",
            name : "Shoes",
            price : 1003,
            category : "ELECTRONICS",
            description : "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            manufacturer : "test1",
            availableItems : 100,
            imageUrl : ""
        },
        {
            id : "64690aadeb1109261e5bf835",
            name : "Shoes",
            price : 1004,
            category : "PERSONAL CARE",
            description : "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            manufacturer : "test1",
            availableItems : 100,
            imageUrl : ""
        },
    ]

    const [filteredProduct, setfilteredProduct] = useState(productdetail);
      
    return (
        <div>
            <div>
                <ToggleButtonGroup
                    color="primary"
                    value={category}
                    label={category}
                    onChange={handleChange}
                    exclusive
                    aria-label="Platform"
                    >
                    <ToggleButton value="ALL">ALL</ToggleButton>
                    <ToggleButton value="APPAREL">APPAREL</ToggleButton>
                    <ToggleButton value="ELECTRONICS">ELECTRONICS</ToggleButton>
                    <ToggleButton value="PERSONAL CARE">PERSONAL CARE</ToggleButton>
                </ToggleButtonGroup>
                <div>
                    <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={select}
                    label={select}
                    onChange={handleChangeSelect}
                    >
                    <MenuItem value="0">Default</MenuItem>
                    <MenuItem value="1">Price: High to low</MenuItem>
                    <MenuItem value="2">Price: Low to High</MenuItem>
                    <MenuItem value="Newest">Newest</MenuItem>
                    </Select>
                </div>
            </div>
            <br />
            <br />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {filteredProduct.map((productd) => {
                    return (
                    <Grid item xs={3}>
                        <MultiActionAreaCard product={productd}></MultiActionAreaCard>
                    </Grid>)
                })}
            </Grid>
        </div>
    )
};