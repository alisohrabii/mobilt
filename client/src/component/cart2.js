import React,{useState,useEffect,useContext} from 'react';
import './cart2.css';
import { ProductContext } from '../context/ProductContext';
import Axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Cart2 = () => {
    const {userinfo}=useContext(AuthContext);
const {cart,Paytotprice}=useContext(ProductContext);

  const [mobnumber, setMobnumber] = useState('');
  const [lastname, setLastname]=useState('');
  const [name, setName]=useState('');
  const [errMssage, setErrMssage]=useState('');
  const [adress, setAdress]=useState('');
  const [RecTime, setRecTime]=useState('');
  useEffect(()=>{


setLastname(userinfo.user.lastname);
setName(userinfo.user.username);
setMobnumber(userinfo.user.mobnumber);

},[])
  return (
        <div className='center-box'>

                                <div >
                                    <label  className="ness"> نام</label>
                                    <div className='input-section'>                                                 
                                    
                                       <input   type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="نام خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div>                          
                                        <label  className="ness">نام خانوادگی </label>
                                        <div className='input-section'>            
                                                    
                                            <input type="text" value={lastname} onChange={e=>setLastname(e.target.value)} placeholder=" نام خانوادگی خود را وارد نماید " className="register-input" ></input>
                                        </div>
                                </div>
                                <div >
                                    <label  className="ness">شماره موبایل</label>
                                    <div className='input-section'>                                                 
                
                                        <input   type="number" value={mobnumber} onChange={e=>setMobnumber(e.target.value)} placeholder="شماره موبایل خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">نشانی</label>
                                    <div className='input-section'>                                                 
                                    
                                        <input   type="email" value={adress} onChange={e=>setAdress(e.target.value)} placeholder="ایمیل خود را وارد کنید"/>
                                    </div> 
                                </div>
                               
                                <div >
                                    <label  className="ness">زمان تحویل کالا</label>
                                    <div className='input-section'>                                                 
                                    
                                        <input   type="email" value={RecTime} onChange={e=>setRecTime(e.target.value)} placeholder="لطفا زمان مورد نظر خود را بنویسید"/>
                                    </div> 
                                </div>
                                <div className='realy-last'><div><span>مبلغ قابل پرداخت</span>:{Paytotprice}</div><div >ثبت نهایی و پرداخت</div></div>
                               
        </div>
    );
};

export default Cart2;