function redirect_about() {
    window.location = "about.html";
}

function redirect_home() {
    window.location = "index.html";
}

//BSW
function download_BSW(){
    window.open("https://drive.google.com/file/d/1cQCxUc41KnJZ5XtlOhFYT1EjvTPFYEpB/view?usp=sharing");
}

function download_BSW_page(){
    window.open("https://reteamgamerzofficial.github.io/BombSweeper-MobileDev-Downloader/");
}

//CLSTME
function download_CLSTME(){
    window.open("https://play.google.com/store/apps/details?id=com.gmail.charankumarmrpl.classtime");
}

//STPREC
function download_STPREC(){
    window.open("https://play.google.com/store/apps/details?id=com.gmail.charankumarmrpl.mathcom");
}

//BSW ONLINE 
function download_BSW(){
    window.open("https://reteamgamerzofficial.github.io/BombSweeper-WebDev/");
}

//PERCAL ONLINE 
function download_PERCAL_online(){
    window.open("https://reteamgamerz.github.io/Percentage-Calculator/feedback.html");
}

function download_VAPE_online(){
    window.open("https://reteamgamerzofficial.github.io/VAPE/");
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
