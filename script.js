const container = document.querySelector(".container");
const button = document.querySelector("button");

const DEFAULT_COLOR = "black";
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";

let selectedColor = "aqua";
let currentMode = "color";

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
    let userInput = prompt("Enter number of grids");

    var number = parseInt(userInput);

    if (isNaN(number)) {
        alert('Invalid input. Please enter a number.');
        gridSelect();
    } else if (number < 1 || number > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        gridSelect();
    } else {
        console.log('Valid number:', number);
    }

    
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }

    createGrid(userInput);
}

function hoverEventListener(){
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("mouseenter", () => {
            if (currentMode == "rainbow"){
                rainbowMode();
            }
            else if (currentMode == "darken"){
                darkenMode();
            }
            cell.style.cssText = `background-color: ${selectedColor};`;
        })
    })
}

function colorPick(){
    // Get the color picker input element
    var colorPicker = document.getElementById('colorPicker');

    // Add event listener to the color picker
    colorPicker.addEventListener('input', event => {
    // Get the selected color
    selectedColor = event.target.value;
    });
}

function rainbowMode(){
    currentMode = "rainbow"
    let redValue = (Math.random()*255) + 1;
    let greenValue = (Math.random()*255) + 1;
    let blueValue = (Math.random()*255) + 1;

    selectedColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function darkenMode(){
    currentMode = "darken";
    var colorPicker = document.getElementById('colorPicker');
    selectedColor = colorPicker.value;
    console.log(selectedColor)

    // Parse the color value to separate the components
    var red = parseInt(selectedColor.slice(1, 3), 16);
    var green = parseInt(selectedColor.slice(3, 5), 16);
    var blue = parseInt(selectedColor.slice(5), 16);
    
    // Add 10 to each component
    red += 10;
    green += 10;
    blue += 10;
    
    // Ensure the values are within the valid range (0 to 255)
    red = Math.min(Math.max(red, 0), 255);
    green = Math.min(Math.max(green, 0), 255);
    blue = Math.min(Math.max(blue, 0), 255);
    
    // Convert the updated components back to hexadecimal and format the color value
    console.log("#" + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0'));
}


createGrid(10);
hoverEventListener();
colorPick();