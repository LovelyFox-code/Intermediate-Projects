function rot13(str) {
  let result = "";
  let ascii = 0;

  for (let i = 0; i < str.length; i++) {
    ascii = str.charCodeAt(i);

    if (90 >= ascii && ascii >= 78) {
      result += String.fromCharCode(ascii - 13);
    }
    if (65 <= ascii && ascii <= 77) {
      result += String.fromCharCode(ascii + 13);
    }
    if (ascii < 65) {
      result += String.fromCharCode(ascii);
    }
  }
  return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
