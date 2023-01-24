//Defining variables
//Ceasar permutation num
let caesar = document.getElementById("caesar-num");

//Alphabet
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Encrypt/decrypt textarea
let encryptText = document.getElementById("encrypt-text");
let decryptText = document.getElementById("decrypt-text");

//Encrypt/decrypt buttons
let encryptBtn = document.getElementById("encrypt-btn");
let decryptBtn = document.getElementById("decrypt-btn");

function encrypt() {
  if (encryptText.value === "") {
    alert("Please enter something :)");
  } else {
    let textArray = encryptText.value.split("");
    arrayMatch = textArray.filter((element) => alphabet.includes(element));
    if (arrayMatch.length === 0) {
      alert("no match pls use uppercase letters :)");
    } else {
      let arrayResult = arrayMatch.map((element) => element + caesar.value);
      decryptText.innerHTML = arrayResult;
      console.log(arrayResult);
    }
  }
}

encryptBtn.addEventListener("click", encrypt);

//decryptBtn.addEventListener("click", decrypt)
