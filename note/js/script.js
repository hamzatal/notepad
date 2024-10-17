const textarea = document.querySelector(".textarea");
// Bold
document.querySelector(".btn-bold").addEventListener("click", () => {
  textarea.style.fontWeight =
    textarea.style.fontWeight === "bold" ? "normal" : "bold";
});

// Italic
document.querySelector(".btn-italic").addEventListener("click", () => {
  textarea.style.fontStyle =
    textarea.style.fontStyle === "italic" ? "normal" : "italic";
});

// Upper Case
document.querySelector(".btn-upper").addEventListener("click", () => {
  textarea.value = textarea.value.toUpperCase();
});

// Lower Case
document.querySelector(".btn-lower").addEventListener("click", () => {
  textarea.value = textarea.value.toLowerCase();
});

// Capitalize
document.querySelector(".btn-capitalize").addEventListener("click", () => {
  textarea.value = textarea.value.replace(/\b\w/g, (l) => l.toUpperCase());
});

// Clear Text
document.querySelector(".btn-clear").addEventListener("click", () => {
  textarea.value = "";
});

// Font Color
document.querySelector("#font-color").addEventListener("input", (e) => {
  textarea.style.color = e.target.value;
});

// Background Color
document.querySelector("#bg-color").addEventListener("input", (e) => {
  textarea.style.backgroundColor = e.target.value;
});

// Change Font Family
document.querySelector("#font-family").addEventListener("change", (e) => {
  textarea.style.fontFamily = e.target.value;
});

// Change Font Size
document.querySelector("#font-size").addEventListener("change", (e) => {
  textarea.style.fontSize = e.target.value;
});

// Text Alignment
document.querySelector(".btn-justify1").addEventListener("click", () => {
  textarea.style.textAlign = "left";
});

document.querySelector(".btn-justify2").addEventListener("click", () => {
  textarea.style.textAlign = "justify";
});

document.querySelector(".btn-justify3").addEventListener("click", () => {
  textarea.style.textAlign = "right";
});

// Print Text
document.querySelector(".btn-print").addEventListener("click", () => {
  let printWindow = window.open("", "", "width=800,height=600");
  printWindow.document.write(
    "<html><head><title>Print Text</title></head><body>"
  );
  printWindow.document.write(`<pre>${textarea.value}</pre>`);
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.print();
});
