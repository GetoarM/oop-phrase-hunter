/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('programming is life'),
            new Phrase('may the force be with you'),
            new Phrase('why so serious'),
            new Phrase('i declare bankruptcy'),
            new Phrase('you talkin to me')
            ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase(){
        let randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase];  
    };

    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */

    handleInteraction(button){
        button.disabled = true;

        if (!this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            this.activePhrase.showMatchedLetter(button.textContent);
            button.classList.add('chosen');
            
            if (this.checkForWin() === true) {
                this.gameOver(true);
            }
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */

    checkForWin(){
        let activePhrase = this.activePhrase.phrase;
        activePhrase = activePhrase.split(' ').join('').length;
        const show = document.querySelectorAll('.show').length;
        return activePhrase === show;
    }

    /**
    * Checks if player has remaining lives and ends game if player is out
    * Increases the value of the missed property
    */

    removeLife(){
        let tries = document.querySelectorAll('img')[this.missed];
        if (this.missed < 4) {
            tries.src = 'images/lostHeart.png';
            this.missed++;
        } else if (this.missed === 4) {
            this.gameOver(false);
        }  
    }

    /**
    * Displays game over message
    * @return {boolean} gameWon - Whether or not the user won the game
    */

    gameOver(gameWon){
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('game-over-message')
        if (gameWon) {
            overlay.className = 'win';
            message.innerHTML = `Congratulations! <br>
            You guessed the phrase - "${this.activePhrase.phrase}"`
        } else {
            overlay.className = 'lose';
            message.innerHTML = `Better luck next time! <br>
            The correct phrase was - "${this.activePhrase.phrase}"`;
        }
        overlay.style.display = 'flex';
        this.resetGame();   
    }
    
    resetGame(){
        const lifes = document.querySelectorAll('.tries img');
        const keyboards = document.querySelectorAll('.key');
        const phrase = document.querySelector('#phrase');

        this.missed = 0;
        keyboards.forEach( key => {key.className = 'key'; key.disabled = false;});
        lifes.forEach(life => life.src = 'images/liveHeart.png');
        phrase.innerHTML = `<ul></ul>`;

    }
}