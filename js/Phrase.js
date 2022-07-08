/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    };

    addPhraseToDisplay(){
        const phrase = this.phrase;
        for(let i = 0; i < phrase.length; i++){
            if(phrase[i] !== ' '){
                const li = document.createElement('li');
                li.className = `hide letter ${phrase[i]}`;
                li.textContent = phrase[i];
                document.querySelector('#phrase ul').appendChild(li);
            } else {
                const emptyLi = document.createElement('li');
                emptyLi.className = 'space';
                emptyLi.textContent = phrase[i];
                document.querySelector('#phrase ul').appendChild(emptyLi);
            }
        }
    }
    
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
   
    checkLetter(letter){
        return (this.phrase.includes(letter));
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter){
        const li = document.querySelectorAll('#phrase li');
        for (let i = 0; i < li.length; i++) {
            if (li[i].textContent.includes(letter)) {
                li[i].classList.remove('hide');
                li[i].classList.add('show');
            }
        }
    };
}