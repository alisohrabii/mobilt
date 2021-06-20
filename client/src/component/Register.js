import React,{useState,useContext} from 'react';
import Axios from 'axios';
import {useHistory} from "react-router-dom";
import lockphoto from '../images/lock3.svg';
import userphoto from '../images/user.svg';
import lastphoto from '../images/users.svg';
import phonephoto from '../images/smartphone.svg';
import enterphoto from '../images/enter.svg';
import registerpagephoto from '../images/register-page.svg';
import emailphoto from '../images/email.svg';

import {AuthContext} from '../context/AuthContext';
import './Login.css';
import {ProductContext} from '../context/ProductContext';

   

const Register = (props) => {
    const history=useHistory();
    const [mobnumber, setMobnumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastname]=useState('');
  const [name, setName]=useState('');
  const [errMssage, setErrMssage]=useState('');
  


  const {userinfo,setUserinfo,oncartprosses}=useContext(AuthContext);    
  const {nextcart}=useContext(ProductContext);    
  const onRegister=async()=>{
    const tryfetch=async()=>{
        try{
        const data={email:email,password:password,mobnumber:mobnumber,name:name,lastname:lastname}
        const registerAction=await Axios.post("http://localhost:8088/users/register",data);
        if(registerAction.status==200){
            const loginAction=await Axios.post("http://localhost:8088/users/login",data);
            if(loginAction.status==200){console.log(loginAction.data);
                localStorage.setItem('hitoken',loginAction.data.token);
                setUserinfo({user:loginAction.data.user,token:loginAction.data.token});
if(oncartprosses){
    nextcart({user:loginAction.data.user,token:loginAction.data.token});
}else{props.history.push('/');}
          }} }catch(err){

            
console.error(err.response.data.mss);

setErrMssage(err.response.data.mss);
 
           }}
   const validation=()=>{
if(email&&lastname&&password&&name&&mobnumber){
if(password.length>6){
if (mobnumber.length==11){
console.log("okkkkk");
    return true;
}else{
    let mssa='شماره موبایل باید 11 رقمی  باشد'
    return mssa;

}


}else{
    let mssa='پسورد باید حداقل 6  کاراکتر باشد';
return mssa;
}



}else{
    let mssa=' لطفا تمام فیلد ها را پر کنید'
    return mssa;

}
  }

if (validation()==true){
    console.log("88888")
    
    tryfetch()}else{
    setErrMssage(validation())
};

}


const  onLoginpage=()=>{
    history.push('/Login');
        }
    

    return (
        <div className='center-box'>
        
        <div id='register-section' >
                <span>ثبت نام</span>              
                <div id='form' className='login-form'>
                     <div>
                        <img className='login-image' src={registerpagephoto} width="300" height="400" />
                     </div>
                     <div className='login'>
                                <div >
                                    <label  className="ness">نام</label>
                                    <div className='input-section'>                                                 
                                        <img src={userphoto} width="16" height="16" />
                                        <input   type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="نام خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div>                          
                                        <label  className="ness">نام خانوادگی </label>
                                        <div className='input-section'>            
                                            <img src={lastphoto} width="18" height="18" />               
                                            <input type="text" value={lastname} onChange={e=>setLastname(e.target.value)} placeholder=" نام خانوادگی خود را وارد نماید " className="register-input" ></input>
                                        </div>
                                </div>
                                <div >
                                    <label  className="ness">شماره موبایل</label>
                                    <div className='input-section'>                                                 
                                        <img src={phonephoto} width="20" height="20" />
                                        <input   type="number" value={mobnumber} onChange={e=>setMobnumber(e.target.value)} placeholder="شماره موبایل خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">ایمیل خود را وارد نماید</label>
                                    <div className='input-section'>                                                 
                                        <img src={emailphoto} width="20" height="20" />
                                        <input   type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="ایمیل خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">پسورد خود را وارد نماید</label>
                                    <div className='input-section'>                                                 
                                        <img src={lockphoto} width="20" height="20" />
                                        <input   type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="پسورد  خود را وارد کنید"/>
                                    </div> 
                                </div>




                               <div className='button-container'>
                                    <img src={enterphoto} width="26" height="26" />                  
                                    <div className="register-buttom" onClick={onRegister}  >ثبت نام</div>
                               
                               </div>
                               <div className="err-mssage">{errMssage}</div>
                               <div  className='changepage' onClick={onLoginpage}><p>قبلا ثبت نام کرده ام</p><p>وارد شوید</p></div>
                      </div>
                

                 </div>
            </div>
                           
     
        </div>
    );
};

export default Register;