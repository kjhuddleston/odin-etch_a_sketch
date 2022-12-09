const changeGridBtn = document.querySelector("#changeGridBtn");
const changeColorBtn = document.querySelector("#changeColorBtn");
let squaresContainer = document.querySelector("#squaresContainer");
let squares = document.querySelectorAll(".square");
const etchASketch = document.querySelector("#etch-a-sketch");
const dropDown = document.querySelector("#dropdownDiv");
let numberOfSquares = 16;
let currentColor = 'black'

const changeColor = (color) => currentColor = color;

const getRandomColor = () => {
    let randomColorArray = [];
    for (i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 256);
        randomColorArray.push(randomNumber)
    }
    let randomColor = `rgb(${randomColorArray[0]}, ${randomColorArray[1]}, ${randomColorArray[2]})`;
    return randomColor;
}

const displayDropdown = () => {
    dropDown.classList.toggle("show");
}

const createDivs = (squares) => {
    squaresContainer.remove();
    squaresContainer = document.createElement('div');
    squaresContainer.id = "squaresContainer";
    etchASketch.appendChild(squaresContainer);
    let squared = squares * squares;
    squaresContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    for (i = 1; i <= squared; i++) {
        let currentSquare = document.createElement("div");
        currentSquare.id = `square${i}`;
        currentSquare.className = 'square';
        currentSquare.addEventListener("mouseover", () => currentSquare.style.backgroundColor = currentColor);
        squaresContainer.appendChild(currentSquare);
    }
};

createDivs(numberOfSquares);

changeGridBtn.addEventListener("click", () => {
    numberOfSquares = prompt('Pick a number between 4 and 250.');
    if (numberOfSquares <= 250 && numberOfSquares >= 4) {
        createDivs(numberOfSquares);
    } else {
        alert('ERROR: Invalid Entry');
    }
});