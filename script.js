function openNav() {
    const sidebar = document.getElementById("mySidebar");
    const overlay = document.getElementById("sidebarOverlay");
    if (sidebar) sidebar.classList.add("open");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeNav() {
    const sidebar = document.getElementById("mySidebar");
    const overlay = document.getElementById("sidebarOverlay");
    if (sidebar) sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
}

// Copy code button handler
function copyCode(button, codeId) {
    const codeElement = document.getElementById(codeId);
    if (!codeElement) return;

    const text = codeElement.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        button.innerText = "¡Copiado!";
        setTimeout(() => {
            button.innerText = originalText;
        }, 2000);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // ScrollReveal animations
    if (typeof ScrollReveal !== "undefined") {
        const sr = ScrollReveal({
            distance: "32px",
            duration: 900,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            reset: false
        });

        sr.reveal(".home h2, .badge", { delay: 100, origin: "top" });
        sr.reveal(".home h1", { delay: 200, origin: "left" });
        sr.reveal(".home h3, .home p, .hero-actions", { delay: 300, origin: "bottom" });
        sr.reveal(".icono", { delay: 250, origin: "right" });
        sr.reveal(".titulo", { delay: 150, origin: "top" });
        sr.reveal(".feature-card, .info-card, .step-card, .cont-expert, .model-card, .nos", {
            delay: 200,
            origin: "bottom",
            interval: 120
        });
        sr.reveal(".nos1, .container, form", { delay: 250, origin: "bottom" });
    }

    // Lightbox for images
    const zoomableImages = document.querySelectorAll(".imagen, .model-card img, .nos1 img");
    if (zoomableImages.length > 0) {
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Cerrar imagen">&times;</button>
            <img src="" alt="Vista ampliada">
        `;
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector("img");
        const closeBtn = lightbox.querySelector(".lightbox-close");

        const closeLightbox = () => {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        };

        zoomableImages.forEach((img) => {
            img.addEventListener("click", () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || "Vista ampliada";
                lightbox.classList.add("active");
                document.body.style.overflow = "hidden";
            });
        });

        closeBtn.addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeLightbox();
                closeNav();
            }
        });
    } else {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeNav();
        });
    }
});