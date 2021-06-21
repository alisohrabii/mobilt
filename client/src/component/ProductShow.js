import React ,{useContext} from 'react';
import {AddtocartIcon, OfferIcon} from '../util/Icons';
import {pricestyle} from '../util/pricestyle';
import './Productshow.css';
import {ProductContext} from '../context/ProductContext'

import {withRouter} from 'react-router-dom';

import {IconDot } from './IconDot';
const ProductShow = (props) => {
    const product2=props.product;
    const {settype,handelProductDetail}=useContext(ProductContext);
  
const product=product2.slice(0,6);

const dotitems = []

for (let i=0; i<100;i++) {
  dotitems.push(<div className='dot-in' ></div>)
}
     return (
        
        <div className='productshow-items-con-con' >
            <div className='productshow-header'> <div style={{transform:"rotate(180deg)",transformOrigin:"50% 30%",position:"absolute", right:"20px",top:"5px"}}><IconDot width='80px' color="rgb(99,210,228)"/></div><div style={{margin:'0 0'}}> {props.NameOfBranch}</div> <div  style={{ position:"absolute", left:"20px",top:"5px"}}><IconDot width='80px' color="rgb(99,210,228)"/></div></div>
           <div className='productshow-items-con'> {
            product.map(item=>{
                const {proid,price,likes,priceafter
                    ,offer,gift,discount,images,name}=item;        
 
            return(
                <div key={proid} className='productshow-items'  onClick={()=>{handelProductDetail(proid);
                props.history.push('/Productdetail');
                           }} >
                      <div style={{padding:'15px'}} ><img width="180px" height="180px" src={`http://mobilt.herokuapp.com/${item.images[0]}`}/></div>
                        <div className='productshow-items-info'>
                            <div style={{fontSize:"14px", color:"rbg(166,166,166s)",direction:"rtl"}} >{item.name}</div>
                            <div style={{fontSize:"13px", color:"rbg(166,166,166s)"}}>
SamsungGalaxy Note20 5G 256GB Ram 8GB Dual SIM
</div>
                            {discount>0?( 
                              <div className='productshow-items-info-discount'><div  > %{discount} OFF</div> <div  > {pricestyle(price)}</div></div>
                              ):(
                                <div className='product-item-price' style={{opacity:"0"}}><span> %{discount} OFF</span> <span></span></div>
                                )}

                            <div className='productshow-items-info-price'  ><div style={{direction:"rtl",textAlign:"left",verticalAlign:'middle',marginTop:"3px",marginLeft:"12px" ,fontSize:"20px",fontWeight:'normal',letterSpacing:"-1px"}}><span >{pricestyle((priceafter))}</span><span style={{margin:"0 4px 0 0px",fontSize:"12px",fontWeight:"normal"}}>تومان</span></div><div style={{background:"rgb(90,138,237)",padding:'4px 5px 0px 5px', position:'absolute' , top:'0px',right:'0px'}}><AddtocartIcon width="25px" height="22px" color="white"/></div></div>
                            {offer==true?(<div style={{display:'flex',margin:"10px 0 0 0",fontSize:'14px',width:'50%'}}><OfferIcon color='rgba(243,2,64,255)' width='20px'/><div style={{margin:'auto 0',color:'rgba(243,2,64,255)',fontSize:'13px'}}> پیشنهاد ویژه</div></div>):(null)}
                        </div>
                </div>
)

})

            }
            </div>
            
        </div>
        
    );
};

export default withRouter(ProductShow);