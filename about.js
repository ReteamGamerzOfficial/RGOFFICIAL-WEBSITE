function speechStein(){
    let utterance = new SpeechSynthesisUtterance("if you don't Know ME already... I am a gamer who never plays outside and makes very serious gaming content... how serious you ask, sooooo much that even the people start to laugh.. Let me tell you about my channel ok... i like playing a lot of unknown games..like Snake.is MLG Edition...My favourtie language is German (i can speak it)... My channel is SOOOOOOO Close to Beat BTS in Subscribers So please SUBSCRIBE..its helps me to boast in the Minecraft Community");
    speechSynthesis.speak(utterance);
}

function redirect_home(){
    window.location = "index.html";
}

function redirect_app_store() {
    window.location = "app_store.html";
}

//IMPORTANT
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
items.classList.add("active");
menuBtn.classList.add("hide");
searchBtn.classList.add("hide");
cancelBtn.classList.add("show");
         }
cancelBtn.onclick = ()=>{
items.classList.remove("active");
menuBtn.classList.remove("hide");
searchBtn.classList.remove("hide");
cancelBtn.classList.remove("show");
form.classList.remove("active");
cancelBtn.style.color = "#ff3d00";
         }
searchBtn.onclick = ()=>{
form.classList.add("active");
searchBtn.classList.add("hide");
cancelBtn.classList.add("show");
         }
