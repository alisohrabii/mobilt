
import React from 'react';
import './ProductDetail.css';
import Loadingsniper from "./Loadingsniper"
import {ProductContext} from '../context/ProductContext';
import Axios from "axios";
import ElsticSlide from "./ElsticSlide";
import {Carousel} from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// requires a loader

import {pricestyle,priceafter} from '../util/pricestyle';
import { MenuIcon ,BookIcon,PriceIcon,TruckIcon} from '../util/Icons';

const zoomGallery = [
    'http://placehold.it/900x',
    'http://placehold.it/900x',
    'http://placehold.it/900x',
    'http://placehold.it/900x',
    'http://placehold.it/900x'
]


class ProductDetail extends React.Component {
    constructor() {
        super();
        this.state = { colorselected:"",parttowshow:"",SimProduct:[]}
    }



    handlecolor = (item, index,leng) => {
     
for (let i = 0; i < leng; i++){
 let elem=document.getElementsByClassName(`color-${i}`);
if (i==index){
     elem[0].style.border="2px solid rgb(38, 183, 202)";   
}else{
    elem[0].style.border="1px solid rgb(124, 124, 124)";  

}    



}
        this.setState({colorselected:item })
    }

 parttowselect=(item)=>{


    this.setState({parttowshow:item })
if(item=='describe'){
    
    document.getElementById('tecnical').style.backgroundColor="rgb(250,250,250)";

document.getElementById('describe').style.backgroundColor="white";
}else{

    document.getElementById('tecnical').style.backgroundColor="white";

    document.getElementById('describe').style.backgroundColor="rgb(250,250,250)";


}
 }




componentDidMount(){


    Axios.post("http://mobilt.herokuapp.com/product/GetproductbyType",{type:'شارژر'}).then(res=>{
    console.log(res);
        if(res.status==200){
           this.setState({SimProduct:res.data.mypro});
        }

})};




 static contextType = ProductContext;
 
   
    render() {
        
  const unicproduct = this.context.productDetail;
     
  const addtocart = this.context.addtocart;
 
  
  console.log(unicproduct);
  if(unicproduct!==undefined){
    var prodetail=unicproduct.tecnicalinfo.slice(0,8);
  }
  setTimeout(()=>{
    console.log();
  },3000)
  

        return (
            <React.Fragment>

<div style={{margin:'40px 0px 0px 0px'}}>
                
                {unicproduct!==undefined?(<div>
                    <div className='part-one'>
                    <div className='pro-image'>
                   <div className='con-crasouel'>   
                    <Carousel>
                {unicproduct.brifinfo.images.map(item=>{
return(<div>
    <img src={`http://mobilt.herokuapp.com/${item}`} />
</div>)
                })}   
            </Carousel>
            </div>
                    </div>
                    <div className='pro-data'>
                        <div  className='pro-name'>{unicproduct.brifinfo.name}</div>
                        <div className='pro-brand'>برند :<span   > {unicproduct.brand} </span></div>
                        <div className='pro-type'>دسته بندی :<span  > {unicproduct.type}</span> </div>
                        <div className='pro-main-character-con'>
                            <div>مشخصات اصلی</div>
                        {prodetail.map(item => {
                         return <div className='pro-main-character'><span className='pro-main-character-name'> .. {item.name}</span> :<span className='pro-main-character-value'> {item.value}</span></div>
                        })}
                        </div> 
                    </div>
                    <div className='pro-addto'>

              <div className='color-title'>انتخاب رنگ</div>
                       <div  className='color-select' >
                                {unicproduct.colors.map((item,index,arr) => {
                                return <div className={`color-${index}`} onClick={()=>{this.handlecolor(item,index,arr.length)}} ><span>{item}</span></div>
                                })}
                       </div>
                       
                       <div className='garanty'>گارانتی  :<span   > {unicproduct.garanty} </span></div>
                       
                       {unicproduct.brifinfo.discount>0?( 
                              <div className='product-item-discount'><div className='discount1'> %{unicproduct.brifinfo.discount}</div> <div className='discount2'><div></div> {pricestyle(unicproduct.brifinfo.price)}</div></div>
                              ):(
                                <div className='product-item-price' style={{opacity:"0"}}><span></span> <span></span></div>
                                )}
                       <div className='price-de'>قیمت :       <span>{pricestyle(priceafter(unicproduct.brifinfo.price,1,unicproduct.brifinfo.discount))} </span>تومان</div>
                    <div><div onClick={()=>{
        if(this.state.colorselected!==''){
    
            addtocart(unicproduct,this.state.colorselected)  
        }else{
            
        addtocart(unicproduct,unicproduct.colors[0])}}} className='button-addtocard'>افزودن به سبد خرید</div>
       
        </div> 
                             
                        <div style={{display:'flex',margin:"3px 7px",flexDirection:"row-reverse",color:"rgb(160,160,160)"}}>
                        <PriceIcon width="23px" color="rgb(160,160,160)" />
                        <div style={{margin:'auto 3px'}}> تضمین بهترین قیمت</div>
                        </div>

                        <div  style={{display:'flex',margin:"3px 7px",flexDirection:'row-reverse',color:"rgb(160,160,160)"}}>
                        <TruckIcon width="25px" color="rgb(160,160,160)"/>
                        <div style={{margin:'auto 3px'}}>  ارسال در سریعترین زمان</div>
                        </div>

                      </div>
                      </div>
                       <div>
                            <div className='parttowselect'>
                            
                              <div   style={{padding:"10px 0px"}} id='describe' onClick={()=>{this.parttowselect("describe")}}>


                                  
                                                <div  className="under-button">
                                        <BookIcon color="rgb(166,166,166)" width='22px'/>
                                        <div style={{margin:'auto 5px'}}>توضیحات</div>
                                        </div>
                              </div>
                              <div  id='tecnical' style={{padding:"10px 0px"}}  onClick={()=>{this.parttowselect("tecnical")}}>

<div  className="under-button">
 <MenuIcon width='22px' color="rgb(166,166,166)"/> 
<div style={{margin:'auto 5px'}}>مشخصات فنی</div>
</div>


</div>

                            </div>


                            <div className='parttowcontent'>
                            {this.state.parttowshow=='describe'?(
                            <div className='describe'>
                            {unicproduct.discribe.map(item => {
                         return <div className='pro-main-character nsidetecnical'><span style={{color:"blue"}} className='tecnical-name'>  {item.name}</span> :<span className='tecnical-value'> {item.value}</span></div>
                        })}

                            </div>
                            ):(<div className="tecnical">
                                <div className='pro-main-character-con '>
                            <div>مشخصات اصلی</div>
                        {unicproduct.tecnicalinfo.map(item => {
                         return <div className='pro-main-character nsidetecnical'><span className='tecnical-name'>  {item.name}</span> :<span className='tecnical-value'> {item.value}</span></div>
                        })}
                        </div> 
                          </div>  
                            )}
                            </div>

                </div>
<div style={{height:'42px' ,background:"rgb(250,250,250)"}}></div>
                {this.state.SimProduct.length>0?(
            <div className='box-elstic-show-detailpage' >
          <div style={{margin:"0px 45px ",color:"rgb(103,103,103)",padding:"19px 0px",fontSize:"18px",fontWeight:"300",textAlign:"right",borderBottom:"1px solid rgb(211,211,211)"}}>کالاهای مشابه</div>
          <ElsticSlide itemms={this.state.SimProduct} time='13000'/>
            </div>):(<div>.....myskeleton</div>)
}


            </div>):(<div><Loadingsniper /></div>)}
</div>
            </React.Fragment>
        );
    }
}
export default ProductDetail;

