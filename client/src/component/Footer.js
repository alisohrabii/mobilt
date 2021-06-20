import React ,{ useContext }   from 'react';
import './footer.css';
import {PhoneIcon,ClockIcon,EmailIcon,InstagramIcon,FacebookIcon,TelegramIcon,TwitterIcon} from '../util/Icons';
const Footer = () => {

  
    return (
        <React.Fragment>
          <div className='footer-total'>
  <div className="footer-first-section-con">
                    <div className="footer-first-section">
                     <div ><div>آدرس ایمیل</div><div><EmailIcon color='rgb(146, 150, 150)' width="22px"/></div></div>
                     <div> verloka@gmail.com</div>
                    </div>

                    
                    <div  className="footer-first-section">
                    <div ><div>شماره تماس</div><div><PhoneIcon color='rgb(146, 150, 150)' width="20px"/></div></div>
                      <div>0918-3384566</div>
                    </div>

                    <div className="footer-first-section">
                    <div ><div>ساعات پاسخگویی</div><div><ClockIcon color='rgb(146, 150, 150)' width="20px"/></div></div>
                      <div>شنبه تا چهار شنبه ساعت 8-19</div>
                      <div>پنج شنبه 8-13</div>
                    </div>



  
 <div className="tird-section">
   <div >
   دریافت آخرین اخبار 
    </div>
    <div className="email "><input type="email"  placeholder="ایمیل خود را  وارد کنید"/><div  >ارسال</div></div>
    </div>
    



   </div>


         
   
   <div className="footer-secound-section-con">
                    <div >
                    <div  > 
                    راهنمای سفارش
                    </div>
                    <div>
                    سوالات متداول
                    </div>
                    <div >
                    سرویس ارسال
                    </div>
                    <div>
                    طریقه پرداخت
                    </div>
                    </div>

                    
                    <div className="secound-section">
                    <div className="">
                    دسترس
                    </div>
                    <div >همکاری با ما</div>
                    <div >
                    راه های ارتباطی
                    </div>
                    <div >
                    ساعات کاری
                    </div>
                    </div>


  
 <div className="footer-images">
 <img width='170px' src='http://localhost:8088/uploads/footer-1.png'/>
 <img  width='170px' src='http://localhost:8088/uploads/footer-2.png'/>
 <img  width='170px' src='http://localhost:8088/uploads/footer-3.png'/>
     </div>
  
<div style={{marginTop:'12px'}}>
  <TwitterIcon width='33px' color="rgb(177,177,177)" />
  <TelegramIcon   width='33px' color='rgb(177,177,177)' />
  <FacebookIcon   width='33px' color='rgb(177,177,177)' />
  
  <InstagramIcon  width='33px' color='rgb(177,177,177)'  />
</div>

  






    





      




     









  </div>
   

<div style={{textAlign:"center" , padding:"12px",fontSize:"14px"}}> کلیه حقوق این سایت متعلق به شرکت نو اندیشان گستر غرب میباشد</div>
 
   </div>
</React.Fragment>
    );
};

export default Footer;