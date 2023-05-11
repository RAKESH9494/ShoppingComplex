import React, { useState } from 'react';
import "./Styles.css"
const Cart = (props) => {
  const handler = (e) => {
    e.preventDefault();
  
    const updatedProducts = { ...props.Products };
  
    Object.entries(props.Products).forEach(([price_all, imageUrl_all], index) => {
      Object.entries(props.items).forEach(([price_selected, imageUrl_selected], index) => {
        if (imageUrl_all === imageUrl_selected) {
          delete updatedProducts[price_all];
        }
      });
    });
  
    props.setProducts(updatedProducts); // Update the products using setCart action
    alert("Payment Successful");
    props.setItem({});
    props.setTrigger(false);
    props.setTotalPayment(0);
  };
  return(props.trigger) ?( props.TotalPayment!==0 ?
  <div className="outer">
  <h3>MY CART</h3>
  <center><button onClick={()=>props.setTrigger(false)}>close</button></center>
  <div className="inner">
    {props.items && Object.entries(props.items).map(([price, imageUrl], index) => (
      <div className="Productitem" key={index}>
        <div className="productbody">
          <center>
            <img src={imageUrl} width="260px" alt="Product" />
            <p>Price: {price}</p>
          </center>
        </div>
      </div>
    ))}
  </div><br/>
  <center><button onClick={handler}>Pay {props.TotalPayment}</button></center>
</div>
  :<div><center><h2>No Cart</h2><br/><button onClick={()=>props.setTrigger(false)}>close</button></center></div>):"";
};
export default Cart;
