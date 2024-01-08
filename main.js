let currency_base="GBP"
let api="aebc0b80457164b375c7f496"
let base_currency ="GBP"
let target_currency="EUR"
let rate=$("#rate")
let result=$("#target_amount")
let inputAmount=$("#amount")
const fromLabel= $("#base_currency_container")

  // let GBPinput=prompt("Enter GBP amount")
  // console.log("GBP amount is", GBPinput)
 
import {countryList} from "./countryCode.js"
$.each(countryList, function (index, element) {
  console.log("foreach function works");
  $("<option>")
    .text(element)
    .attr("value", element)
    .appendTo(fromLabel);
});

// fetch('https://v6.exchangerate-api.com/v6/'+api+'/pair/'+base_currency+'/'+target_currency)
// .then(res => res.json())
// .then(data => {console.log(data);
// rate.text(data.conversion_rate);
// }

// )
// .catch(err=>err())

function convert(){
    console.log("inputAmount is", inputAmount.val());
    let target_result = inputAmount.val() * parseFloat(rate.text());
    console.log("target result is", target_result);
    result.text(target_result)
}