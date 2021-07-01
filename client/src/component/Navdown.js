import React,{useContext} from 'react';
import {ProductContext} from '../context/ProductContext'

import Menuitem from './Menuitem';
import './menu.css';
import { MenuIcon } from '../util/Icons';


import {withRouter} from 'react-router-dom';
import {DiscountIcon2,HuawieIcon,AppleIcon,SumsungIcon,XaiomiIcon,HtcIcon,LgIcon} from '../util/Icons';
import './navdown.css';
var IconsColor='rgb(140,140,140)'
const Navdown = (props) => {
    const {settype,setProduct}=useContext(ProductContext);    

    const handleshow=()=>{
      const elem=document.getElementById('menuitems2');
      elem.style.right="0px";
        }
        const handlClose=()=>{
          const elem=document.getElementById('menuitems2');
          elem.style.right="-100%";
  
        }
    const  handlSearch=(childdata)=>{

    
       const elem= document.getElementsByClassName('container-sub');
 

    for(let i=0;i<elem.length;i++){
        document.getElementsByClassName('container-sub')[i].style.display='none';
    }
    setTimeout(()=>{

        for(let i=0;i<elem.length;i++){
            document.getElementsByClassName('container-sub')[i].style.display='block';
        }
    },1000)
     
}    
    return (<div className='navdown-main-con' >
      
      <div style={{margin:'10px 15px'}}>
      
   <div className="menu-main">
    <div style={{display:'flex',margin:'5px 0 0 0'}} onClick={handleshow}><div style={{margin:'0px 0 0 0'}}><MenuIcon width="33px" color="rgb(163,163,163)"/> </div></div>
    <div id='menuitems2'>
    <Menuitem  handleParentClose={handlClose} />
    </div>
    </div>
      </div>
       <div className='navdown-con nnj '>

      
         <div className='items2' onClick={()=>{
           setProduct([]);
           settype("اپل");
                 
                 props.history.push('/Product');
               }}><div  className="links2" ><AppleIcon width="20px" color={IconsColor} />
         <span className="m-2">آیفون</span>
         </div>
            
         </div>


        


         <div  className="items2"  onClick={()=>{
           setProduct([]);
           settype("هوآوی");
                 
                 props.history.push('/Product');
               }}><div to="/login" className="links2  " ><div className='insider'></div><HuawieIcon width="20px" color={IconsColor}/>
         <span className="m-2">هوآوی</span>
         </div>  </div>

         
        <div className="items"  onClick={()=>{
          
          setProduct([]);
          settype('شیائومی');
                 
                 props.history.push('/Product');
               }}><div  className="links2" ><div className='insider'></div><XaiomiIcon width="20px" color={IconsColor}/>
         <span className="m-2">شیائومی</span>
         </div>      </div>


         <div className="items2"  onClick={()=>{
           setProduct([]);
           settype('نوکیا');
                 
                 props.history.push('/Product');
               }}><div to="/login" className="links2" ><div className='insider'></div><LgIcon width="45px" color={IconsColor}/>
         <span className="m-2">نوکیا</span>
         </div>       </div> 

       



         <div  className="items2"  onClick={()=>{
           setProduct([]);
           settype('سامسونگ');
                 
                 props.history.push('/Product');
               }}><div to="/login"  className="links2"><SumsungIcon width="48px" color={IconsColor}/>
         <span className="m-2">سامسونگ</span>
         </div>     </div>
         


         <div className="items2"><div to="/login" className="links2"><DiscountIcon2 width="20px" color={IconsColor}/>
         <span className="m-2">پیشنهاد ویژه</span>
         </div></div>

          </div>
          
         
        </div>
    );
};

export default withRouter( Navdown);