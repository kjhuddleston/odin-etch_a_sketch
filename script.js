let changeGridBtn = document.querySelector("#changeGridBtn");
let squaresContainer = document.querySelector("#squaresContainer");
let squares = document.querySelectorAll(".square");
let numberOfSquares = 256;

const createDivs = (squares) => {
    squaresContainer.remove();
    squaresContainer = document.createElement('div');
    squaresContainer.id = "squaresContainer";
    document.body.appendChild(squaresContainer);
    let squareRoot = Math.sqrt(squares);
    squaresContainer.style.gridTemplateColumns = `repeat(${squareRoot}, 1fr)`;
    for (i = 1; i <= squares; i++) {
        let currentSquare = document.createElement("div");
        currentSquare.id = `square${i}`;
        currentSquare.className = 'square';
        currentSquare.addEventListener("mouseover", () => currentSquare.style.backgroundColor = 'black');
        squaresContainer.appendChild(currentSquare);
    }
};

createDivs(numberOfSquares);

changeGridBtn.addEventListener("click", () => {
    numberOfSquares = prompt('How many squares');
    createDivs(numberOfSquares);
});