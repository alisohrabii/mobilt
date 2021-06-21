import testphoto from '../images/bell.svg';
import "./cart.css";
import trash from '../images/trash.svg';
import {pricestyle,priceafter,pricediscount} from "../util/pricestyle";
import React from 'react';
import { MiunsIcon, PluseIcon, TrashIcon } from '../util/Icons';
  const Cartitem=(props)=>{
  const {id,name, colorselected,rating,existnumber, brifinfo,brand,garanty, images,total,count}=props.item;            
  const {addcount,subcount,errmssage, removeitem}=props.value;            
                return(
                 <div className=" cartitem" >
               
              
                     <div className=" ">
                        <img src={`http://mobilt.herokuapp.com/${brifinfo.images[0]}`} width='100px'/>
                     </div>
                     
                     
                     <div className=" " style={{textAlign:"right",flexGrow:"3"}}>
                                       <div style={{fontSize:"17px",direction:"rtl"}}>        
                                                        {brifinfo.name}
                                       </div>
                                       <div className="cart-item-char" >
                                                   <div   style={{direction:"rtl"}}>    
                                                         <span className=" ">
                                                      برند:
                                                         </span>    
                                                         <span className="">
                                                         
                                                   {brand}
                                                   </span>
                                                   </div>
                                    
                                                   <div  style={{direction:"rtl"}}>
                                                   <span >
                                                   رنگ:
                                                   </span>
                                                   <span className="">
                                                   
                                                   {colorselected}
                                                   
                                                   </span>
                                                   </div>
                                                   <div  style={{direction:"rtl"}}>
                                                   <span >
                                             گارانتی:
                                                   </span>
                                                   <span >
                                                 {garanty}
                                                   </span>
                                                   
                                                   </div>
                                    </div>
                                    <div className="cart-item-price-discount"  >
                                   
                                    <span>
                                     تخفیف
                                     </span>
                                     {pricestyle(pricediscount(brifinfo.price,count,brifinfo.discount))}
                                    
                                     <span>
                                    تومان
                                     </span>
                                
                                  </div>
                                    <div className="cart-item-price"  >
                                     
                                          
                                          {pricestyle(priceafter(brifinfo.price,count,brifinfo.discount))}
                                          <span>
                                          تومان
                                          </span>
                                     
                                       </div>
                                    
                                       <div style={{ display:"flex",flexDirection:"row"}}>
                                             
                                             <div style={{color:"rgb(0, 171, 194)",display:"flex",fontSize:"13px",margin:"0px 0% 0px auto"}} onClick={()=>removeitem(id)}>
                                               <div style={{margin:"auto 3px"}}> حذف</div>
                                             <TrashIcon width="15px" color='rgb(0, 171, 194)' ></TrashIcon>
                                             </div>

                                             <div style={{display:"flex", justifyContent:"space-between" ,margin:"0px 13px 0px auto",width:"75px" ,color:"rgb(155,155,155)",border:"1px solid rgb(155,155,155)",padding:"0px 9px",fontSize:"20px",borderRadius:"2px"}}> 
                                            {count>1?(<div style={{margin:'7px 0px 0px 0px'}}  onClick={()=>subcount(id,colorselected)}><MiunsIcon color="rgb(0 ,170,195)" width="20px"/></div>):(<div style={{margin:'7px 0px 0px 0px'}}  ><MiunsIcon color="rgb(160,160,160)" width="20px"/></div>)}
                                             <div style={{fontSize:"26px"  ,margin:"0"}} >{count}</div>
                                            {count<existnumber+1?( <div   style={{margin:'7px 0px 0px 0px'}} onClick={()=>addcount(id,colorselected,existnumber)}><PluseIcon color="rgb(0 ,170,195)" width='20px'/></div>):(<div   style={{margin:'7px 0px 0px 0px'}} ><PluseIcon color="rgb(160 ,160,160)" width='20px'/></div>)}
                                             </div>
                                             <div style={{position:'absolute' ,bottom:"0px",right:"0px"}}>{errmssage}</div>
                                       </div>


                               </div>     
                                                         
                                 </div>
                 )}
              export default Cartitem;