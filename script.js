/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.className);
};

if (localStorage.getItem("theme")) {
  document.body.className = localStorage.getItem("theme");
}

/* TYPING EFFECT */
const roles = ["Python Developer", "Data Analyst", "Blockchain Enthusiast"];
let i = 0, j = 0;
const typing = document.querySelector(".typing");

function type() {
  if (j < roles[i].length) {
    typing.textContent += roles[i][j++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = roles[i].substring(0, --j);
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % roles.length;
    setTimeout(type, 500);
  }
}
type();
