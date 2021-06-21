import React,{useEffect,useContext,useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import './Navbar.css';
import Axios from 'axios';
import {BagIcon,NameIcon, BrandIcon} from '../util/Icons';
import SearchShow from './SearchShow';
import Search from './Search.js';
import { ProductContext } from '../context/ProductContext';
import userphoto from '../images/user2.svg';
import cartphoto from '../images/bag3.svg';
import usertickphoto from '../images/usertick2.svg';
import Listproduct from './listproduct'
import Menu from './Menu';
import {Link} from 'react-router-dom';
import Navdown from './Navdown';

const Navbar = () => {
    const {userinfo}=useContext(AuthContext);
    const {cart}=useContext(ProductContext);
    const [SearchTerm, setSearchTerm] = useState('');
    const [ SearchResultData,  setSearchResultData] = useState([]);
  
   
    useEffect(()=>{
    


    },[])
    const  handleSearch=async(childdata)=>{
        setSearchTerm(childdata);
        
   let data={
       searchTerm:childdata
   }
        const GetproductbySerch=await Axios.post("http://mobilt.herokuapp.com/product/GetproductbySearch",data);
  console.log(GetproductbySerch);
  setSearchResultData(GetproductbySerch.data.mysearchpro);
    }
    return (
        <div>
        <div className="navbar">
    
        <div className='logo'><div><NameIcon width='100px' color='rgb(53, 132, 179)'/> </div> <div> <BrandIcon width='25px' color2="rgb(53, 132, 179)" color="rgb(23,75,104)"/></div></div>
           <div className='search-cont'><Search  handleParentSearch={handleSearch} searchshowitems={SearchResultData}/></div>  
            
            
           
            {userinfo.user?(<div className="login-register" >
               
               <img src={usertickphoto} width='30px'/>
               <span> {userinfo.user.username}</span>

           </div>):(
            <div className="login-register" >
               
                <img src={userphoto} width='30px'/>
                <span>وارد شوید</span>

            </div>
            )}
            <div className="cart">
            
             {cart.length!==0?(<span className='numbercart'>{cart.length}</span>):(null)}
                <BagIcon width='30px' color="rgb(100,100,100)" />
              <Link  to="/Cart"> <span className="cart-span" >سبد خرید</span></Link> 
           </div>
           
        </div>
         <div className='con-mobile-search'>
         <div ><Search  handleParentSearch={handleSearch} searchshowitems={SearchResultData}/></div>  
          <Menu iconsize='33px'/>  
             
         </div>    
        <Navdown/>
        </div>
    );
};

export default Navbar;