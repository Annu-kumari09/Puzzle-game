document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.grid button');
    const playButton = document.getElementById('play');
    const moveCounter = document.getElementById('move');

    let moves = 0;

    // Function to check if the puzzle is solved
    function isPuzzleSolved() {
        return Array.from(buttons).every((button, index) => button.textContent === (index + 1).toString());
    }

    // Function to handle button clicks
    function handleButtonClick() {
        if (this.textContent === '') return;

        const emptyButton = document.querySelector('.grid button:empty');
        const emptyIndex = Array.from(buttons).indexOf(emptyButton);
        const currentIndex = Array.from(buttons).indexOf(this);

        if (Math.abs(currentIndex - emptyIndex) === 1 || Math.abs(currentIndex - emptyIndex) === 3) {
            moves++;
            moveCounter.textContent = 'move: ' + moves;
            emptyButton.textContent = this.textContent; //click button (no. btn)
            this.textContent = '';
        }

        if (isPuzzleSolved()) {
            alert('Congratulations! Puzzle Solved in ' + moves + ' moves.');
        }
    }

    // Function to start the game
    function startGame() {
        moves = 0;
        moveCounter.textContent = 'move: ' + moves;
       
    }

    // Event listeners
    buttons.forEach(button => button.addEventListener('click', handleButtonClick));
    playButton.addEventListener('click', startGame);

    // Initial game setup
    startGame();
});