document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  if (container) {
    createGrid(16);
  }

  const btn = document.getElementById("btn");
  if (btn) {
    btn.addEventListener("click", () => {
      const input = prompt(
        "Enter the number of squares per side (e.g. 16 for 16x16, max 100).",
      );
      if (input <= 100) {
        document.documentElement.style.setProperty("--grid-size", input);
        createGrid(input);
      } else {
        alert("Please enter a number between 1 and 100.");
      }
    });
  }

  function createGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("cell");
      div.addEventListener("mouseover", () => {
        div.classList.add("hover");
      });
      container.appendChild(div);
    }
  }
});
