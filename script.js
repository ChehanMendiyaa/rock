                let score =  JSON.parse(localStorage.getItem('score')) || {Win : 0,Lose : 0,Tie : 0,};

                updateScore();

                function resetScore() {
                    score.Win = 0;
                    score.Lose = 0;
                    score.Tie = 0;
                    document.querySelector('.js-result')
                     .innerHTML = "Score reset successfully!"
                    updateScore();

                    
                }

                let isAutoPlaying = false;
                let intervalId;

                function autoPlay() {
                    if ( !isAutoPlaying ) { 
                        intervalId = setInterval(function() {
                            let playerMove = pickComputerMove();
                            playGame(playerMove);
                        },1000);

                        document.querySelector('.auto-play-button')
                         .innerHTML = "Stop Play";

                        isAutoPlaying = true;
                    } else {
                        clearInterval(intervalId);
                        isAutoPlaying = false;

                        document.querySelector('.auto-play-button')
                         .innerHTML = "Auto Play";
                    }
                }
               
               
                function pickComputerMove() {
                    let randomNumber = Math.random();
                    if (randomNumber <= 1 / 3) {
                        return 'rock';
                    } else if (randomNumber <= 2 / 3) {
                        return 'paper';
                    } else {
                        return 'scissors';
                    }
                }

                document.querySelector('.js-rock-button')
                 .addEventListener('click',() => {
                    playGame('rock');
                 });

                document.querySelector('.js-paper-button')
                 .addEventListener('click', () => {
                    playGame('paper');
                 });

                document.querySelector('.js-scissors-button')
                 .addEventListener('click', () => {
                    playGame('scissors');
                 });


                document.body.addEventListener('keydown',(event) => {
                    if (event.key === 'r') {
                        playGame('rock');
                    } else if (event.key === 's') {
                        playGame('scissors');
                    } else if (event.key === 'p') {
                        playGame('paper');
                    }
                })
            

                function playGame(playerMove) {
                    let computerMove = pickComputerMove();
                    let result = '';

                    if (playerMove === 'rock') {
                        if (computerMove === 'scissors') {
                        result = 'Win';
                        } else if (computerMove === 'rock') {
                        result = 'Tie';
                        } else {
                        result = 'Lose';
                        }
                    } else if (playerMove === 'paper') {
                        if (computerMove === 'scissors') {
                        result = 'Lose';
                        } else if (computerMove === 'rock') {
                        result = 'Win';
                        } else {
                        result = 'Tie';
                        }
                    } else if (playerMove === 'scissors') {
                        if (computerMove === 'scissors') {
                        result = 'Tie';
                        } else if (computerMove === 'rock') {
                        result = 'Lose';
                        } else {
                        result = 'Win';
                        }
                    } 

                    if (`${result}` === 'Win') {
                        score.Win += 1
                    } else if (result === 'Lose') {
                        score.Lose += 1
                    } else if (result === 'Tie') {
                        score.Tie += 1
                    }

                    updateScore();
                    localStorage.setItem('score',JSON.stringify(score));
                    document.querySelector('.js-result')
                     .innerHTML = `You pick <img class="rock-img" src="${playerMove}-emoji.png"> and
                      Computer pick <img class="rock-img" src="${computerMove}-emoji.png"> and You ${result}!`                   

                    document.querySelector('.js-wins')
                    .innerHTML = score.Win;

                    document.querySelector('.js-losses')
                    .innerHTML = score.Lose;

                    document.querySelector('.js-ties')
                    .innerHTML = score.Tie;
                    
                    

                    console.log(`You picked ${playerMove} , Computer picked ${computerMove}, You ${result}.
                     Wins : ${score.Win} Lose : ${score.Lose} Tie : ${score.Tie}`);
                    
                     updateScore();
                }


                function updateScore() {
                    document.querySelector('.js-wins')
                    .innerHTML = score.Win;

                    document.querySelector('.js-losses')
                    .innerHTML = score.Lose;

                    document.querySelector('.js-ties')
                    .innerHTML = score.Tie;
                }
