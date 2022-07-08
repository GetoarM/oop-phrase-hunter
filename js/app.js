/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

document.querySelector('#btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

/** 
 * Event listener to select letters on click
 */

document.getElementById("qwerty").addEventListener("click", (e) => {
    if (e.target.className === "key") {
        game.handleInteraction(e.target);
    }
});

/** 
 * Event listener to select letters with keyboard
 */

document.addEventListener("keyup", e => {
    const keyboard = document.querySelectorAll('#qwerty .keyrow .key');
    keyboard.forEach(button => {
        if (e.key === button.textContent && button.className ==='key'){
            game.handleInteraction(button);
        }
    });
});
