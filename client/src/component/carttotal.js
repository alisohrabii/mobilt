import React,{useContext,useState} from 'react';
import {pricestyle} from "../util/pricestyle";
import './cart.css';
import {withRouter} from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import Axios from 'axios';
import { AuthContext } from '../context/AuthContext';
const  Carttotal=(props)=>{
const {userinfo,setProsses}=useContext(AuthContext);
const {cart,nextcart,setPaytotprice}=useContext(ProductContext);
const [ErrorMsg, setErrorMsg] = useState('');
 const totalprice=(cart)=>{
 let pricetotal=0;
                                              
console.log(cart.length);
for(let i=0;i<cart.length;i++){
     pricetotal+=cart[i].brifinfo.price*cart[i].count;
}
return pricestyle(pricetotal)}


                    const totaldiscount=(cart)=>{
                         let discounttotal=0;
                         console.log('to aziz delami 2');                     
for(let i=0;i<cart.length;i++){
let itemdiscount=((cart[i].brifinfo.price)*(cart[i].brifinfo.discount))/100;
itemdiscount=itemdiscount*cart[i].count;
let roundeditemdiscount=Math.round(itemdiscount/100)*100;
     discounttotal+=roundeditemdiscount;

}
return pricestyle(discounttotal);

                    }

                    const totalafterprice=(cart)=>{
                         let priceaftertotal=0;
                         
for(let i=0;i<cart.length;i++){
    let beforepricetotal=cart[i].brifinfo.price*cart[i].count;
    let discountprice=((cart[i].brifinfo.price*cart[i].brifinfo.discount)/100);
    discountprice=discountprice*cart[i].count;

let itemafterprice=beforepricetotal-discountprice;

itemafterprice=(Math.round(itemafterprice/100)*100);

priceaftertotal+=itemafterprice;
}
setPaytotprice(pricestyle(priceaftertotal));
return pricestyle(priceaftertotal);

                    }
                    
                         


                    
                         


                       return(
                    <React.Fragment>
                         
                      <div className='carttotal'>

                         
                        <div >                              
                             <span s>قیمت کالاها </span>:<span>{totalprice(cart)}</span>

                        </div>
                         
                        <div >                              
                             <span>مجموع تخفیف </span><span>{totaldiscount(cart)}</span>
                        </div>
                         
                        <div >                              
                             <span> قیمت نهایی</span>:<span>{totalafterprice(cart)}</span>

                        </div>
                        <div className="carttotal-button" onClick={()=>{if(userinfo.user!==undefined){ 
nextcart(userinfo);
}else{setProsses(true);
     props.history.push('/Login');
}
                         


                    }}>ادامه فرایند خرید</div>
                        </div>
                      </React.Fragment>
                       )}
                    export default withRouter(Carttotal);