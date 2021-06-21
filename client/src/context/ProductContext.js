import React, { createContext,useEffect, useState } from 'react';
import Axios from 'axios';
import {withRouter} from 'react-router-dom';

import useStateWithCallback, { useStateWithCallbackInstant, useStateWithCallbackLazy } from 'use-state-with-callback';
import SetProduct from '../component/SetProduct';
export const ProductContext = createContext();

const  ProductContextProvider = (props) => {
  
  const [product,setProduct] = useState([]);

  const [typeofpro,setTypeofpro] = useState('');

  const [cart,setCart] = useState([]);
  const [Paytotprice,setPaytotprice] = useState('');
  const [num,setNum] = useState(0);

  const [errmssage,setErrMssage] = useState('');

  const [producttype,setProducttype] = useState([]);

  const [productDetail,setProductDetail] = useState(undefined);


  const nextcart=(item)=>{
    
    console.log(item);
     
      
    const tryfetch=async()=>{
      try{ 
        const data={
    
           userinfo:item,
           cart:cart
          };
           console.log(data);
      const CartsetAction=await Axios.post("http://mobilt.herokuapp.com/users/setcart",data);
      if(CartsetAction.status==200){
        
         props.history.push('/cart2');

      }
    
    }catch(err){
    if(err.response){
      setErrMssage(err.response.data.mss);
    }else{setErrMssage('ارتباط با سرور قطع میباشد')} 
    }//endcatch
    
    
    
    }// end const tryfetch
    
    tryfetch();
       }
    
    
    
    
                 
                
            


  const addtocart=(item,color)=>{
    let A={...item};
   // var A = Object.create(item);
    
    A.colorselected=color;
    
    setCart(cart => [...cart, A]);
  
  
 
  }
  const addcount=(id,color,existnum)=>{

let tempcart=[...cart];
         const selectedproduct=tempcart.find(item=>item.id===id&&item.colorselected==color);
          const index = tempcart.indexOf(selectedproduct);
          if( selectedproduct.count<=existnum){
          selectedproduct.count=selectedproduct.count+1;
         selectedproduct.total=selectedproduct.count*selectedproduct.price;
    tempcart[index]=selectedproduct;
      setCart([...tempcart]);
          }else{
            setErrMssage("فقط همین تعداد در انبار موجود میباشد")
            setTimeout(function(){ setErrMssage("") }, 3000);
          
          }

  }
    const subcount=(id,color)=>{

      let tempcart=[...cart];
           const selectedproduct=tempcart.find(item=>item.id===id&&item.colorselected===color);
            const index = tempcart.indexOf(selectedproduct);
            if( selectedproduct.count >= 2){
            selectedproduct.count=selectedproduct.count-1;
           selectedproduct.total=selectedproduct.count*selectedproduct.price;
      tempcart[index]=selectedproduct;
        setCart([...tempcart]);
            }




    }
      const removeitem=(id)=>{
      
let tempcart=[...cart];
let newtempcart=tempcart.filter(item=>item.id!==id);
setCart([...newtempcart]);
  }
  const settype=(item,sort)=>{
    
    const tryfetch=async()=>{
    try{let  data;
     if(sort!==undefined){
           data={
            sort:sort,
            type:item}; 
         }else{
           data={
            type:item};
         }
    const GetproductbyType=await Axios.post("http://mobilt.herokuapp.com/product/GetproductbyType",data);


 

setProduct(GetproductbyType.data.mypro);

setTypeofpro(item);
}catch(err){
if(err.response){    
console.error(err.response.data.mss);
setErrMssage(err.response.data.mss);
}else{setErrMssage('ارتباط با سرور قطع میباشد')} 

}//endcatch


 
}// end const tryfetch

tryfetch();

}





const handelProductDetail=(proid)=>{
  setProductDetail(undefined);
  const tryfetch=async()=>{
    try{ const data={
         proid:proid};
    const GetproductDetail=await Axios.post("http://mobilt.herokuapp.com/product/GetproductDetail",data);
    console.log(GetproductDetail.data.product[0]);
    setProductDetail(GetproductDetail.data.product[0]);

}catch(err){
if(err.response){
setErrMssage(err.response.data.mss);
}else{setErrMssage('ارتباط با سرور قطع میباشد')} 
}//endcatch
}// end const tryfetch
tryfetch();
}


useEffect(()=>{


},[])
 




  return (
    <ProductContext.Provider value={{product,productDetail,producttype,nextcart,typeofpro,setTypeofpro,errmssage,cart,handelProductDetail, setPaytotprice,Paytotprice,addcount,subcount,removeitem,settype,addtocart,setProduct}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default withRouter(ProductContextProvider);
