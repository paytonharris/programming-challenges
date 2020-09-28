const getDistinct = (s) => {
  //return(new Set(s.split(',')));

  outArray = [];

  s.split(',').forEach((item) => {
    if (!outArray.includes(item)) {
      outArray.push(item);
    }
  });

  return outArray;
};

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 1) {
  console.log("Not enough arguments supplied.");
  console.log("Syntax: node getDistinct.js <csv>");
} else {
  const reversed = getDistinct(inputArgs[0]);

  console.log(reversed);
}