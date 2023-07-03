const container = document.querySelector(".container");
const button = document.querySelector("button");

function createGrid(size){
    for (let i = 0; i < size; i++){
        let container = document.querySelector(".container");
        let row = document.createElement("div");
        row.classList.add("row");
    
        for (let j = 0; j < size; j++){
            let divSquare = document.createElement("div");
            divSquare.classList.add("cell");
            row.appendChild(divSquare);
        }
        container.appendChild(row);
    }

    hoverEventListener();
}


function gridSelect(){
    let gridNum = prompt("Enter number of grids");

    
    while (container.lastChild !== button){
        container.removeChild(container.lastChild);
    }

    createGrid(gridNum);
}

function hoverEventListener(){
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("mouseenter", () => {
            cell.style.cssText = "background-color: aqua;";
        })
    })
}

createGrid(10);
hoverEventListener();