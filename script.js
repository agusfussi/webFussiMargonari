function openNav() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
        sidebar.style.width = "250px";
    }
}

function closeNav() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
        sidebar.style.width = "0";
    }
}

// Close sidebar on escape key or click outside
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
});

document.addEventListener("click", (e) => {
    const sidebar = document.getElementById("mySidebar");
    const openBtn = document.querySelector(".openbtn");
    if (sidebar && sidebar.style.width === "250px") {
        if (!sidebar.contains(e.target) && !openBtn.contains(e.target)) {
            closeNav();
        }
    }
});

// ScrollReveal Animations
if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
        distance: "40px",
        duration: 1200,
        reset: false
    });

    sr.reveal("h3", { delay: 350 });
    sr.reveal(".home h1", { delay: 250, origin: "left" });
    sr.reveal(".home h2", { delay: 200, origin: "left" });
    sr.reveal(".icono", { delay: 300, origin: "right" });
    sr.reveal(".titulo", { delay: 200, origin: "top" });
    sr.reveal(".titulo-seccion", { delay: 200, origin: "left" });
    sr.reveal(".texto", { delay: 250, origin: "bottom" });
    sr.reveal(".nos", { delay: 250, origin: "bottom", interval: 120 });
    sr.reveal(".image img", { delay: 250, origin: "bottom", interval: 120 });
    sr.reveal(".cont-expert", { delay: 250, origin: "bottom", interval: 120 });
    sr.reveal("form", { delay: 250, origin: "bottom" });
}