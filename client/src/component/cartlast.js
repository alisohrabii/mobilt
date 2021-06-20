
                   import React from 'react';
                   function  Cartlast({value}){
                        const {cartsubtotal, cartax, carttotal,clearCart}=value;
                           return(
                        <React.Fragment>
                        
                        
               
                        <div className="cart-last ">
                        
                        <div>
                        <span className="">Total to pay:</span>
                        <span>{carttotal}$</span>
                        </div>
                        
                        <Link to="/cartnext" >
                        <div className="cart-last-btn">
                        continue 
                        </div>
                        
                        </Link>
                        
                        
                        </div>
                        </React.Fragment>
                           )}
                        export default Cartlast;