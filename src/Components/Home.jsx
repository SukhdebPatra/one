import React from "react";
import {Card} from 'reactstrap'
const Home = () => {
  return (
    <>
           <div>
           
           <h1>Home Component</h1>
           <div className="cart-wrapper">
               <div className="img-wrapper item">
<img src="https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png" alt="img" />
               </div>
               <div className="text-wrapper item">
                   <span>
                       I-Phone
                   </span>
                   <span>
                       Price: $1000.00
                   </span>
               </div>
               <div className="btn-wrapper item">
                   <button 
                >
                       Add To Cart</button>
               </div>
           </div>
       </div>
    </>
  );
};

export default Home;
