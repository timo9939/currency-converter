let currency_base="GBP"
let api="aebc0b80457164b375c7f496"
let base_currency ="GBP"
let target_currency="EUR"
let rate=$("#rate")
let result=$("#target_amount")

  // let GBPinput=prompt("Enter GBP amount")
  // console.log("GBP amount is", GBPinput)
  
fetch('https://v6.exchangerate-api.com/v6/'+api+'/pair/'+base_currency+'/'+target_currency)
.then(res => res.json())
.then(data => {console.log(data);
rate.text(data.conversion_rate);}
)
.then()
.catch(err=>err())