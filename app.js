const dictionary = require('./dictionary.json');

const letters = process.argv[2];
const specialLetter = process.argv[3]

const TIME_LABEL = 'Time spent searching'

const findWordsInEnglish = ({ letters, specialLetter }, words = dictionary) => {
  const letterSet = new Set(letters);

  return words.filter(word => {
    if (word.length < 4 || !word.includes(specialLetter)) {
      return false;
    }

    for (const char of word) {
      if (!(letterSet.has(char) || char === specialLetter)) {
        return false;
      }
    }

    return true;
  });
};


console.time(TIME_LABEL);
const result = findWordsInEnglish({ letters, specialLetter });
console.timeEnd(TIME_LABEL);

console.log(`\nResults:`, result);
