const computeAlgebra = (s) => {
  s = s.split(' ').join('');

  const a = 5;
  const b = 8;
  const c = -2;
  const d = 17;

  myVars = { a, b, c, d };

  console.log(s);

  nextSign = 1;

  sum = 0;

  s.split('').forEach((char) => {
    if (char === '+') {
      nextSign = 1;
    } else if (char === '-') {
      nextSign = -1;
    } else {
      let nextNum = parseInt(char, 10);

      if (isNaN(nextNum)) {
        nextNum = myVars[char];
        console.log(`${char} = ${myVars[char]}`);
      }

      sum += nextSign * nextNum;
    }
  });

  return sum;
};

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 1) {
  console.log("Not enough arguments supplied.");
  console.log("Syntax: node computeAlgebra.js <csv>");
} else {
  const sum = computeAlgebra(inputArgs.join(' '));

  console.log(sum);
}