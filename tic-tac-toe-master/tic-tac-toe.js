document.addEventListener("DOMContentLoaded", () => {  
    const squares = document.querySelectorAll("#board div");
    
    squares.forEach(square => {
        square.classList.add("square");
    });
});
    
    const gameState = Array(9).fill(null); // Tracks the game state for each square
    let currentPlayer = "X"; // "X" starts the game

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            
            if (!gameState[index]) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
    square.addEventListener("mouseover", () => {
        square.classList.add("hover");
    });

    square.addEventListener("mouseout", () => {
        square.classList.remove("hover");
    });

