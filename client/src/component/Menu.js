import React,{createRef,useRef,useState} from 'react';
import Menuitem from './Menuitem';
import './menu.css';
import { MenuIcon } from '../util/Icons';

const Menu = (props) => {
  
  
const myref=useRef(null);
  const handleshow=()=>{
    const elem=document.getElementById('menuitems');
    elem.style.right="0";
      }
      const handlClose=()=>{
        const elem=document.getElementById('menuitems');
        elem.style.right="-100%";

      }

    return (
        <div>
            
   
   <div className="menu-main">
    <div style={{display:'flex',margin:'5px 0 0 0'}} onClick={handleshow}><div style={{margin:'0px 0 0 0'}}><MenuIcon width={props.iconsize} color="rgb(163,163,163)"/> </div></div>
    <div id='menuitems'>
    <Menuitem  handleParentClose={handlClose} />
    </div>
    </div>
            
        </div>
    );
};

export default Menu;

