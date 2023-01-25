//Defining variables
//Alphabet
const alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
const arraytest = ["hello", "world"]

//Permutation
const caesar = 3;

//Encrypt/decrypt textarea
var encryptText = document.getElementById("encrypt-text");
var decryptText = document.getElementById("decrypt-text");

//Encrypt/decrypt buttons
var encryptBtn = document.getElementById("encrypt-btn");
var decryptBtn = document.getElementById("decrypt-btn");

function encrypt(){
	var encryptArray = encryptText.value.split("")
	for (let i = 0; i < encryptArray.length; i++) {
		var letter = encryptArray[i]
		console.log(letter)
		if (letter.includes(alphabet[i])) {
			console.log(encryptArray.splice(0, 1, alphabet.indexOf(letter)))
		}
	}
	
}

encryptBtn.addEventListener("click", encrypt);
//decryptBtn.addEventListener("click", decrypt)