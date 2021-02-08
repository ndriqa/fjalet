import ass from "./asociacionet.js";

const pikeFjale = 10;
const pikeKolone = 20;
const pikePerfundimtareje = 50;

const asociacionID = Math.floor(Math.random()*ass.length);
const asociacioni = ass[asociacionID];

document.querySelector("#lojeere").onclick = lojeere;
document.querySelector("#dorezohem").onclick = dorezohem;
document.querySelector("#hapifjalet").onclick = hapifjalet;

let fjaletA = document.querySelectorAll("#a .fjala");
let fjaletB = document.querySelectorAll("#b .fjala");
let fjaletC = document.querySelectorAll("#c .fjala");
let fjaletD = document.querySelectorAll("#d .fjala");

function check(a){

}
function perfundimtarja(){

}
function hapifjalet(){
    document.querySelectorAll(".mbuloja").forEach(function(element){
        element.classList.toggle("out-of-bounds")
    })
}
function dorezohem(){

}
function lojeere(){
    document.querySelectorAll(".mbuloja").forEach(function(element){
        element.classList.remove("out-of-bounds")
    })
}