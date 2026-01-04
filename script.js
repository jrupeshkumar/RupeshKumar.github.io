/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.className);
};
if (localStorage.getItem("theme")) {
  document.body.className = localStorage.getItem("theme");
}

/* MOBILE MENU */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
};

/* CLOSE MENU ON CLICK */
document.querySelectorAll(".nav-link").forEach(link => {
  link.onclick = () => navLinks.classList.remove("active");
});

/* ACTIVE NAV ON SCROLL */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* TYPING EFFECT */
const roles = ["Python Developer","Data Analyst","Blockchain Enthusiast"];
let i=0,j=0;
const el=document.querySelector(".typing");

function type(){
  if(j<roles[i].length){
    el.textContent+=roles[i][j++];
    setTimeout(type,80);
  } else setTimeout(erase,1500);
}
function erase(){
  if(j>0){
    el.textContent=roles[i].slice(0,--j);
    setTimeout(erase,40);
  } else {
    i=(i+1)%roles.length;
    setTimeout(type,400);
  }
}
type();

/* SCROLL REVEAL */
ScrollReveal({
  distance:"50px",
  duration:1000,
  easing:"ease-out",
  reset:false
});

ScrollReveal().reveal(".reveal",{origin:"bottom",interval:150});
ScrollReveal().reveal(".timeline-item.left",{origin:"left"});
ScrollReveal().reveal(".timeline-item.right",{origin:"right"});
