export const pricestyle=(total)=>{
    let price=total;
    let kk =price.toString();
  let price2;
  if(kk.length>6){
  let ss=kk.substring(kk.length-6,kk.length-3)
  let nn=kk.substring(0,kk.length-6);
  nn += ",";
  nn += ss;
  nn += ",000";
  price2=nn;
  }else{let oo=kk.substring(kk.length-3,kk.length);
  price2 =kk.substring(0, kk.length-3);
  price2 += ",";
  price2 +=oo;
  }
  return price2;

}
export const pricediscount=(price,count,discount)=>{
  let discountprice=((price*discount)/100);
discountprice=discountprice*count;
discountprice=(Math.round(discountprice/100)*100);

return discountprice;

              }
            export  const priceafter=(price,count,discount)=>{

                let discountprice=((price*discount)/100);
                discountprice=discountprice*count;
let beforeprice=(price*count);
let afterprice=beforeprice-discountprice;
afterprice=(Math.round(afterprice/100)*100);

return afterprice ;
              }    