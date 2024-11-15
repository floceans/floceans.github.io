// Animation sur les liens de navigation pour ajouter un effet de surbrillance
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = "#ff6f61";
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "#f0f0f0";
            link.style.transform = "scale(1)";
        });
    });
});
