import React , {useContext}from 'react';
import {pricestyle,priceafter} from '../util/pricestyle';
import Carousel from 'react-elastic-carousel';
import {ProductContext} from '../context/ProductContext'


import {withRouter} from 'react-router-dom';

const ElsticSlide = (props) => {
    const items=props.itemms;
    const {handelProductDetail}=useContext(ProductContext);
  
const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width: 460, itemsToShow: 2},
    { width: 590, itemsToShow: 3},
    { width: 700, itemsToShow: 4},
    { width: 1200, itemsToShow: 4 }
  ];
  
    return (
<React.Fragment>
<Carousel enableAutoPlay autoPlaySpeed={props.time}  pagination={false}
breakPoints={breakPoints}>
  {items.map(item => 
  <div key={item.proid} className='elsti-item' onClick={()=>{handelProductDetail(item.proid);
  props.history.push('/Productdetail');
             }} >
      <div style={{padding:"5px",textAlign:"center"}} ><img width="170px" height="170px" src={`http://localhost:8088/${item.images[0]}`}/></div>
      <div style={{padding:'3px 8px',direction:"rtl"}} >{item.name}</div>
    {item.discount!==0?(<div  className='discount-elstic-show' ><span>%{item.discount}</span><span>{pricestyle(item.price)}</span></div>):(<div style={{opacity:"0"}} className='discount-elstic-show' ><span>%{item.discount}</span><span>{pricestyle(item.price)}</span></div>)}
      <div ><span>{pricestyle(priceafter(item.price,1,item.discount))}</span><span>تومان</span></div>
      <div >افزودن به سبد خرید</div>
      </div>)}
</Carousel>
        </React.Fragment>
    );
};



export default withRouter(ElsticSlide);






