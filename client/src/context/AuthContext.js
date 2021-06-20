import Axios from 'axios';
import React, {createContext,useEffect,useState } from 'react';

export const AuthContext = createContext();

const  AuthContextProvider = (props) => {
  const [userinfo, setUserinfo] = useState({token:"",user:undefined});
  const [ oncartprosses, setProsses] = useState(false);
 
  

  useEffect(()=>{

/*
    console.log('i am here beor ');
    const checklogedin=async()=>{
    const token=localStorage.getItem("hitoken");
    console.log(token);
    if (token===null){

      console.log('i am here beor 3 ');
localStorage.setItem('hitoken','');
token='';
    }else{
      console.log('i am here beor 2 ');
const restoken=await Axios.post("http://localhost:8088/users/tokenlogin",null,{headers:{"xtoken":`${token}`}});
console.log(restoken);
if(restoken.status==200){
  setUserinfo({token,user:restoken.data})
    }else{}
  
      
    }
  }
  
*/
  
  },[])

  return (
    <AuthContext.Provider value={{userinfo,setUserinfo,oncartprosses, setProsses}}>
      {props.children}
    </AuthContext.Provider>
  )
}

 
export default AuthContextProvider;
