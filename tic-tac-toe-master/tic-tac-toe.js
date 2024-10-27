document.addEventListener("DOMContentLoaded", () => {
    // Select all divs inside the game board
    const squares = document.querySelectorAll("#board div");

    // Loop through each square and add the 'square' class
    squares.forEach(square => {
        square.classList.add("square");
    });
});
    // Initialize game state and turn-tracking variables
    const gameState = Array(9).fill(null); // Tracks the game state for each square
    let currentPlayer = "X"; // "X" starts the game

    // Add click event listeners to each square for turn-taking
    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            // Check if the square is already occupied
            if (!gameState[index]) {
                // Update square's content and styling
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Update game state
                gameState[index] = currentPlayer;

                // Switch player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
