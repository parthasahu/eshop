import * as React from 'react';
import cardimage from './Untitled.png';
import { useState } from 'react';
import "./productDetailStepper.css"

export default function ProductDetailStepper(props) {
    const name = props.product.name;
    const price = props.product.price;
    const description = props.product.description;

    const [quantity, setquantity] = useState('');

  return (
        <div className="stepper-details">
            <div>
                <img className="stepper-image" src={cardimage}></img>
            </div>
            <div className="stepper-product-detailst">
                <h1>{name}</h1>
                <p>Quantity : {props.quantity} </p>
                <p>Category : <b>{props.product.category}</b></p>
                <p>{description}</p>
                <h1 style={{color:"red"}}> &#8377; {price}</h1>
               
            </div>
        </div>
  );
}