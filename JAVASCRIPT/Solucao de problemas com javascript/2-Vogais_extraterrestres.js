const input = [
  "aeiou",
  "o rato roeu a roupa do rei de roma",
  "4310",
  "t3st3 p4r4 c0d1f1c4r",
  "kwy",
  "the quick brown fox jumps over the lazy dog",
];

// saida
// 16
// 8
// 3

let position = 0;
const gets = () => input[position++];

const getWords = () => {
  let words = [];
  let word = gets();
  while (word !== undefined) {
    words.push(word);
    word = gets();
  }
  return words;
};

const countCaracter = (caracter, word) => {
  return word.filter((char) => char === caracter).length;
};

const checkWord = (vowels, word) => {
  let count = 0;
  for (const vowel of vowels) {
    count += countCaracter(vowel, word.split(""));
  }
  return count;
};
const start = (words) => {
  for (let c = 0; c < words.length; c += 2) {
    console.log(checkWord(words[c], words[c + 1]));
  }
};
const words = getWords();
start(words);
