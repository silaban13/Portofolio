async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  el.innerHTML = await res.text();

  if (id === "navbar") {
    initNavbar();
  }
}

function initNavbar() {
  const menuIcon = document.getElementById("menu-icon");
  const menuList = document.getElementById("menu-list");
  const overlay = document.getElementById("overlay");

  if (!menuIcon || !menuList || !overlay) return;

  menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
    overlay.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    menuList.classList.remove("active");
    overlay.classList.remove("active");
    menuIcon.classList.remove("active");
  });
}

loadComponent("navbar", "components/Navbar.html");
loadComponent("footer", "components/Footer.html");

const texts = [
  "Saya Seorang Mahasiswa yang sering",
  "Belajar Frontend",
  "Belajar Backend"
];

const typingText = document.getElementById("typing-text");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1500);
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
