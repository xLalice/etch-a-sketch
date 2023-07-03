for (let i = 0; i < 16; i++){
    let container = document.querySelector(".container");
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 16; j++){
        let divSquare = document.createElement("div");
        divSquare.classList.add("cell");
        row.appendChild(divSquare);
    }
    container.appendChild(row);
}

function hoverEventListener(){
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("mouseenter", () => {
            cell.style.cssText = "background-color: aqua;";
        })
    })
}

hoverEventListener();