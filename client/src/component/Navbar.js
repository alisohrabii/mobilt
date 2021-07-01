import React,{useEffect,useContext,useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import './Navbar.css';
import Menuitem from './Menuitem';
import './menu.css';
import { MenuIcon } from '../util/Icons';

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

const Navbar = (props) => {
    const {userinfo}=useContext(AuthContext);
    const {cart}=useContext(ProductContext);
    const [SearchTerm, setSearchTerm] = useState('');
    const [ SearchResultData,  setSearchResultData] = useState([]);
  
   
    useEffect(()=>{
    


    },[])

    const handleshow=()=>{
        const elem=document.getElementById('menuitems');
        elem.style.right="0px";
          }
          const handlClose=()=>{
            const elem=document.getElementById('menuitems');
            elem.style.right="-100%";
    
          }
    const  handleSearch=async(childdata)=>{
        setSearchTerm(childdata);
        
   let data={
       searchTerm:childdata
   }
        const GetproductbySerch=await Axios.post("http://mobilt.herokuapp.com/product/GetproductbySearch",data);
  
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
               <div style={{marginRight:"22px"}}>
               <Link  to="/Login" style={{ textDecoration: 'none' }}>
            <div className="login-register2" >
               
                <img src={userphoto} width='30px'/>
                <span style={{color:"black",marginBottom:"0px",textDecoration:"none"}}>وارد شوید</span>
                
            </div>
            </Link>
            </div>
            )}
            <div style={{marginRight:'auto'}}>
 <Link  to="/Cart" style={{ textDecoration: 'none' }}>
            <div className="cart">
            

             {cart.length!==0?(<span className='numbercart'>{cart.length}</span>):(null)}
                <BagIcon width='30px' color="rgb(100,100,100)" />
             
              <span className="cart-span" >سبد خرید</span>
              </div>
              </Link> 
           </div>
           
        </div>
         <div className='con-mobile-search'>
         <div ><Search  handleParentSearch={handleSearch} searchshowitems={SearchResultData}/></div>  
         
   <div className="menu-main">
    <div style={{display:'flex',margin:'5px 0 0 0'}} onClick={handleshow}><div style={{margin:'0px 0 0 0'}}><MenuIcon width="33px" color="rgb(163,163,163)"/> </div></div>
    <div id='menuitems'>
    <Menuitem  handleParentClose={handlClose} />
    </div>
    </div>
             
         </div>    
        <Navdown/>
        </div>
    );
};

export default Navbar;