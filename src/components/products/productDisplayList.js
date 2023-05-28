import ProductDisplay from "./productDisplay";
import ProductDetail from "./productDetail"
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import StepperActions from "./StepperActions"

export default function ProductsList() {

    const [category, setCategory] = useState("ALL");
    const [sort, setSort] = useState("default");
    const [quantity, setquantity] = useState();
    const [isProductDetailOpen, setProductDetailOpen] = useState(false);
    const [isStepperOpen, setStepperOpen] = useState(false);
    const [productdetailid, setProductDetailid] = useState(0);
    const [addressListIndex, setAddressListIndex] = useState(-1);

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
        setfilteredProduct(productdetail.filter(product=>(event.target.value==="ALL") ? true : product.category===event.target.value))
    };

    const handleChangeSort = (event) => {
        setSort(event.target.value);
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

    function handleChangeQuantity(id) {
        setquantity(id);
    }

    function handleChangeStepper(){
        setStepperOpen(true);
    }

    function handleAddressListIndex(id) {
        setAddressListIndex(id);
    }

    function handleChangeState(id) {
        setProductDetailid(id);
        setProductDetailOpen(true);
    }

    function handleSubmit() {
        setquantity(0);
        setAddressListIndex(-1);
        setProductDetailOpen(false);
        setStepperOpen(false);
    }


    const address = [
        {
            name: "bangalore home",
            contact: "9898989898",
            street: "mg road",
            city: "bangalore",
            state: "karnataka",
            landmark: "ghanta ghar",
            zipcode: "560049"
        },
        {
            name: "hyderabad home",
            contact: "9898989898",
            street: "mg road",
            city: "bangalore",
            state: "karnataka",
            landmark: "ghanta ghar",
            zipcode: "560049"
        }
    ]  

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
            { isProductDetailOpen === false ?
                <div>
                    <ToggleButtonGroup
                        color="primary"
                        value={category}
                        label={category}
                        onChange={handleChangeCategory}
                        exclusive
                        aria-label="Platform"
                        size="large"
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
                        value={sort}
                        label={sort}
                        onChange={handleChangeSort}
                        >
                        <MenuItem value="0">Default</MenuItem>
                        <MenuItem value="1">Price: High to low</MenuItem>
                        <MenuItem value="2">Price: Low to High</MenuItem>
                        <MenuItem value="Newest">Newest</MenuItem>
                        </Select>
                    </div>
                </div> : <></>
            }
            <br />
            { isProductDetailOpen === false ? 
                (<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {filteredProduct.map((productd) => {
                        return (
                        <Grid item xs={3}>
                            <ProductDisplay product={productd} change = {handleChangeState}></ProductDisplay>
                        </Grid>)
                    })}
                </Grid>) : 
                (isStepperOpen == false ?
                    <ProductDetail product={filteredProduct.filter((product)=>product.id===productdetailid)[0]} changeState = {handleChangeState} stepperchange = {handleChangeStepper} quantityChange={handleChangeQuantity} quantity={quantity}></ProductDetail>
                    : <StepperActions product={filteredProduct.filter((product)=>product.id===productdetailid)[0]} quantity={quantity} address={address} addressListIndex={addressListIndex} addressListIndexChange={handleAddressListIndex} submit={handleSubmit}></StepperActions>
                )          
            }
        </div>
    )
};