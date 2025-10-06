       
       // Off-Canvas Menu Functionality
        const offcanvasMenu = document.getElementById('offcanvasMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const openMenuBtn = document.getElementById('openMenu');
        const closeMenuBtn = document.getElementById('closeMenu');
        
        function openMenu() {
            offcanvasMenu.classList.add('open');
            menuOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMenu() {
            offcanvasMenu.classList.remove('open');
            menuOverlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
        
        openMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);
        
        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Theme toggle
        document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.querySelector(".theme-toggle");

            themeToggle.addEventListener("click", () => {
                document.body.classList.toggle("dark-theme");

                const icon = themeToggle.querySelector("i");
                if (document.body.classList.contains("dark-theme")) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
                } else {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
                }
            });
        });
        
        // Project filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                closeMenu();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // efek ketik
          const text = " Halo, Saya Mariono Silaban";
            const typedText = document.getElementById("typed-text");
            let index = 0;
            let isDeleting = false;

            function typeLoop() {
                if (!isDeleting) {
                    typedText.textContent = text.substring(0, index + 1);
                    index++;
                     if (index === text.length) {
                        isDeleting = true;
                        setTimeout(typeLoop, 1500); // jeda sebelum menghapus
                        return;
                     }
                } else {
                    typedText.textContent = text.substring(0, index - 1);
                    index--;
                    if (index === 0) {
                        isDeleting = false;
                    } 
                }

                setTimeout(typeLoop, isDeleting ? 50 : 100); // kecepatan mengetik dan menghapus
            }

    document.addEventListener("DOMContentLoaded", typeLoop);

    // Animasi kursor
    const cursorLayer = document.createElement("div");
    cursorLayer.className = "cursor-layer";
    document.body.appendChild(cursorLayer);

    const dots = [];
    const cursor = { x: 0, y: 0 };

    for (let i = 0; i < 40; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        cursorLayer.appendChild(dot); 
        dots.push(dot);
    }

    document.addEventListener("mousemove", (e) => {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
    });

    function draw() {
        let x = cursor.x;
        let y = cursor.y;

        dots.forEach((dot, index) => {
            const nextDot = dots[index + 1] || dots[0];

            dot.style.left = x + "px";
            dot.style.top = y + "px";

            x += (nextDot.offsetLeft - dot.offsetLeft) * 0.5;
            y += (nextDot.offsetTop - dot.offsetTop) * 0.5;
        });
    }

    setInterval(draw, 10);

        

