let palindromes = [];

let testNum = 0;

for (let i = 1; i < 100; i++) {
  for (let j = 1; j < 100; j++) {
    for (let k = 1; k < 100; k++) {
      testNum = i * j * k;

      let start = '';
      let end = '';

      let numString = testNum.toString();

      for (let letterIndex = 0; letterIndex <= numString.length; letterIndex++) {
        start = start + numString[letterIndex];
        end = end + numString[numString.length - 1 - letterIndex];
      }

      if (start === end) {
        palindromes.push({ num: testNum, factors: [i, j, k] });
      }
    }
  }
}

let sorted = palindromes.sort((a, b) => b.num - a.num);

console.log(sorted[0]);
console.log(sorted[1]);
console.log(sorted[2]);
console.log(sorted[3]);
console.log(sorted[4]);
console.log(sorted[5]);
console.log(sorted[6]);
console.log(sorted[7]);
console.log(sorted[8]);