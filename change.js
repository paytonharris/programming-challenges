let setOfSolutions = [];
let attemptedSolutions = {};

const setsAreEqual = (combo1, combo2) => {
  if (combo1.length === combo2.length) {
    combo1.forEach((num, i) => {
      if (combo1[i] !== combo2[i]) {
        return false;
      }
    });
    return true;
  }
  return false;
}

const includesSet = (combo, allCombos) => {
  for (const comboInSet of allCombos) {
    if (setsAreEqual(combo, comboInSet)) {
      return true;
    }
  };

  return false;
}

const addCombo = (combo) => {
  combo = combo.sort((a, b) => a - b);

  if (!includesSet(combo, setOfSolutions)) {
    setOfSolutions.push(combo);
  }
};

const makeChange = (coins, amount) => {
  coins = coins.sort((a, b) => a - b);

  if (coins.length === 0) return;
  if (attemptedSolutions[JSON.stringify(coins)]) return; // return because we already checked this combination

  attemptedSolutions[JSON.stringify(coins)] = 'checking';
  console.log('----------------');
  console.log(`coins: ${coins}`);
  console.log(`amount: ${amount}`);

  // check if this combination of coins returns the correct amount of change or exceeds it. Otherwise generate more possibilities.
  let sumOfCoins = coins.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(`sum: ${sumOfCoins}`);

  // generate other basic possibilities with unique numbers:
  coins.forEach((coin) => {
    makeChange(coins.filter(elem => elem !== coin), amount);
  });

  if (sumOfCoins === amount) {
    console.log('solution found');
    setOfSolutions.push(coins);
  } else if (sumOfCoins < amount) {

    // generate other possibilites with duplicated numbers:
    coins.forEach(coin => {
      makeChange([...coins, coin], amount);
    });
  }
};

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 2) {
  console.log("Not enough arguments supplied.");
  console.log("Syntax: node change.js <comma separated coin denominations> <amount to make change for>");
  console.log("\te.g. node change.js 1,2,3,8 4");
} else {
  makeChange(inputArgs[0].split(',').map(s => parseInt(s, 10)), parseInt(inputArgs[1]), 10);

  console.log(`Set of Solutions: ${JSON.stringify(setOfSolutions)}`);
  console.log(`Number of Solutions: ${setOfSolutions.length}`);
  console.log(`Checked combinations: ${Object.keys(attemptedSolutions).length}`);
}

//try this : 5 37 8 39 33 17 22 32 13 7 10 35 40 2 43 49 46 19 41 1 12 11 28
// 166