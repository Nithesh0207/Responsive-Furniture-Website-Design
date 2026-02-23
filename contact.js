    // DOM elements
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.querySelector(".option");
    const closeBtn = document.querySelector(".close");
    const navLinks = document.querySelectorAll(".nav-link");

    // Initial state
    sidebar.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");

    function toggleSidebar(open) {
        const isActive = sidebar.classList.contains("active");
        const shouldOpen = open !== undefined ? open : !isActive;
        
        if (shouldOpen) {
            sidebar.classList.add("active");
            menuBtn.setAttribute("aria-expanded", "true");
            document.body.style.overflow = "hidden"; // Prevent background scroll
        } else {
            sidebar.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            document.body.style.overflow = ""; // Restore scroll
        }
    }

    // Event listeners
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSidebar(true);
    });

    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSidebar(false);
    });

    sidebar.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
        if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            toggleSidebar(false);
        }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            toggleSidebar(false);
        }
    });

    // Smooth scrolling for nav links
    // navLinks.forEach(link => {
    //     link.addEventListener("click", (e) => {
    //         toggleSidebar(false); // Close mobile menu
    //         const href = link.getAttribute("href");
    //         if (href.startsWith("#")) {
    //             e.preventDefault();
    //             const target = document.querySelector(href);
    //             if (target) {
    //                 target.scrollIntoView({ behavior: "smooth" });
    //             }
    //         }
    //     });
    // });

    // Navbar background on scroll
    // window.addEventListener("scroll", () => {
    //     const nav = document.querySelector(".nav-container");
    //     if (window.scrollY > 100) {
    //         nav.style.background = "linear-gradient(135deg, rgba(210,180,140,0.95), rgba(184,134,11,0.9))";
    //         nav.style.backdropFilter = "blur(10px)";
    //     } else {
    //         nav.style.background = "linear-gradient(135deg, burlywood, #d2b48c)";
    //         nav.style.backdropFilter = "none";
    //     }
    // });
