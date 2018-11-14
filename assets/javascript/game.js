// Writes the letter of the key pressed to the screen, only accepts letters

var storedLetters = [];

addEventListener

document.onkeyup = function (e) {
    var letter = e.key.toLocaleLowerCase();
    var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
    if (options.indexOf(letter) !== -1) {
        storedLetters.push(letter.toString());
        document.getElementById('GuessLetters').innerHTML = storedLetters;
    }
}

// Creates current word from list and populates to page
var SongList = ['bandito', 'carradio', 'blurryface', 'chlorine', 'trees'];
var rand = SongList[Math.floor(Math.random() * SongList.length)];
window.onload = function () {
    what();
    function what() {
        document.getElementById('CurrentWord').innerHTML = rand;

        // Replaces the characters of the current words with '-' 
        var newCurrent = rand.split("");
        for (i = 0; i < newCurrent.length; i++) {
            newCurrent[i] = '-';
            document.getElementById('CurrentWord').innerHTML = newCurrent;
        }
    }
}

