import * as React from 'react';
import "./orderConfirm.css";

export default function OrderConfirm(props) {
    const name = props.product.name;
    const price = props.product.price;
    const description = props.product.description;


  return (
        <div className="confirmorder-box">
            <div className="confirmorder-detail">
                <h1>{name}</h1>
                <p>Quantity : {props.quantity} </p>
                <p>Category : <b>{props.product.category}</b></p>
                <p>{description}</p>
                <h3 style={{color:"red"}}>Total Price : &#8377; {price}</h3>
            </div>
            <div  className="confirmorder-detail" >
                <h1>Address Details :</h1>
                <p>{props.address.name}</p>
                <p>Contact Number : {props.address.contact}</p>
                <p>{props.address.street + ", "+props.address.city}</p>
                <p>{props.address.state}</p>
                <p>{props.address.zipcode}</p>
            </div>
        </div>
  );
}