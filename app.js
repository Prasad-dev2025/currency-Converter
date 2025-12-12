const BASE_URL="https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");

const btn=document.querySelector(" form button");

const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");



const updateExchangeRate=async()=>{
       const amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal===""|| amtVal< 1){
        amtVal=1;
        amount.value="1";
    }
  const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let fromData=fromCurr.value.toLowerCase();
  let toData=toCurr.value.toLowerCase();
let response=await fetch(URL);
let data=await response.json();
let finalAmount=data[fromData][toData]*(amtVal);
msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
}

for(let select of dropdowns){
    for(currCode in countryList){
    let newOption=document.createElement("option");
   newOption.innerText=currCode;
   newOption.value=currCode;
   if(select.name==="from"&&currCode==="USD"){
    newOption.selected=true;
   }
   else if(select.name==="to"&&currCode==="INR"){
    newOption.selected=true;
}
   select.append(newOption);
   
}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
})
}

const updateFlag=(element)=>{
    let currCode=element.value;
   let countryCode=countryList[currCode];
let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
let img=element.parentElement.querySelector("img");
img.src=newSrc;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
 updateExchangeRate();
});

document.addEventListener("DOMContentLoaded", () => {
    updateExchangeRate();
});


function hello(){
    console.log("hello");
}

hello();