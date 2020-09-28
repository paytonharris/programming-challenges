const getFactors = (num) => {
  let factors = [];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num = num / i;
    }
  }

  return factors;
}

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 1) {
  console.log("Not enough arguments supplied.");
  console.log("Syntax: node getDistinctAndCounts.js <csv>");
} else {
  const factors = getFactors(parseInt(inputArgs[0], 10));

  console.log(factors);
}