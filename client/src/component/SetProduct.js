
import React,{useState,useContext} from 'react';
import Axios from 'axios';
import {useHistory} from "react-router-dom";
import './Login.css';
import Dropzone from 'react-dropzone';
const SetProduct = (props) => {
    const history=useHistory();
    const [discount, setDiscount] = useState(0);
    const [tecnicalinfo, setTecnicalinfo] = useState([]);
    const [garanty, setGaranty] = useState('');
    const [comment, setComment] = useState([]);
    const [brand, setBrand] = useState('');
    const [TecName, setTecName] = useState('');
    const [TecValue, setTecValue] = useState('');
    const [TecType, setTecType] = useState('');
   
    const [DeName, setDeName] = useState('');
    const [DeValue, setDeValue] = useState('');
    const [Deimage, setDeimage] = useState('');
   
    const [likes, setLikes] = useState([]);
  const [like, setLike] = useState('');
  const [offer, setOffer] = useState(false);
 
 
  const [gift, setGift] = useState('');
  
 
    const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0);
  const [detail, setDetail]=useState([]);
  const [color, setColor]=useState('');
  const [colors, setColors]=useState([]);
  const [solded, setSolded] = useState(0);
  const [parcham, setParcham]=useState('');
  const [engname, setEngname]=useState('');
 
  const [errMssage, setErrMssage]=useState('');
  const [images, setImages] = useState([]);
  const [existnumber, setExistnumber] = useState(0);
 
  const handlrTecnicalInfo=()=>{

setTecnicalinfo([...tecnicalinfo,{name:TecName,value:TecValue,brnch:TecType}]);

setTecName('');
setTecValue('');
  }
  
  const handlrDetail=()=>{

    setDetail([...detail,{name:DeName,value:DeValue,image:Deimage}]);
    
    setDeName('');
    setDeValue('');
      }

  const handelTecnicalinfoDelet=(name)=>{
const tempT=tecnicalinfo.filter(item=>item.name!==name);
setTecnicalinfo([...tempT]);

  }
  
  const removelike=(index)=>{
      let arr=[...likes];

arr.splice(index,index);
setLikes(arr);

  }
  const handelcolors=()=>{
setColors([...colors,color])

  }
  
  const handellikes=()=>{
    setLikes([...likes,like])
    
      }
      
  const handeloffer=()=>{
   const w2= document.getElementById("offer-sup").value
    if(w2=='yes'){
        setOffer(true);
    }else{
        setOffer(false);
    }
      }
 const ondrop=(files)=>{

let formdata= new FormData();
const config={

    header:{"content-type":"multipart/form-data"}
}
formdata.append("file",files[0]);
Axios.post("http://mobilt.herokuapp.com/product/UploadProductImage",formdata,config).then(
  response =>{
if(response.data.success){
setImages([...images,response.data.image]);
console.log([...images,response.data.image])
  }else{


    }}
)



 }
  const onRegister=async()=>{

let priceafter=(price*(100-discount))/100;


    //function
    console.log(detail);
    const tryfetch=async()=>{
        try{
            console.log(tecnicalinfo);
        const data={name:name,
            price:price,
             discount:discount,
             color:colors,
             engname:engname,
             parcham:parcham,
             offer:offer,
             likes:like,
             gift:gift,
             solded:solded,
             discribe:detail,
             brand:brand,
             priceafter,
             garanty:garanty,
             tecnicalinfo:tecnicalinfo,
              existnumber:existnumber,
             images:images,
             type:type};

             console.log(data);
        const registerAction=await Axios.post("http://mobilt.herokuapp.com/product/Setproduct",data);
        console.log(registerAction);
             }catch(err){
if(err.response){
            
console.error(err.response.data.mss);

setErrMssage(err.response.data.mss);
}else{setErrMssage('ارتباط با سرور قطع میباشد');} 
           }}

//validatin


   const validation=()=>{
if(name&&price&&detail&&type){

    return true;
}else{
    let mssa=' لطفا تمام فیلد ها را پر کنید'
    return mssa;

}
  }
//try to get data
if (validation()==true){
    console.log("88888")
    
    tryfetch()}else{
    setErrMssage(validation())
};

}


    

    return (
        <div className='center-box'>
        <div className="dropzone" style={{display:'flex'}}>
             <div className="dropzone-one">
                  <Dropzone
                  onDrop={ondrop}
                  multiple={false}
                  maxSize={8000000}
                  >


                      {({getRootProps,getInputProps})=>(
                         <div style={{width:"350px",height:"240px",border:"1px solid rgb(130,130,130)",display:"flex",alignItems:"center",justifyContent:"center"}}
                         {...getRootProps()}
                         >
                             <input {...getInputProps()}></input> 

                         <span>add photo</span>


                         </div>
                          


                      )


                      }
                  </Dropzone>



             </div>
      
             <div style={{display:'flex',overflow:"scroll",width:"450px"}} className="dropzone-two">
             {images.map((image,index)=>(
                 <div >
                 <img src={`http://mobilt.herokuapp.com/${image}`} style={{width:"200px ",height:'200px',minWidth:"300px"}}/>

                 </div>


                 )
             )}



             </div>
      



        </div>
        <div id='register-section' >
                <span>ثبت م</span>              
                <div id='form' className='login-form'>
                     <div>
                    
                     </div>
                     <div className='login'>
                                <div >
                                    <label  className="ness">نام</label>
                                    <div className='input-section'>                                                 
                    
                                        <input   type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="نام خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">نام انگلیسی</label>
                                    <div className='input-section'>                                                 
                    
                                        <input   type="text" value={engname} onChange={e=>setEngname(e.target.value)} placeholder="نام خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div >
                                    <label  className="ness">و ضعیت پرچم داری</label>
                                    <div className='input-section'>                                                 
                    
                                        <input   type="text" value={parcham} onChange={e=>setParcham(e.target.value)} placeholder="نام خود را وارد کنید"/>
                                    </div> 
                                </div>
                                <div>                          
                                        <label  className="ness">قیمت </label>
                                        <div className='input-section'>            
                             
                                            <input type="text" value={price} onChange={e=>setPrice(e.target.value)} placeholder=" قیمت  " className="register-input" ></input>
                                        </div>
                                </div>
                                <div>                          
                                        <label  className="ness">فروش رفته</label>
                                        <div className='input-section'>            
                             
                                            <input type="text" value={solded} onChange={e=>setSolded(e.target.value)}  className="register-input" ></input>
                                        </div>
                                </div>
                                <div>                          
                                        <label  className="ness">تعداد موجود در انبار</label>
                                        <div className='input-section'>            
                             
                                            <input type="text" value={existnumber} onChange={e=>setExistnumber(e.target.value)}  className="register-input" ></input>
                                        </div>
                                </div>
                                <div>                          
                                        <label  className="ness">برند</label>
                                        <div className='input-section'>            
                             
                                            <input type="text" value={brand} onChange={e=>setBrand(e.target.value)} className="register-input" ></input>
                                        </div>
                                </div>
                                <div>                          
                                        <label  className="ness">گارانتی</label>
                                        <div className='input-section'>            
                             
                                            <input type="text" value={garanty} onChange={e=>setGaranty(e.target.value)} className="register-input" ></input>
                                        </div>
                                </div>
                                <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>                          
                                        <div className="ness">مشخصات فنی </div>
                                        <div style={{width:"40%"}} >            
                                           
                                             <input type="text" value={TecType} onChange={e=>setTecType(e.target.value)} placeholder='ن' className="register-input" ></input>
                                             <input type="text" value={TecName} onChange={e=>setTecName(e.target.value)} placeholder='نام مشخصه' className="register-input" ></input>
                                           
                                            
                                            <input type="text" value={TecValue} onChange={e=>setTecValue(e.target.value)} placeholder="مقدار مشخصه" className="register-input" ></input>
                                           
                                            <button onClick={handlrTecnicalInfo}>add</button>
                                        </div>
                                        <div >{tecnicalinfo.length >0 &&tecnicalinfo.map(item=>{
                                             
                                           return  <div onClick={()=>handelTecnicalinfoDelet(item.name)}><span>{item.name}</span>     ::    <span>{item.value}</span></div>                      

                                        })}</div>
                                </div>
                                <div >
                                    <label  className="ness">تخفیف</label>
                                    <div className='input-section'>                                                 
                            
                                        <input   type="number" value={discount} onChange={e=>setDiscount(e.target.value)} placeholder="میزان تخفیف را وارد کنید"/>
                                    </div> 
                                </div>
                                <div  style={{marginTop:"20px"}}>
                                    <label  className="ness">color</label>
                                    <div className='input-section'>                                                 
                                        
                                        <input   type="text" value={color} onChange={e=>setColor(e.target.value)} placeholder="color"/>
                                       </div> 
                                </div>
                                <div><button onClick={ handelcolors}>add color</button></div> 
                                <div style={{marginTop:"30px"}} >
                                    <label  className="ness">likes</label>
                                    <div className='input-section'>                                                 
                                        
                                        <input   type="text" value={like} onChange={e=>setLike(e.target.value)} placeholder="like"/>
                                       </div> 
                                </div>
                                
                                <div   style={{marginTop:"30px"}}>
                                    <label  className="ness">دسته بندی کالا</label>
                                    <div className='input-section'>                                                 
                                    
                                        <input   type="text" value={type} onChange={e=>setType(e.target.value)} placeholder="TYpe"/>
                                    </div> 
                                </div>
                                <div  style={{marginTop:"30px"}} >
                                    <label  className="ness">هدیه</label>
                                    <div className='input-section'>                                                 
                                    
                                        <input   type="text" value={gift} onChange={e=>setGift(e.target.value)} placeholder="TYpe"/>
                                    </div> 
                                </div>
                                <div  style={{marginTop:"30px"}}>
                                    <label  className="ness">پیشنهاد شگفت انگیز</label>
                                    <div className='input-section'>                                                 
                                    <select id='offer-sup'>
                                    <option value='no'>NO </option>
                                        <option value='yes'>YES</option>
                                    </select>
                                    <div><button onClick={ handeloffer}> add offer</button></div> 
                               
                                       </div> 
                                      
                                </div>
                                <div >
                                    <label  className="ness">اdetail</label>
                                                                            
                                    
                                              
                                              <input type="text" value={DeName} onChange={e=>setDeName(e.target.value)} placeholder='نام مشخصه' className="register-input" ></input>
                                           
                                            
                                            <input type="text" value={DeValue} onChange={e=>setDeValue(e.target.value)} placeholder="مقدار مشخصه" className="register-input" ></input>
                                           
                                            <button onClick={handlrDetail}>add</button>
                                    
                                
                                </div>





                               <div className='button-container'>
                               
                                    <div className="register-buttom" onClick={onRegister}  >ثبت نام</div>
                               
                               </div>
                               <div>{errMssage}</div>
                                            </div>
                

                 </div>
            </div>
                           
     
        </div>
    );
};

export default SetProduct;