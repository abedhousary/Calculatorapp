let body = document.querySelector("body");
let toggler = document.querySelector(".toggler");
let CalcScreen = document.querySelector(".screen");
let keys = document.querySelectorAll(".key");
let title = document.querySelector(".title");
let label = document.querySelector(".label");
let Ticks = document.querySelectorAll(".tick");
let toggleBTN = document.querySelector(".toggle-btn");
let keyPad = document.querySelector(".keypad");
let delbtn = document.querySelector(".del");
let equalbtn = document.querySelector(".equal");
let resetbtn = document.querySelector(".reset")
let currentTick = 1;
// window.localStorage.setItem("currentTick", currentTick);

const themeTwo = {
    background: "hsl(0, 0%, 90%)",
    textColor: "hsl(60, 10%, 19%)",
    actionbtnColor: "hsl(0, 0%, 100%)",
    screenColor: "hsl(0, 0%, 93%)",
    toggleBg: "hsl(0, 5%, 81%)",
}
const themeThree = {
    background: "hsl(268, 75%, 9%)",
    textColor1: "hsl(52, 100%, 62%)",
    textColor2: "hsl(198, 20%, 13%)",
    actionbtnColor: "hsl(0, 0%, 100%)",
    screenColor: "hsl(268, 71%, 12%)",
    toggleBg: "hsl(0, 5%, 81%)",
}
// console.log(window.localStorage.currentTick);

let loadTheme = () => {
    switch (+window.localStorage.getItem("currentTick")) {
        case 1:
            toggler.classList.toggle("tick-one");

            break;
        case 2:
            toggler.classList.toggle("tick-two")
            body.style.background = themeTwo.background;
            CalcScreen.style.background = themeTwo.screenColor;
            CalcScreen.style.color = themeTwo.textColor;
            title.style.color = themeTwo.textColor;
            label.style.color = themeTwo.textColor;
            toggleBTN.style.background = themeTwo.toggleBg;
            keyPad.style.background = themeTwo.toggleBg;
            Ticks.forEach((e) => { e.style.color = themeTwo.textColor })
            keys.forEach((e) => { e.style.color = themeTwo.textColor })
            delbtn.style.color = "hsl(0, 0%, 100%)";
            equalbtn.style.color = "hsl(0, 0%, 100%)";
            equalbtn.style.background = "hsl(25, 98%, 40%)";
            delbtn.style.background = "hsl(185, 42%, 37%)";
            delbtn.style.boxShadow = "0px 5px 0px 0px hsl(185, 58%, 25%)";
            resetbtn.style.background = "hsl(185, 42%, 37%)";
            resetbtn.style.boxShadow = "0px 5px 0px 0px hsl(185, 58%, 25%)";
            resetbtn.style.color = "hsl(0, 0%, 100%)";
            break;
        case 3:
            body.style.background = themeThree.background;
            CalcScreen.style.background = themeThree.screenColor;
            CalcScreen.style.color = themeThree.textColor1;
            title.style.color = themeThree.textColor1;
            label.style.color = themeThree.textColor1;
            toggleBTN.style.background = "hsl(268, 71%, 12%)";
            keyPad.style.background = themeThree.screenColor;
            toggler.style.background = "hsl(176, 100%, 44%)"
            Ticks.forEach((e) => { e.style.color = themeThree.textColor1 })
            keys.forEach((e) => { e.style.color = themeThree.textColor1 })
            keys.forEach((e) => { e.style.background = "hsl(268, 47%, 21%)" })
            keys.forEach((e) => { e.style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)" })
            delbtn.style.color = "hsl(0, 0%, 100%)";
            equalbtn.style.color = "hsl(0, 0%, 100%)";
            equalbtn.style.background = "hsl(176, 100%, 44%)";
            equalbtn.style.boxShadow = "0px 5px 0px 0px hsl(177, 92%, 70%)";
            delbtn.style.background = "hsl(281, 89%, 26%)";
            delbtn.style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)";
            resetbtn.style.background = "hsl(281, 89%, 26%)";
            resetbtn.style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)";
            resetbtn.style.color = "hsl(0, 0%, 100%)";
            toggler.classList.toggle("tick-three")
            currentTick = 1;

            break;
        default:
            break;
    }
}

toggler.onclick = () => {
    console.log(currentTick);
    currentTick += 1;
    window.localStorage.currentTick = currentTick;
    switch (currentTick) {
        case 1:
            toggler.classList.toggle("tick-one");

            break;
        case 2:
            toggler.classList.toggle("tick-two")
            body.style.background = themeTwo.background;
            CalcScreen.style.background = themeTwo.screenColor;
            CalcScreen.style.color = themeTwo.textColor;
            title.style.color = themeTwo.textColor;
            label.style.color = themeTwo.textColor;
            toggleBTN.style.background = themeTwo.toggleBg;
            keyPad.style.background = themeTwo.toggleBg;
            Ticks.forEach((e) => { e.style.color = themeTwo.textColor })
            keys.forEach((e) => { e.style.color = themeTwo.textColor })
            delbtn.style.color = "hsl(0, 0%, 100%)";
            equalbtn.style.color = "hsl(0, 0%, 100%)";
            equalbtn.style.background = "hsl(25, 98%, 40%)";
            delbtn.style.background = "hsl(185, 42%, 37%)";
            delbtn.style.boxShadow = "0px 5px 0px 0px hsl(185, 58%, 25%)";
            resetbtn.style.background = "hsl(185, 42%, 37%)";
            resetbtn.style.boxShadow = "0px 5px 0px 0px hsl(185, 58%, 25%)";
            resetbtn.style.color = "hsl(0, 0%, 100%)";
            break;
        case 3:
            body.style.background = themeThree.background;
            CalcScreen.style.background = themeThree.screenColor;
            CalcScreen.style.color = themeThree.textColor1;
            title.style.color = themeThree.textColor1;
            label.style.color = themeThree.textColor1;
            toggleBTN.style.background = "hsl(268, 71%, 12%)";
            keyPad.style.background = themeThree.screenColor;
            toggler.style.background = "hsl(176, 100%, 44%)"
            Ticks.forEach((e) => { e.style.color = themeThree.textColor1 })
            keys.forEach((e) => { e.style.color = themeThree.textColor1 })
            keys.forEach((e) => { e.style.background = "hsl(268, 47%, 21%)" })
            keys.forEach((e) => { e.style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)" })
            delbtn.style.color = "hsl(0, 0%, 100%)";
            equalbtn.style.color = "hsl(0, 0%, 100%)";
            equalbtn.style.background = "hsl(176, 100%, 44%)";
            equalbtn.style.boxShadow = "0px 5px 0px 0px hsl(177, 92%, 70%)";
            delbtn.style.background = "hsl(281, 89%, 26%)";
            delbtn.style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)";
            resetbtn.style.background = "hsl(281, 89%, 26%)";
            resetbtn.style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)";
            resetbtn.style.color = "hsl(0, 0%, 100%)";
            toggler.classList.toggle("tick-three")
            currentTick = 1;

            break;
        default:
            break;
    }
}

keys.forEach((e) => {
    e.addEventListener("click", (i) => {
        if (i.target.innerHTML == "RESET") {
            onScreen = ""
            CalcScreen.innerHTML = onScreen;
        }
        else if (i.target.innerHTML == "DEL") {
            console.log(onScreen);
        } else {
            onScreen = CalcScreen.innerHTML;
            onScreen += i.target.innerHTML;
            CalcScreen.innerHTML = onScreen;
        }


    })
})


window.onload = () => {
    loadTheme();
}