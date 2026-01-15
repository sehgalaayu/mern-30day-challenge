const paragraph = document.querySelector("p");
const button = document.querySelector("button");
const box = document.querySelector(".box");

paragraph.textContent = "This text was changed using JavaScript.";

box.style.backgroundColor = "#dfe6e9";
box.style.padding = "20px";
box.style.marginTop = "20px";
box.style.borderRadius = "8px";

button.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "A new paragraph is added";
  box.appendChild(newParagraph);
});
