 let score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };

    function resetScore() {
        score = { win: 0, lose: 0, tie: 0 };
        localStorage.setItem('score', JSON.stringify(score));
        updateScoreDisplay();
        document.querySelector('.js-result').textContent = 'Scores have been reset!';
    }

    function pickComputerMove() {
        const randomNumber = Math.random();
        if (randomNumber <= 1 / 3) {
            return 'rock';
        } else if (randomNumber <= 2 / 3) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === computerMove) {
            result = 'Tie';
        } else if (
            (playerMove === 'rock' && computerMove === 'scissors') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'scissors' && computerMove === 'paper')
        ) {
            result = 'Win';
        } else {
            result = 'Lose';
        }

        if (result === 'Win') {
            score.win++;
        } else if (result === 'Lose') {
            score.lose++;
        } else {
            score.tie++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = `You picked <img class="rock-img" src="${playerMove}-emoji.png"> 
            and the computer picked <img class="rock-img" src="${computerMove}-emoji.png">. You ${result}!`;

        updateScoreDisplay();
    }

    function updateScoreDisplay() {
        document.querySelector('.js-wins').textContent = score.win;
        document.querySelector('.js-losses').textContent = score.lose;
        document.querySelector('.js-ties').textContent = score.tie;
    }

    
    
