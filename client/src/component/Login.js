
import React,{useState,useContext} from 'react';
import Axios from 'axios';
import {useHistory} from "react-router-dom";
import lockphoto from '../images/lock3.svg';
import loginnphoto from '../images/login-page.svg';
import enterphoto from '../images/enter.svg';
import {ProductContext} from '../context/ProductContext';

import {AuthContext} from '../context/AuthContext';
import './Login.css';
import emailphoto from '../images/email.svg';

const Login = (props) => {
    const history=useHistory();
       const [emaillogin, setEmaillogin] = useState('');
    const [passwordlogin, setPasswordlogin] = useState('');
     const [errMssage, setErrMssage]=useState('');
   



    const {userinfo,setUserinfo,oncartprosses,setProsses}=useContext(AuthContext);    

    const {nextcart}=useContext(ProductContext);    

  const  onRegisterpage=()=>{
history.push('/Register');
    }




const  onLogin=()=>{
    const tryfetch=async()=>{
  try{

        const data={email:emaillogin,password:passwordlogin}
        const loginAction=await Axios.post("http://localhost:8088/users/login",data);
        if(loginAction.status==200){console.log(loginAction.data);
        localStorage.setItem('hitoken',loginAction.data.token);
        setUserinfo({user:loginAction.data.user,token:loginAction.data.token});
       
       
        if(oncartprosses){
            nextcart({user:loginAction.data.user,token:loginAction.data.token});
        }else{props.history.push('/');} 
       
  
        }
    }catch(err){



setErrMssage(err.response.data.mss);
    }
}
        
      
if(emaillogin&&passwordlogin){
    
    
    tryfetch();
}else{
    let mssa="لطفا ایمیل و پسورد خود را وارد کنید"
        setErrMssage(mssa);
    }  

}



   
    return (
        <div className='center-box'>
             
            <div id='login-section' >
                <span>ورود</span>              
                <div id='form' className='login-form'>
                     <div>
                        <img className='login-image' src={loginnphoto} width="300" height="300" />
                     </div>
                     <div className='login'>
                                <div >
                                    <label  className="ness">ایمیل</label>
                                    <div className='input-section'>                                                 
                                        <img src={emailphoto} width="20" height="20" />
                                        <input   type="text" value={emaillogin} onChange={e=>setEmaillogin(e.target.value)} placeholder="ایمیل خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div>                          
                                        <label  className="ness">کلمه عبور</label>
                                        <div className='input-section'>            
                                            <img src={lockphoto} width="18" height="18" />               
                                            <input type="password" value={passwordlogin} onChange={e=>setPasswordlogin(e.target.value)} placeholder="کلمه عبور " className="register-input" ></input>
                                        </div>
                                </div>
                               <div className='button-container'>
                                    <img src={enterphoto} width="26" height="26" />                  
                                    <div className="register-buttom" onClick={onLogin}  >ورود</div>
                               </div>
                               <div className="err-mssage">{errMssage}</div>
                             <div  className='changepage' onClick={onRegisterpage}><p> قبلا ثبت نام نکرده ام</p><p>ثبت نام</p></div>
       
                      </div>
                 </div>
            </div>
                           
     
 






        </div>
    );
};

export default Login;