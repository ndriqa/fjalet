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
let texts = document.querySelectorAll(".zgjidhja input");
for (let i = 0; i < 4; i++) {
    checkers[i].onclick = check;
    texts[i].onfocus = removeShake;
}

let fjalet = [document.querySelectorAll("#a .fjala"),
document.querySelectorAll("#b .fjala"),
document.querySelectorAll("#c .fjala"),
document.querySelectorAll("#d .fjala"),]

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let ll = String.fromCharCode(`${97 + i}`); //little letter
        fjalet[i][j].querySelector("p").innerText = asociacioni[`${ll + (j + 1)}`];
        fjalet[i][j].onclick = hapeFjalen;
    }
}
document.querySelector("#perfundimtarja button").onclick = perfundimtarja;
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
    console.log(answer, asociacioni.a, s);
    if (answer != "") {
        if (answer === asociacioni[s]) {
            document.querySelector(`#${s} .zgjidhja`).classList.add("guessed");
            document.querySelector(`#${s} button`).style.display = "none";
        } else {
            document.querySelector(`#${s} .zgjidhja`).classList.add("wrong");
        }
    }
}
function hapeFjalen(event) {
    if (event.target.classList.contains("mbuloja")) {
        event.target.classList.toggle("out-of-bounds");
    }
}
function perfundimtarja() {
    let pergj = document.querySelector("#perfundimtarja input").value;
    console.log(pergj);
    if (pergj === asociacioni.perfundimtarja) {
        document.querySelector(`#perfundimtarja`).classList.add("guessed");
        document.querySelector(`#perfundimtarja button`).style.display = "none";
    } else {
        document.querySelector(`#perfundimtarja`).classList.add("wrong");
    }

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
function removeShake(event){
    event.target.parentElement.classList.remove("wrong");
}