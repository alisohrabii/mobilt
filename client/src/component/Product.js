import React,{useContext, useEffect} from 'react';
import {ProductContext} from '../context/ProductContext'

import "./product.css";
import {useHistory} from "react-router-dom";

import {pricestyle,priceafter} from '../util/pricestyle';
import { DiscountIcon,SortIcon,OfferIcon,HeartIcon,CommentIcon } from '../util/Icons';
import Loadingsniper from './Loadingsniper';

class Product extends React.Component {
  constructor (props){
  super (props);
  this.state={errmsage:"",sort:"پرفروش ترین"}
  }

  sorttype=(item,id)=>{
    

this.setState({sort:item})


    let elem2=document.getElementsByClassName('sort');
    let sizeofsort=elem2[0].offsetWidth;
    console.log(sizeofsort)
    
    let elem3=document.getElementsByClassName('isidesort');
  if(sizeofsort>770){
      for(let i=1;i<5;i++){
        if(`a${i}`==id){
          
          let elem4=document.getElementById(id);
          elem4.style.background='rgb(122,133,166)';
          elem4.style.color='rgb(255,255,255)'

        }else{

          let elem4=document.getElementById(`a${i}`);
          elem4.style.background='transparent';
          elem4.style.color='rgb(145,145,145)'

        }

      }

    }else{


elem3[0].style.display='none';
    }

  }
  sortshow=()=>{
let elem=document.getElementsByClassName('insidesort');

let elem2=document.getElementsByClassName('sort');
let sizeofsort=elem2[0].offsetWidth;
if(sizeofsort>770){}else{
if(elem[0].style.display=="block"){


  elem[0].style.display='none';
}else{

  elem[0].style.display='block';
}}
  }


  static contextType = ProductContext;
render(){
  const mythis=this;
 const products3 = this.context.product;
 const handelProductDetail = this.context.handelProductDetail;
 const typeofpro=this.context.typeofpro;
 const getproduct = this.context.settype;
 
 return (
        <div className='main-container'>
          <div className="sort">
            <div onClick={this.sortshow} className='sorthead'><SortIcon width="26px"/> <div>مرتب سازی </div><div>{this.state.sort}</div></div>
            <div className='insidesort'>
            <div id='a1' onClick={()=>{this.sorttype("پرفروش ترین",'a1');
           getproduct(typeofpro,'solded');  
            }}>پرفروش ترین</div>
            <div id='a2' onClick={()=>{this.sorttype("گرانترین",'a2');
          getproduct(typeofpro,'priceafter');
    }
          }>گرانترین</div>
            <div id='a3' onClick={()=>{this.sorttype("ارزانترین",'a3')
           getproduct(typeofpro,'pricedown');
        }  
          }>ارزانترین</div>
            <div id='a4' onClick={()=>{this.sorttype("پر تخفیف ترین",'a4');
           getproduct(typeofpro,'discount');
        }  
          }>پر تخفیف ترین</div>
            </div>
          </div>
        <div className='product-con-con'>
          {products3.length!=0?(<div className='product-container'>
         
            {products3.map(product=>{
          

            const {proid,price,likes,offer,gift,discount,images,name}=product;
                           
                return <div className='product-item' onClick={()=>{handelProductDetail(proid);
                 
                  this.props.history.push('/ProductDetail');
                }}>
     
                          <div className="product-item-in">
                               <div ><img src={`http://mobilt.herokuapp.com/${images[0]}`} className='product-image'/></div>
                                  
  
                              <div className='product-item-name'>{name}</div>
                              {product.discount>1?( 
                              <div className='product-item-discount'><div className='discount1'> %{product.discount}</div> <div className='discount2'> {pricestyle(price)}</div></div>
                              ):(
                                <div className='product-item-price' style={{opacity:"0"}}><span> %{product.discount}</span> <span></span></div>
                                )}
                                <div style={{display:"flex",width:"98%"}}>
                              
                              
                                {likes!==''?(<div style={{display:'flex',color:"rgb(160,160,160)",fontSize:'13px'}}><HeartIcon width='18px' color='rgb(160,160,160)' /> <div  style={{margin:'auto 0'}}>{likes}</div></div>):(<div style={{display:'flex',opacity:"0",color:"rgb(160,160,160)",fontSize:'13px'}}><HeartIcon width='18px' color='rgb(160,160,160)' /> <div  style={{margin:'auto 0'}}>{likes} </div></div>)}
                           
                               <div className='product-item-price'><span> {pricestyle(priceafter(price,1,discount))}</span> <span>تومان</span></div>
                                </div>
                              <div style={{display:'flex',width:'99%',marginBottom:'13px'}}>
                                {offer==true?(<div style={{display:'flex',fontSize:'14px',width:'50%'}}><OfferIcon color='rgb(160,160,160)' width='20px'/><div style={{margin:'auto 0',color:'rgb(160,160,162)',fontSize:'13px'}}> پیشنهاد ویژه</div></div>):(null)}
                                {gift!==''?(<div style={{display:'flex',fontSize:'14px',width:'50%'}}><OfferIcon color='rgb(160,160,160)' width='20px'/><div style={{margin:'auto 0',color:'rgb(160,160,162)',fontSize:'13px'}}>یک عدد موس هدیه</div></div>):(null)}
                                {gift=='' && offer==false? (<div style={{display:'flex',opacity:"0",fontSize:'14px',width:'50%'}}><OfferIcon color='rgb(160,160,160)' width='20px'/><div style={{margin:'auto 0',color:'rgb(160,160,162)',fontSize:'13px'}}>یک عدد موس هدیه</div></div>):(null)}
           
                                  </div>
                                  <div className='product-hover-section'>
                                    <div>امتیاز کاربران </div>
                                   <div className="like-section"><HeartIcon width='20px' color='rgb(100,100,100)' /> <div>افزودن به علاقه مندی ها</div></div>
                              
                                    </div>
                                      
                           </div>
                        </div>
  
  
  



})}


          
            </div>):(<div><Loadingsniper /></div>)}
            </div>

                </div>
    );
}

};

export default Product;