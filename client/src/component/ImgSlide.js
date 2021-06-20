import React, {useState, useEffect ,useContext} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './HomePage.css';
import {ProductContext} from '../context/ProductContext'

import {withRouter} from 'react-router-dom';

const ImgSlide = (props) => {
    const {settype,handelProductDetail}=useContext(ProductContext);
  
    const [currentleft, setcurrentleft] = useState(0);
    const [currentleft2, setcurrentleft2] = useState(true);
  
    const images=props.images;
    const handelslideshow=(item,id)=>{
        
        var elem2 =document.getElementById('conslider');
      handel_dot_Color(id);
        
        var elem =document.getElementById('fig');
       console.log(`elem style left is${currentleft}`);
        elem.style.left=`${-(item*elem2.offsetWidth)}px`
setcurrentleft2(false);
setTimeout(()=>{
    setcurrentleft2(true);  
},900)

       

    }

 const handelimgclick=(index)=>{
if (index==0||index==3){

    settype('اپل');
    props.history.push('/Product');
}else if(index==1){
    handelProductDetail('xiomie  4C id ');
    props.history.push('/Productdetail');
}else if(index==2){
    settype('','solded');
    props.history.push('/Product');
}

 }


  const  handel_dot_Color=(id)=>{
      const loc=props.location;
      console.log(id);
      if(loc.pathname=='/'){
        for(let i=0;i<images.length-1;i++){
            console.log(i);
            var dot_elem=document.getElementById(`dot-${i}`);
            if(id==`dot-${i}`){
                
                dot_elem.style.background="rgb(52,152,152)"
    
            }else{
                
                dot_elem.style.background="transparent"
            }
           }
        }
    }

    
    useEffect(()=>{
    
         if(currentleft2){
        var divlength;
        var elem =document.getElementById('fig');
        var elem2 =document.getElementById('conslider');
        setTimeout(()=>{          

        
     divlength=elem2.offsetWidth;
    },700);
    var x=0;

    const   slideinterval=  setInterval(() => { 
        setTimeout(()=>{
        
            x =  x-divlength;
           let num=-(x/divlength);
           if(num>images.length-2){
               num=0;
           }

           const cer=`dot-${num}`
           //handel_dot_Color(cer);
         
            
            elem.style.transition='left 0.3s';
                     elem.style.left=`${x}px`;
        },1000)    
if(x < (-(2*divlength))){
    
    x=0;
elem.style.transition='left 0s';
elem.style.left=`0`;
}
            setcurrentleft(x);
          }, 3500);
          return () => clearInterval(slideinterval);
    
        }
           
    


    },[currentleft2])
    return (
       
        <div className="slideshow" id="conslider">
            
            <figure id="fig">
         {images.map((item,index)=>{

   return <img  onClick={()=>handelimgclick(index)}  src={item}></img>

         })}
         </figure>   
         
           {/*
        
         <div className="slide-dote-con">
      
             <div id='dot-0' onClick={()=>{handelslideshow(0,'dot-0')}} className="slide-dote"></div>
             <div id='dot-1' onClick={()=>{handelslideshow(1,'dot-1')}} className="slide-dote"></div>
             <div id='dot-2' onClick={()=>{handelslideshow(2,'dot-2')}} className="slide-dote"></div>
            </div>
            
        </div>
        */} 
        </div>
        
       
    );
};

export default withRouter(ImgSlide);