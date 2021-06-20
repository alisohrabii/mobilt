import { isCompositeComponentWithType } from "react-dom/test-utils";

const mobstuff=['لوازم جانبی گوشی','گلس گوشی','پاور بانک','شارژر','پایه نگهدارنده','کاور '];
const mob=['موبایل','سامسونگ','الجی','شیوآمی','آیفون','اچ تی سی','هوآوی','بلک بری']
const lapstuff=['لوازم لپتاپ','کیف و کوله','کابل صدا']
const camera=['دوربین','دوربین عکاسی دیجیتال','دوربین ورزشی','دوربین چاپ سریع']
const lap=['لپتاپ']
const computer=['کامپیوتر و قطعات جانبی','موس','کیبورد','هندزفری','مانیتور','پرینتر','کیس های اسمبل شده','دسته بازی']
const tablet=['تبلت'];
export const Digi={a:mob,b:lap,c:tablet,d:mobstuff,h:computer,k:lapstuff,l:camera};
const man=['لباس مردانه','پیراهن ','شلوار','تیشرت','کت و کاپشن','لباس زیر'];
const women=['لباس زنانه','روسری','پیراهن','مانتو','شلوار زنانه','لباس زیر','کت و کاپشن'];
const things=['اکسسوری ','کمربند','کیف','کقش'];

const child=['پوشاک کودک','نوزاد ','دخترانه','پسرانه'];
const sport=['پوشاک ورزشی','پوشاک ورزشی مردانهه','پوشاک ورزشی زنانه'];
export const cloths={aa:man,bb:women,cc:things,dd:child,hh:sport};
const kith=['لوازم آشپزخانه','یخجال','ماکرویو','اجاق گاز','هود و هواکش','سینک ظرفشویی'];
const manz=['وسایل منزل','آباژور','لوستر','فرش و موکت','میز تحریر','کمد'];
export const Furnture={as:kith,mm:manz};
const lavbar=[' لوازم شخصی برقی','سشوار','ماشین اصلاح سر وصورت','اتو مو حالت دهنده','مسواک برقی'];
const aray=['ابزار های سالمتی','فشار سنج','تب سنج','ترازو','ماساژور','تست قند'];
const arr=['آرایش صورت'];
const arr2=['آرایش مو'];
export const Beauty={as:arr,mm:arr2,ppo:aray,fd:lavbar};
const game=['ps5'];
const game1=['xbox'];
const game3=['دسته بازی'];
export const Gaming={asa:game1,mms:game,ppor:game3};