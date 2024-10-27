document.addEventListener("DOMContentLoaded", () => {  
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const gameState = Array(9).fill(null);
    let currentPlayer = "X"; 

    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Center column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left
        [2, 4, 6]  // Diagonal from top-right
    ]

    function checkWinner(){
        for (const combination of winningCombinations){
            const [a,b,c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];

        }
    }
    return null;
}

    
    squares.forEach(square => {
        square.classList.add("square");
    })

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            
            if (!gameState[index]) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;
                const winner = checkWinner();
                if (winner) {             
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        };
    });
    square.addEventListener("mouseover", () => {
        square.classList.add("hover");
    });

    square.addEventListener("mouseout", () => {
        square.classList.remove("hover");
    });
})
})

