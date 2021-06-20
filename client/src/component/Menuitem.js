
    import React from 'react';
   import {Link} from 'react-router-dom';
    import './menu.css';
    import {ProductContext} from '../context/ProductContext'

import {withRouter} from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import {CloseIcon,NameIcon,BrandIcon, EnterIcon,BellIcon,HeadsetIcon,DiscountIcon2, AppleIcon,HuawieIcon,LgIcon,XaiomiIcon,SumsungIcon, BagIcon, ClockIcon } from '../util/Icons';
  
class Menuitem extends React.Component {
        constructor (props){
        super (props);
           this.myref2= React.createRef();
              this.myref3= React.createRef();
         
        this.state={submenushow:false}}
    
        handleclick=(item)=>{
             const elem=document.getElementsByClassName(item);
          //console.log(imgphoto);
         if( elem[0].style.display=='none'){elem[0].style.display='block';
         //imgphoto[0].src=minusphoto;

        }else{
         // imgphoto[0].src=plusephoto;
          elem[0].style.display='none';
        };
        }
     
        
        closemenu=()=>{
          
 this.props.handleParentClose('any data');
 
           }
        
 static contextType = ProductContext;
 
        render() {
           
  const settype = this.context.settype;
    
          var iconscolor='rgb(12,122,200)';
        const submenu=this.state.submenushow;
        return (
        <div ref={this.myref2} >
        <div onClick={this.closemenu}><CloseIcon width='22px' color="rgb(84,84,84)"/></div>
          <div   style={{display:'inline-flex',margin:"0px 20% 0px 20%"}} > <div ><NameIcon width='100px' color='rgb(53, 132, 179)'/> </div> <div> <BrandIcon width='25px' color2="rgb(53, 132, 179)" color="rgb(23,75,104)"/></div></div>
        <div className="items-con">
        
    


        <div className="items"><div to="/login" className="links"  onClick={()=>{settype("آیفون");
                 
                this.props.history.push('/Product');
               }}><AppleIcon width="25px" color={iconscolor}/>
         <span className="m-2">آیفون</span>
         </div></div>
         


        


         <div className="items"><div to="/login" className="links "  onClick={()=>{settype("هوآوی");
                 
                 this.props.history.push('/Product');
               }}><HuawieIcon width="25px" color={iconscolor}/>
         <span className="m-2">هوآوی</span>
         </div></div>
          
         <div className="items"><div to="/login" className="links"  onClick={()=>{settype("شیائومی");
                 
                this.props.history.push('/Product');
               }}><XaiomiIcon width="25px" color={iconscolor}/>
         <span className="m-2">شیائومی</span>
         </div></div>
         



         <div className="items"><div to="/login" className="links"  onClick={()=>{settype("الجی");
                 
                 this.props.history.push('/Product');
               }}><LgIcon width="25px" color={iconscolor}/>
         <span className="m-2">الجی</span>
         </div></div>

         

         <div className="items"><div to="/login"  onClick={()=>{settype("سامسونگ");
                 
                 this.props.history.push('/Product');
               }} className="links"><SumsungIcon width="25px" color={iconscolor}/>
         <span className="m-2">سامسونگ</span>
         </div></div>
         


         <div className="items"><div to="/login" className="links"  onClick={()=>{settype('offer');
                 
                 this.props.history.push('/Product');
               }}><DiscountIcon2 width="25px" color="rgb(100,100,100)" />
         <span className="m-2">پیشنهاد ویژه</span>
         </div></div>

         <div className='borderb'></div>
         <div className="items"><Link to="/contact" className="links"><HeadsetIcon width="25px" color="rgb(100,100,100)" />      <span >
         ارتباط با ما
        </span></Link></div>
       

         <div className="items"><Link to="/login" className="links"><BellIcon width="25px" color="rgb(100,100,100)" />
         <span className="m-2">پیشنهادها</span>
         </Link></div>
        <div className="items "><Link to="/cart" className='links'><BagIcon width="25px" color="rgb(100,100,100)" /><span>
        سبد خرید
        </span></Link></div>
      
         <div className="items "><Link to="/login" className="links"><EnterIcon width="25px" color="rgb(100,100,100)" />   <span className="mr-2">
      ورود/ثبت نام
        </span></Link></div>





        </div>
        
    
        </div>
        );
        }}
      
        
export default withRouter(Menuitem);