const getDistinctAndCounts = (s) => {
  //return(new Set(s.split(',')));

  tally = {};

  s.split(',').forEach((item) => {
    if (!tally[item]) {
      tally[item] = 1;
    } else {
      tally[item]++;
    }
  });

  return tally;
};

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 1) {
  console.log("Not enough arguments supplied.");
  console.log("Syntax: node getDistinctAndCounts.js <csv>");
} else {
  const dandc = getDistinctAndCounts(inputArgs[0]);

  console.log(dandc);
}