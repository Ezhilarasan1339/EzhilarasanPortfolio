const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

let scroll =
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

progressBar.style.width =
(scroll / height) * 100 + "%";

});

const topBtn =
document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const cards =
document.querySelectorAll(".card,.skill-card,.project-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform =
"translateY(-10px)";

card.style.transition =
"0.3s";

});

card.addEventListener("mouseleave", () => {

card.style.transform =
"translateY(0)";

});

});