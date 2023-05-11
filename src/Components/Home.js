import React, { useState} from 'react';
import './Styles.css';
import Cart from './Cart';
const Home = () => {
  const [items,setItems] = useState({});
  const [total,setTotal] = useState(0);
  const [pop,setPop] = useState(false);
  const [product,setProduct] = useState({
    900: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    400: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg",
    300: "https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659__340.jpg",
    600: "https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg",
    100: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729514__340.jpg",
    1000: "https://cdn.pixabay.com/photo/2016/07/11/21/23/water-lily-1510707__340.jpg"
  });
  const handleBuyClick = (price,imageUrl) => {
      setItems((prevCart) => ({
        ...prevCart,
      [price]: imageUrl,
    }));
    setTotal(parseInt(total)+parseInt(price));
  }
  return (
    <div>
      <div className="header">
        <a href="#deftault" className="logo">Shopping Complex</a>
        <div className="header-right">
          <a onClick={()=>setPop(true)}>Cart</a>
        </div>
      </div>
      <Cart trigger={pop} setTrigger={setPop} cartItems={items} Products = {product} items ={items} setProducts={setProduct} setItem={setItems} TotalPayment ={total} setTotalPayment={setTotal}>

      </Cart>
      {pop === false ?
      <div className="outer">
        <h3>LIVE PRODUCTS</h3>
        <div className="inner">
          {Object.entries(product).map(([price, imageUrl], index) => (
            <div className="Productitem" key={index}>
              <div className="productbody">
                <center>
                  <img src={imageUrl} width="260px" alt="Product" />
                  <p>Price: {price}</p>
                  <button onClick={() => {handleBuyClick(price,imageUrl);alert("Added to Cart")}}>BUY</button>
                </center>
              </div>
            </div>
          ))}
        </div>
      </div> : ""}
    </div>
  );
};
export default (Home);

