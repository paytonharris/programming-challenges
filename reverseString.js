const reverseString = (s) => {
  outString = [];

  s.split('').forEach(letter => {
    outString = letter + outString;
  });

  return outString;
};

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 1) {
  console.log("Not enough arguments supplied.");
  console.log("Syntax: node change.js <string>");
} else {
  console.log(reverseString(inputArgs[0]));
}