const squaresContainer = document.querySelector("#squaresContainer");
const createDivs = (squares) => {
    let squareRoot = Math.sqrt(squares);
    squaresContainer.style.gridTemplateColumns = `repeat(${squareRoot}, 1fr)`;
    for (i = 1; i <= squares; i++) {
        let currentSquare = document.createElement("div");
        currentSquare.id = `square${i}`;
        currentSquare.className = 'square';
        squaresContainer.appendChild(currentSquare);
    }
}
createDivs(4096);

const squares = document.querySelectorAll(".square");

const changeBackgroundColor = (currentSquare) => {
    currentSquare.style.backgroundColor = 'black';
}

for (i = 0; i < squares.length; i++) {
    let currentSquare = squares[i];
    currentSquare.addEventListener("mouseover", () => {
        changeBackgroundColor(currentSquare)
    });
}