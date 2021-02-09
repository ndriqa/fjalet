import ass from "./asociacionet.js";

const pikeFjale = 10;
const pikeKolone = 20;
const pikePerfundimtareje = 50;

let piketMomentale = 0;

const asociacionID = Math.floor(Math.random() * ass.length);
const asociacioni = ass[asociacionID];

document.querySelector("#lojeere").onclick = lojeere;
document.querySelector("#dorezohem").onclick = dorezohem;
document.querySelector("#hapifjalet").onclick = hapifjalet;

let checkers = document.querySelectorAll(".zgjidhja button");
for(let i = 0; i < 4; i++){
    checkers[i].onclick = check;
}

let fjalet = [  document.querySelectorAll("#a .fjala"),
                document.querySelectorAll("#b .fjala"),
                document.querySelectorAll("#c .fjala"),
                document.querySelectorAll("#d .fjala"), ] 

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        let ll = String.fromCharCode(`${97+i}`); //little letter
        fjalet[i][j].querySelector("p").innerText = asociacioni[`${ll + (j+1)}`];
        fjalet[i][j].onclick = hapeFjalen;
    }
}

function check(event) {
    let answer = "";
    let s = event.target.dataset.num;
    switch (s) {
        case 0:
            answer = document.querySelector("#zgjidhjaA").value;
            break;
        case 1:
            answer = document.querySelector("#zgjidhjaB").value;
            break;
        case 2:
            answer = document.querySelector("#zgjidhjaC").value;
            break;
        case 3:
            answer = document.querySelector("#zgjidhjaD").value;
            break;
        default:
            break;
    }
    console.log(s, answer, "hello");
}
function hapeFjalen(event){
    console.log(event.target);
    if(event.target.classList.contains("mbuloja")){
        event.target.classList.toggle("out-of-bounds");
    }
}
function perfundimtarja() {

}
function hapifjalet() {
    document.querySelectorAll(".mbuloja").forEach(function (element) {
        element.classList.add("out-of-bounds")
    });
}
function dorezohem() {

}
function lojeere() {
    document.querySelectorAll(".mbuloja").forEach(function (element) {
        element.classList.remove("out-of-bounds")
    })
}