// Créer et configurer un canvas
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// Redimensionner le canvas pour qu'il couvre tout l'écran
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Variables pour stocker la dernière position de la souris
let lastX = null;
let lastY = null;

// Gérer les mouvements de la souris
document.addEventListener("mousemove", (event) => {
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;

    // Si aucune position précédente, initialiser
    if (lastX === null || lastY === null) {
        lastX = x;
        lastY = y;
        return;
    }

    // Tracer une ligne continue entre la position précédente et actuelle
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(160, 75, 250, 0.8)"; // Couleur violette
    ctx.lineWidth = 3; // Épaisseur du trait
    ctx.lineCap = "round"; // Terminaisons arrondies
    ctx.stroke();

    // Mettre à jour les positions précédentes
    lastX = x;
    lastY = y;
});

// Nettoyer progressivement la trajectoire pour un effet de disparition
function fadeOutCanvas() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Effacement progressif
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(fadeOutCanvas); // Rafraîchissement continu
}
fadeOutCanvas();
