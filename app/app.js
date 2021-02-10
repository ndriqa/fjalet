import ass from "./asociacionet.js";

const pikeFjale = 10;
const pikeKolone = 20;
const pikePerfundimtareje = 50;

updateName();

let piketMomentale = 0;
let won = false;

let asociacionID = Math.floor(Math.random() * ass.length);
let asociacioni = ass[asociacionID];

document.querySelector("#lojeere").onclick = lojeere;
document.querySelector("#dorezohem").onclick = dorezohem;
document.querySelector("#ndihme").onclick = ndihmo;
document.querySelector("#perfundimtarja button").onclick = perfundimtarja;


let checkers = document.querySelectorAll(".zgjidhja button");
let texts = document.querySelectorAll(".zgjidhja input");

var counter = 1;

for (let i = 0; i < 4; i++) {
    checkers[i].onclick = check;
    texts[i].onfocus = removeShake;
}

let fjalet = [
    document.querySelectorAll("#a .fjala"),
    document.querySelectorAll("#b .fjala"),
    document.querySelectorAll("#c .fjala"),
    document.querySelectorAll("#d .fjala"),]

function initializeWords(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let ll = String.fromCharCode(`${97 + i}`); //little letter
            fjalet[i][j].querySelector("p").innerText = asociacioni[`${ll + (j + 1)}`];
            fjalet[i][j].onclick = hapeFjalen;
        }
    }    
}
initializeWords();

function check(event) {
    let answer = "";
    let s = event.target.dataset.num;
    switch (s) {
        case "a":
            answer = document.querySelector("#zgjidhjaA").value;
            break;
        case "b":
            answer = document.querySelector("#zgjidhjaB").value;
            break;
        case "c":
            answer = document.querySelector("#zgjidhjaC").value;
            break;
        case "d":
            answer = document.querySelector("#zgjidhjaD").value;
            break;
        default:
            break;
    }
    if (answer != "") {
        if (answer === asociacioni[s]) {
            document.querySelector(`#${s} .zgjidhja`).classList.add("guessed");
            document.querySelector(`#${s} button`).style.display = "none";
            let teHapura = document.querySelectorAll(`#${s} .out-of-bounds`).length;
            piketMomentale += (pikeKolone + (pikeFjale*(4-teHapura)));
            updateScore();
        } else {
            document.querySelector(`#${s} .zgjidhja`).classList.add("wrong");
        }
    }
    updateName();
}
function hapeFjalen(event) {
    if (event.target.classList.contains("mbuloja")) {
        if(counter === 1){
            event.target.classList.add("first-tempo");
            counter = 2;
        } else {
            event.target.classList.add("second-tempo");
            counter = 1;
        }
        event.target.classList.toggle("out-of-bounds");
    }
}
function perfundimtarja() {
    let pergj = document.querySelector("#perfundimtarja input").value;
    if (pergj === asociacioni.perfundimtarja) {
        document.querySelector(`#perfundimtarja`).classList.add("guessed");
        document.querySelector(`#perfundimtarja button`).style.display = "none";
        let kolonaPaHapur = 4 - document.querySelectorAll(".kolonat guessed").length;
        piketMomentale += (pikePerfundimtareje + (pikeKolone * kolonaPaHapur));
        won = true;
        updateScore();
        updateView();
    } else {
        document.querySelector(`#perfundimtarja`).classList.add("wrong");
    }

}
function showButtons(){
    document.querySelectorAll(".zgjidhja button").forEach(function(element){
        element.style.display = "block";
        element.parentElement.classList.remove("guessed");
        element.parentElement.querySelector("input").value = "";
    });
    let butoni = document.querySelector("#perfundimtarja button")
    butoni.style.display = "block";
    butoni.parentElement.classList.remove("guessed");
    butoni.parentElement.querySelector("input").value = "";
}
function hapifjalet() {
    document.querySelectorAll(".mbuloja").forEach(function (element) {
        if(counter === 1){
            element.classList.add("first-tempo");
            counter = 2;
        } else {
            element.classList.add("second-tempo");
            counter = 1;
        }
        element.classList.add("out-of-bounds");
    });
}
function dorezohem() {
    hapifjalet();
    let tempa = document.querySelector("#zgjidhjaA");
    let tempb = document.querySelector("#zgjidhjaB");
    let tempc = document.querySelector("#zgjidhjaC");
    let tempd = document.querySelector("#zgjidhjaD");
    let perfu = document.querySelector("#perfundimtarja input");

    tempa.value = asociacioni.a;
    tempb.value = asociacioni.b;
    tempc.value = asociacioni.c;
    tempd.value = asociacioni.d;
    perfu.value = asociacioni.perfundimtarja;

    tempa.parentElement.classList.add("guessed");
    tempb.parentElement.classList.add("guessed");
    tempc.parentElement.classList.add("guessed");
    tempd.parentElement.classList.add("guessed");
    perfu.parentElement.classList.add("guessed");

    document.querySelectorAll(".zgjidhja button").forEach(function(element){
        element.style.display = "none";
    })
    perfu.parentElement.querySelector("button").style.display = "none";
}
function lojeere() {
    document.querySelectorAll(".mbuloja").forEach(function (element) {
        element.classList.remove("out-of-bounds")
    });
    won = false;
    piketMomentale = 0;
    asociacionID = Math.floor(Math.random() * ass.length);
    asociacioni = ass[asociacionID];
    initializeWords();
    showButtons();
    updateScore();
    updateView();
}
function removeShake(event) {
    event.target.parentElement.classList.remove("wrong");
}
function updateScore(){
    let emri = document.querySelector("#emri").value;
    localStorage.setItem("emri", emri);
    document.querySelector("#piket").innerText = `${piketMomentale}`;
    document.querySelector("#tekstiFitues").innerText = `Shume urime, ${emri}!`;
    document.querySelector("#piketFituese").innerText = `${piketMomentale} pike`;
}
function updateView(){
    let info = document.querySelector("#info");
    let loja = document.querySelector("#asociacioni");
    let fituesi = document.querySelector("#fituesi");
    if(won){
        info.style.transition = ""
        loja.style.transition = ""
        fituesi.style.transition = "opacity 0.3s ease-in"
        info.style.opacity = 0;
        loja.style.opacity = 0;
        fituesi.style.opacity = 1;
    } else {
        info.style.transition = "opacity 0.3s ease-in"
        loja.style.transition = "opacity 0.3s ease-in"
        fituesi.style.transition = ""
        info.style.opacity = 1;
        loja.style.opacity = 1;
        fituesi.style.opacity = 0;
    }
}

function ndihmo(){
    let ndihma = document.querySelector("#ndihma");
    ndihma.classList.toggle("hape");
}
function updateName(){
    if(localStorage && localStorage.getItem("emri") !== ""){
        document.querySelector("#emri").value = localStorage.getItem("emri");
    } else {
        localStorage.setItem("emri", document.querySelector("#emri").value);
    }    
}