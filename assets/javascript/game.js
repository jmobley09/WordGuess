var storedLetters = [];
var SongList = ['bandito', 'carradio', 'blurryface', 'chlorine', 'trees'];
var rand = SongList[Math.floor(Math.random() * SongList.length)];
RandArray = rand.split("");

addEventListener

var Game = {
    // Writes the letter of the key pressed to the screen, only accepts letters
    // Creates current word from list and populates to page]
    NewCurrent: [],
    Guesses: 15,
    KeyPress: function (e) {
        var letter = e.key.toLocaleLowerCase();
        var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        if (options.indexOf(letter) !== -1) {
            storedLetters.push(letter.toString());
            document.getElementById('GuessLetters').innerHTML = storedLetters;
        }
    },

    // Replaces the characters of the current words with '_'
    Current: function () {
        for (var i = 0; i < RandArray.length; i++) {
            Game.NewCurrent[i] = '_';
        }
    },

    // Checks for a match between the key press and current word that is hidden, and changes current word for all letters that match
    Check: function (e) {
        for (var i = 0; i < RandArray.length; i++) {
            var letter = e.key.toLocaleLowerCase();
            if (letter === RandArray[i]) {
                Game.NewCurrent[i] = letter;
                document.getElementById('CurrentWord').innerHTML = Game.NewCurrent;
            }
        }
    },
    
    // If letter pressed is not in the current word it subtracts from the guesses remaining count
    SubtractGuess: function(e) {
        var letter = e.key.toLocaleLowerCase();
        if (letter !== RandArray) {
            Game.Guesses = Game.Guesses - 1;
            document.getElementById('Remaining').innerHTML = Game.Guesses;
        }
    }
}

Game.Current();

// Calls the function to store the Key strokes into Guessed Letters Section
// Checks if the letter is in current word and replaces 
// If it is not in the current word it subtracts one from the guesses column
document.onkeyup = function (e) {
    Game.KeyPress(e);
    Game.Check(e);
    Game.SubtractGuess(e);
}
  
// Loads the Underscores for the Current Word section of the screen
window.onload = function () {
    document.getElementById('CurrentWord').innerHTML = Game.NewCurrent;
    document.getElementById('Remaining').innerHTML = Game.Guesses;
}

