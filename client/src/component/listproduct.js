import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
import {withRouter} from 'react-router-dom';
import {Digi,cloths,Furnture,Beauty,Gaming} from './listproductinfo';
import './listproduct.css';
import plusephoto from '../images/pluse.svg';
import minusphoto from '../images/minus.svg';

import { ProductContext } from '../context/ProductContext';

class Listproduct extends React.Component {
    constructor (props){
    super (props);
    
         
    }
    
handelclickitem=()=>{

   this.props.handleParentSearch('any data');
 

this.props.history.push('/Product')

}
handelclick=(item)=>{
    const imgphoto=document.getElementsByClassName(`${item}2`);
    
let elem=document.getElementsByClassName(item);
//this is parentchild arrey

if(imgphoto[0].src.indexOf('minus') > -1){imgphoto[0].src=plusephoto;

}else{imgphoto[0].src=minusphoto;   
}
for (const x of elem) {
  if( x.style.display=="block"){x.style.display="none";}
 else{ x.style.display="block"};
}


//elements.style.color = 'blue';

}

render(){

    var mythis=this;

    const type=this.props.type;
    var branch;
    

    switch(type){
        
        case "کالاهای دیجیتال":
        branch=Digi;
        break;
        case "مد وپوشاک":
        branch=cloths;
        break;
        
        case "لوازم خانگی":
        branch=Furnture;
        break;
        
        case "لوازم آرایشی":
        branch=Beauty;
        break;
    
        case "بازی وسرگرمی":
        branch=Gaming;
        break;
        
        default:
        
        branch={a:['yy'],b:['ttt']}
        
        break;
        
            }
            let itemo='';
 return (
     
    
          <div className='block-con'>
          
            
           {Object.keys(branch).map(function(key) {
          return(<div   className='block-sub'>
      
          {  
         
    branch[key].map((item,index)=>{
       

      if(index== 0 && branch[key].length>1){
         itemo=item;
        return  <div className=' item-list' > <img className={`${key}2`} src={plusephoto} width='15px'/>  <div id='kk' className='hed' onClick={()=>{mythis.handelclick(key)}} >{item}</div> </div>
      
        }else if(index== 0){
            itemo=item;
            return <ProductContext.Consumer>{value=>{return <div  id='kk' style={{marginRight:'62px'}} className=' head2'>{item}</div>}}</ProductContext.Consumer>
             
          

        }else {
    return <ProductContext.Consumer>{value=>{return <div  style={{marginRight:'68px'}}   className={`in-head inside  ${key}`} onClick={()=>{value.settype(item);
        mythis.handelclickitem()} } >{item}{value.productinfo}</div>}}</ProductContext.Consumer>
          }
/*return index==0?<div >llllllitem=={item}</div> 
    :
    <div >mytemmmm=={item}</div>; 

*/




 



  })
           }</div>)
})}
</div>
    
    )};
};

export default withRouter( Listproduct);