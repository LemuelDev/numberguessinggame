const submit = document.getElementById('submit')
const numbox = document.getElementById('numbox')
let result = document.getElementById('result')
let gameResult = document.getElementById('gameResult')
let guessResult = document.getElementById('guessResult')
let randomNumber = Math.floor(Math.random() * 10) + 1;
let numberofGuess = 0;
let guess_num = []



function playgame() {
    let userGuess = numbox.value;
    if (userGuess <= 0 || userGuess > 10) {
        alert ('Enter a number between 1 - 10 only.')
    }else {
        guess_num.push(userGuess);
        numberofGuess++
        if (userGuess > randomNumber){
            result.textContent = 'Your guess is High'
            gameResult.textContent = `The number of guess : ${numberofGuess}`
            guessResult.textContent= "Guessed Number: " +  guess_num;
           
        }else if (userGuess < randomNumber){
            result.textContent = 'Your guess is Too Low'
            gameResult.textContent = `The number of guess : ${numberofGuess}`
            guessResult.textContent= "Guessed Number: " +  guess_num;
              
        }else if(userGuess == randomNumber){
            result.textContent = 'You Win'
            gameResult.textContent = `The random number is : ${randomNumber}`
            guessResult.innerHTML= `Number of guess: ${numberofGuess} `;
            
            
        }
    }
}

submit.addEventListener('click', () => {
    playgame()
})