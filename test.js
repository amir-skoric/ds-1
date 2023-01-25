function caesarCipher(str, shift) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let shiftedAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    for (let i = 0; i < shift; i++) {
      shiftedAlphabet.push(shiftedAlphabet.shift());
    }
    
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (alphabet.indexOf(char) === -1) {
        result += char;
      } else {
        result += shiftedAlphabet[alphabet.indexOf(char)];
      }
    }
    
    return result;
  }
  
  console.log(caesarCipher("KHOOR ZRUOG", 3));