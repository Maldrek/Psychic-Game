        //computer guess
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
            "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ];

        // Variables for the game (wins, losses, guesses the user has remaining, letters, etc)
        var wins = 0;
        var losses = 0;
        var guessesLeft = 15;
        var letters = [];

        // User input instance
        document.onkeydown = function (event) {

            // user guess input
            var userGuess = event.key;
            letters.push(userGuess);
            //computer picks a random value from array
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            //User can put in capital/lower case letters
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            // win and loss alerts
            if (userGuess === computerGuess) {
                wins++;
                alert("!!!YOU WIN!!!");
            } else {
                guessesLeft--;
            }
            // reset game when lose
            if (guessesLeft === 0) {
                alert("GAME OVER Please Play Again");
                losses++;
                guessesLeft = 15;
            }

            // HTML display functions
            var html =
                "<h2>Are you Psychic?</h2>" +
                "<h4>Can you guess what letter I am thinking off. . . </h4>" +
                "<p>You chose: " + userGuess + "</p>" +
                "<p>The computer chose: " + computerGuess + "</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>" +
                "<p>Letters Guessed: " + letters + "</p>";


            // game div functionality for play 
            document.querySelector("#game").innerHTML = html;
        };