import * as React from 'react';
import { Button } from '@mui/material';
import cardimage from './Untitled.png';
import { TextField } from "@mui/material/";
import "./productDetail.css"

export default function ProductDetail(props) {
    const name = props.product.name;
    const price = props.product.price;
    const description = props.product.description;

  return (
        <div className="detail" style={{display:"flex"}}>
            <div className="image">
                <img className="image" src={cardimage}></img>
            </div>
            <div className="product-detail">
                <h1>{name} <Button size="small" color="primary" style={{"background-color": "mediumblue", "color":"white"}}>
                    Available Quantity : {props.product.availableItems}
                        </Button>
                        </h1>
                <p>Category : <b>{props.product.category}</b></p>
                <p>{description}</p>
                <h1 style={{color:"red"}}> &#8377; {price}</h1>
                <TextField 
                        label="Enter quantity"
                        required
                        size="small"
                        value={props.quantity}
                        onChange={e => props.quantityChange(e.target.value)}
                />
               <br></br>
               <br></br>
                <Button onClick={()=>props.stepperchange()} size="small" color="primary" style={{"background-color": "mediumblue", "color":"white"}}>
                    PLACE ORDER
                </Button>
            </div>
        </div>
  );
}