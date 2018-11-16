// Writes the letter of the key pressed to the screen, only accepts letters
// Creates current word from list and populates to page
var storedLetters = [];
var SongList = ['bandito', 'carradio', 'blurryface', 'chlorine', 'trees'];
var rand = SongList[Math.floor(Math.random() * SongList.length)];
RandArray = rand.split("");

addEventListener

var Game = {
    RecordKey: document.onkeyup = function KeyPress(e) {
        var letter = e.key.toLocaleLowerCase();
        var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        if (options.indexOf(letter) !== -1) {
            storedLetters.push(letter.toString());
            document.getElementById('GuessLetters').innerHTML = storedLetters;
        }
        // Replaces the characters of the current words with '_'
        function Current() {
            for (var i = 0; i < RandArray.length; i++) {
                RandArray[i] = '_';
                document.getElementById('CurrentWord').innerHTML = RandArray;
            }
            console.log(RandArray);
        }
        Current();
        // if randarray (array of letters in word) is not equal to -1 (means its present)
        // replace the letter in Current Word
        var Replace = RandArray[RandArray.indexOf(letter)];
        console.log(RandArray.indexOf(letter));
        if (RandArray.indexOf(letter) !== -1) {
            for (var i = 0; i < RandArray.length; i++) {
                
            }
        }
    }
}