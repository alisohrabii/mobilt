import React from 'react';
import './Loadingsniper.css';
import { NameIcon, BrandIcon } from '../util/Icons';
const Loadingsniper = () => {
    return (
        <div className="con-con-sniper">
            <div className='con-sniper'>
                

                <div style={{display:"flex",flexDirection:"row-reverse", justifyContent:'center',background:"rgb(242,242,242)"}} ><div><NameIcon width='100px' color='rgb(53, 132, 179)'/> </div> <div style={{marginTop:"5px"}} > <BrandIcon width='29px' color2="rgb(53, 132, 179)" color="rgb(23,75,104)"/></div></div>

                <div style={{display:"flex",flexDirection:"row-reverse",justifyContent:'space-around'}}>
<div style={{marginTop:"25px"}}>در حال دریافت اطلاعات</div>

<div className='loader-spin'></div>
            </div>
        </div>
        </div>
    );
};
export default Loadingsniper;