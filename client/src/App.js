
import React, {useEffect,useContext, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './component/Navbar';
import ProductContextProvider from './context/ProductContext';
 import SetProduct from './component/SetProduct';
import  { AuthContext } from './context/AuthContext';
import Product from './component/Product';
import Login from './component/Login';
import Register from './component/Register';
import Axios from 'axios';
import HomePage from './component/HomePage'
import Cart2 from './component/cart2';
import ProductDetail from './component/Productdetail';
import Test from './component/test';
import Cart from './component/cart';
import Footer from './component/Footer'
import Listproduct from './component/listproduct';
 const App = () => { 
  const userData=useContext(AuthContext);

useEffect(()=>{
  console.log(`userinfotokennnn${userData.userinfo.token}`);

  
  const checklogedin=async()=>{
  let token=localStorage.getItem("hitoken");
  console.log(token);
  if (token===null){

    console.log('i am here beor 3 ');
localStorage.setItem('hitoken','');
token='';
  }else{
    console.log('i am here beor 2 ');
const restoken=await Axios.post("http://mobilt.herokuapp.com/users/tokenlogin",null,{headers:{"xtoken":`${token}`}});
console.log(restoken);
if(restoken.status==200){
userData.setUserinfo({token,user:restoken.data})
  }else{}

    
  }
}


  checklogedin();

},[])
  return (
  <div>

      <Navbar />
      <div >

        <Switch>
        
          <Route exact path="/"    component={HomePage} />
         
         
          <Route exact path="/Productdetail"    component={ProductDetail} />
         
          <Route exact path="/Login" component={Login} />
          
          <Route exact path="/Cart" component={Cart} />
          
          <Route exact path="/Test" component={Test} />
          
          <Route exact path="/Register" component={Register} />
             
          <Route exact path="/Setproduct" component={SetProduct} />
                    
          <Route exact path="/Product" component={Product} />
          
          <Route exact path="/cart2" component={Cart2} />
          
        </Switch>
      </div>
    
     <Footer />
    
  
   
  </div>

     
       
  );
}
export default App;