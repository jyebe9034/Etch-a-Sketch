document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  if (container) {
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        container.appendChild(newDiv);
      }
    }
  }

  const divs = document.getElementsByClassName("cell");
  if (divs) {
    for (const div of divs) {
        div.addEventListener("mouseover", () => {
            div.classList.add("hover");
        })
    }
  }
});

