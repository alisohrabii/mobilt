import React from 'react';
import Cartitem from './cartitem'
           function Cartlist({value}) { 
               const {cart}=value;
               return(
                   <div className="cartlist">
                <div style={{fontSize:"17px",fontWeight:"bold",textAlign:"right",margin:"12px 22px",padding:"22px 12px",borderBottom:"1px solid rgb(230,230,230)",color:"rgb(77,77,77)"}}>سبد خرید شما</div>
                       {cart.map(item=>{
                           
                           
                           return <Cartitem key={item.id} item={item} value={value}/>})}
                   </div>
               )}
            export default Cartlist;