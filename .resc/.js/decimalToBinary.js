// script.js — Conversion décimal → binaire
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("decimalInput");
  const btn = document.getElementById("convertBtn");
  const binaryOutput = document.getElementById("binaryOutput");
  const bitCount = document.getElementById("bitCount");

  btn.addEventListener("click", () => {
    const value = parseInt(input.value);
    if (isNaN(value) || value < 0) {
      binaryOutput.textContent = "⚠️ Entrez un nombre valide (≥ 0)";
      bitCount.textContent = "*";
      return;
    }
    const binary = value.toString(2);
    const bits = binary.length;
    binaryOutput.textContent = binary;
    bitCount.textContent = bits;
  });
  
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") btn.click();
  });
});
