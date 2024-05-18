'use strict'

let Secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = Secretnumber

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess);


    if(!guess){
        document.querySelector(".message").textContent = "⛔ No Number!"
    }else if (guess === Secretnumber){
        document.querySelector('.number').textContent = Secretnumber
        document.querySelector(".message").textContent = "🎉 Correct Number!"
        document.querySelector("body").style.backgroundColor = '#60b347'
        document.querySelector(".number").style.width = '30rem'

        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore

        }

    }else if(guess > Secretnumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too high'
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game'
        }
       
    }else if(guess < Secretnumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too low'
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You lost the game'
        }
    }
})

document.querySelector(".again").addEventListener("click", function(){
  score = 20;
   Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = ''
  document.querySelector('.score').textContent = score;
  document.querySelector("body").style.backgroundColor = '#222'
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector(".number").style.width = '15rem'
  document.querySelector('.number').textContent = '?'

})