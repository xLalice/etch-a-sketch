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
    currentMode = "color";
    var colorPicker = document.getElementById('colorPicker');

    colorPicker.addEventListener('input', event => {
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


function hexToRgb(hex) {
    hex = hex.replace("#", "");
    
    var red = parseInt(hex.substring(0, 2), 16);
    var green = parseInt(hex.substring(2, 4), 16);
    var blue = parseInt(hex.substring(4, 6), 16);
    
    var rgbString = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    return rgbString;
  }
  
function ligtenMode(){
    currentMode = "darken";
    var colorPicker = document.getElementById('colorPicker');
    selectedColor = colorPicker.value;
    
    var red = parseInt(selectedColor.slice(1, 3), 16);
    var green = parseInt(selectedColor.slice(3, 5), 16);
    var blue = parseInt(selectedColor.slice(5), 16);

    red += 1;
    green += 1;
    blue += 1;
    
    red = Math.min(Math.max(red, 0), 255);
    green = Math.min(Math.max(green, 0), 255);
    blue = Math.min(Math.max(blue, 0), 255);
    
    colorPicker.value = "#" + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0');
    selectedColor = hexToRgb(colorPicker.value);
    
}


createGrid(10);
hoverEventListener();
colorPick();