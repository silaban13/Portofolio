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