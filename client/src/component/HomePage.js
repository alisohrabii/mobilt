
import React, { useEffect,useState ,useContext} from 'react';
import './HomePage.css';
import ImgSlide from "./ImgSlide";
import Axios from "axios";

import {HuawieIcon,AppleIcon,XaiomiIcon,SumsungIcon} from  '../util/Icons';
import {ProductContext} from '../context/ProductContext'
import {IconDot } from './IconDot';
import ElsticSlide from './ElsticSlide';
import ProductShow from './ProductShow';
const placeholderSrc = (width, height) => `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;


const HomePage=(props)=> {
  const {settype,handelProductDetail}=useContext(ProductContext);
   
    const images=["http://localhost:8088/uploads/photo1.webp","http://localhost:8088/uploads/photo2.webp","http://localhost:8088/uploads/photo3.jpg","http://localhost:8088/uploads/photo1.webp"]
    const [ParchamProduct, setParchamProduct] = useState([]);
    const [XiomieProduct, setXiomieProduct] = useState([]);
    const [HuawieProduct, setHuawieProduct] = useState([]);
      const [AppleProduct, setAppleProduct] = useState([]);
    
    
      useEffect(()=>{
 Axios.post("http://localhost:8088/product/GetproductbyType",{type:"اپل"}).then(res=>{

if(res.status==200){ setAppleProduct(res.data.mypro)}
 })
 
 Axios.post("http://localhost:8088/product/GetproductbyType",{type:"شیائومی"}).then(res=>{

if(res.status==200){ setXiomieProduct(res.data.mypro)}
 })
 
 Axios.post("http://localhost:8088/product/GetproductbyType",{type:"هوآوی"}).then(res=>{

if(res.status==200){ setHuawieProduct(res.data.mypro)}
 })
 
 Axios.post("http://localhost:8088/product/GetproductbyType",{type:"پرچمدار"}).then(res=>{

if(res.status==200){ setParchamProduct(res.data.mypro)}
 })

      
        



    },[])
    
    return (
        <div className="home-page-con">
           <div className='part-one'>
                <div className='part-one-first'>
                    <div className='part-one-first-up'><div className="slideshow-con box-shadow"><ImgSlide images={images}/></div></div>
                    <div className='part-one-first-down'>
                           <div className='box-shadow' onClick={()=>{settype('فلش مموری');
                                                                     props.history.push('/Product');
                                                                                }} ><img src='http://localhost:8088/uploads/photo4.webp'/></div>
                           <div className='box-shadow'  onClick={()=>{handelProductDetail('Apple 4C id ');
                                                                     props.history.push('/Productdetail');
                                                                                }} ><img src='http://localhost:8088/uploads/photo5.webp'/></div>
                                                   
                    </div>
                </div>
                <div className='part-one-secound'>
                <div className='part-one-secound-up box-shadow'   onClick={()=>{handelProductDetail('hawiee 4c id ');
                                                                     props.history.push('/Productdetail');
                                                                                }}><img src='http://mobilt.herokuapp.com/uploads/photo9.webp'/> </div>
                    <div className='part-one-secound-down box-shadow'   onClick={()=>{settype('','solded');
                                                                     props.history.push('/Product');
                                                                                }}><img src='http://localhost:8088/uploads/photo-left-down.jpg'/></div>



                </div>
               
            </div>
            
           
            {AppleProduct.length>0?(
            <div className='box-elstic-show' >
          <div style={{margin:"0px 45px ",color:"rgb(103,103,103)",display:"flex",flexDirection:"row-reverse",padding:"19px 0px",color:'rgb(66,66,66)',fontSize:"23px",fontWeight:"300",textAlign:"right"}}><IconDot width='80px' color="rgb(250,130,138)"/>  <div style={{marginTop:"10px"}}>گوشی های  آیفون</div><div style={{margin:"9px 10px 0 0"}}> <AppleIcon width="30px" color="rgb(250,130,138)" /></div><div onClick={()=>{settype("اپل");
                                                                     props.history.push('/Product');
                                                                                }} style={{fontSize:"14px",margin:"0px auto 0 0"}}>موارد بیشتر</div> </div>
          <ElsticSlide  itemms={AppleProduct} time='13000'/>
            </div>):(<div>.....myskeleton</div>)
}
<div></div>
{ParchamProduct.length>0?(
           <div><ProductShow product={ParchamProduct} NameOfBranch='گوشی های پرچم دار'/></div> ):(<div>.....myskeleton</div>)
}
           
          
{XiomieProduct.length>0?(
            <div className='box-elstic-show' >
                 <div style={{margin:"0px 45px ",color:"rgb(103,103,103)",display:"flex",flexDirection:"row-reverse",padding:"19px 0px",color:'rgb(66,66,66)',fontSize:"23px",fontWeight:"300",textAlign:"right"}}> <IconDot width='80px' color="rgb(255,198,13)"/>  <div style={{marginTop:"10px"}}>گوشی های شیائومی</div><div style={{margin:"10px 10px 0 0"}}> <XaiomiIcon color="rgb(255,198,13)" width="33px" /></div><div style={{fontSize:"14px",margin:"0px auto 0 0"}} onClick={()=>{settype("شیائومی");
                                                                     props.history.push('/Product');
                                                                                }}>موارد بیشتر</div> </div>
          <ElsticSlide itemms={XiomieProduct} time='14000'/>
            </div>):(<div>.....myskeleton</div>)
}
{HuawieProduct.length>0?(
            <div className='box-elstic-show'  style={{marginBottom:"7px"}}>
                   <div style={{margin:"0px 45px ",color:"rgb(103,103,103)",display:"flex",flexDirection:"row-reverse",padding:"19px 0px",color:'rgb(66,66,66)',fontSize:"23px",fontWeight:"300",textAlign:"right"}}><IconDot width='80px' color="rgb(8,99,222)"/>  <div style={{marginTop:"10px"}}>گوشی های هوآوی</div><div style={{margin:"10px 10px "}}><HuawieIcon  width="33px" color="rgb(8,99,222)"/></div><div style={{fontSize:"14px",margin:"0px auto 0 0"}} onClick={()=>{settype('هوآوی');
                                                                     props.history.push('/Product');
                                                                                }}>  موارد بیشتر  </div> </div>
          <ElsticSlide itemms={HuawieProduct} time='10000'/>
            </div>):(<div>.....myskeleton</div>)
}

        
        </div>
    );
};

export default HomePage;