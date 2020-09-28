const reverseString = (s) => {
  let outString = [];

  s.forEach(word => {
    nextWord = '';
    word.split('').forEach(letter => {
      nextWord = letter + nextWord;
    })
    outString.push(nextWord);
  })

  return outString.join(" ");
};

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 1) {
  console.log("Not enough arguments supplied.");
  console.log("Syntax: node change.js <string>");
} else {
  const reversed = reverseString(inputArgs);

  console.log(reversed);
}