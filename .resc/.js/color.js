// color.js — Afficher un pixel à partir de valeurs RGB
function rgbToHex(r, g, b) {
        const toHex = (v) => v.toString(16).padStart(2, "0").toUpperCase();
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
document.addEventListener("DOMContentLoaded", () => {
  const r = document.getElementById("rValue");
  const g = document.getElementById("gValue");
  const b = document.getElementById("bValue");
  const btn = document.getElementById("showColorBtn");
  const pixel = document.getElementById("colorPixel");
  const code = document.getElementById("colorCode").querySelector("span");
  const codeHexa = document.getElementById("colorCodeHexa").querySelector("span");

  function updateColor() {
    const rVal = parseInt(r.value);
    const gVal = parseInt(g.value);
    const bVal = parseInt(b.value);

    // Vérifie la validité des valeurs
    if (
      [rVal, gVal, bVal].some(
        (v) => isNaN(v) || v < 0 || v > 255
      )
    ) {
      pixel.style.backgroundColor = "transparent";
      code.textContent = "⚠️ Entrez des valeurs entre 0 et 255";
      return;
    }

    // Crée la couleur et affiche le pixel
    const rgb = `rgb(${rVal}, ${gVal}, ${bVal})`;
    const hex = rgbToHex(rVal, gVal, bVal);
    pixel.style.backgroundColor = rgb;
    code.textContent = rgb;
    codeHexa.textContent = hex;
  }

  btn.addEventListener("click", updateColor);

  // Permet de valider avec "Entrée"
  [r, g, b].forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") updateColor();
    });
  });
});