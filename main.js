let currency_base="GBP"
let api="aebc0b80457164b375c7f496"
let base_currency =""
let target_currency=""
let rate=$("#rate")
let result=$("#target_amount")
let inputAmount=$("#amount")
const fromLabel= $("#base_currency_container")
const toLabel=$('#target_currency_container')
let convert_Btn=$('#convertBtn')

let resultNumber


  // let GBPinput=prompt("Enter GBP amount")
  // console.log("GBP amount is", GBPinput)
 
import {countryList} from "./countryCode.js"
$.each(countryList, function (index, element) {
  
  $("<option>")
    .text(element)
    .attr("value", element)
    .appendTo(fromLabel)
  //  console.log("value index is",index);
    
});

$.each(countryList, function (index, element) {
  // console.log("foreach function works");
  $("<option>")
    .text(element)
    .attr("value", element)
    .appendTo(toLabel)
    
});

convert_Btn.on('click',function(){
  console.log("button is clicked")
  console.log("inputAmount is",inputAmount.val())

  base_currency =fromLabel.val()
 target_currency=toLabel.val()

 console.log("from label is",base_currency)
 console.log("To label is",target_currency)

fetch('https://v6.exchangerate-api.com/v6/'+api+'/pair/'+base_currency+'/'+target_currency)
.then(res => res.json())
.then(data => {console.log(data);
 
rate.text(data.conversion_rate);
console.log("type of inputAmount is",typeof(inputAmount.val()))
let inputAmountNumber=parseFloat(inputAmount.val())
console.log("type of inputamountNumber is", typeof(inputAmountNumber),"and inputamountNumber is",inputAmountNumber)
const rate_num_form=(data.conversion_rate)
console.log("rate_num_form is",rate_num_form)
resultNumber=(inputAmountNumber*rate_num_form)
console.log("resultNumber is",resultNumber)
console.log("result number is",typeof(resultNumber))

result.text(resultNumber)
})

// .then( ()=>{
//   let resultNumber=inputAmountNumber*rate
//   console.log("resultNumber is",resultNumber)
//   console.log("result number is",typeof(resultNumber))})

.catch(err=>err())
})



// let finalMoney=resultNumber.toString()
// console.log("type of resultNumber is",finalMoney)

// result.text(finalMoney)



