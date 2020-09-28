const reverseString = (s) => {
  outString = '';

  s.forEach(word => {
    outString = word + " " + outString;
  });

  return outString;
};

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 1) {
  console.log("Not enough arguments supplied.");
  console.log("Syntax: node change.js <string>");
} else {
  const reversed = reverseString(inputArgs);

  console.log(reversed);
}