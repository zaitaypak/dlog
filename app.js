import BILL_SELECT, { BILL_DETAILS } from "./API/bill.js";
import App from "./component/App.js";
import { locations } from "./convert.js";
import { attach } from "./reducer/store.js";

console.log('OK')
attach(App, document.getElementById('root'))

export function BILL_CLICK(number){
BILL_SELECT(number).then(imgs => dispatch('GET_IMAGES',imgs))
BILL_DETAILS(number).then(details => dispatch('GET_INFO',details))
}

$(document).on('click', "#button_get", function () {
  let inp = $("#numbers")
  let string = inp.val()
  console.log("🚀 ~ file: app.js:17 ~ substring", string)
  checkthenumber(string)
})

function checkthenumber(string){
    let substring = "SBS"
    let res = locations(substring,string)
    dispatch('GET_SBS',res)
}

$(document).on('click', ".SBS_number", function () {
  let number = $(this)[0].innerText
  console.log("🚀 ~ file: app.js:29 ~ number", number)
  BILL_CLICK(number)
})

$(document).on('click', ".SBS_button", function () {
  let number = $(this).attr('id')
  console.log("🚀 ~ file: app.js:29 ~ number", number)
  BILL_CLICK(number)
  window.print();
})

$(document).on('click', "#lower", function () {
  let sb = $(this).attr('sb')
  let number = $(this).attr('index')
  console.log("🚀 ~ file: app.js:42 ~ number", number)
  if(number == 0){
    return
  }else{
    BILL_CLICK(sb)
    let n = Math.floor(number) - 1
    dispatch('index_change', n)
  }
})

$(document).on('click', "#higher", function () {
  let sb = $(this).attr('sb')
  let number = $(this).attr('index')
  let max = Math.floor($(this).attr('max')) -1 
  console.log("🚀 ~ file: app.js:52 ~ number", number)
  if(number == max){
    return
  }else{
    BILL_CLICK(sb)
    let n = Math.floor(number) + 1
    dispatch('index_change', n)
  }
})