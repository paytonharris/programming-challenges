let primes = [];
let limit = 10001;

let i = 2;
while (primes.length < limit) {
  for (let j = 2; j <= i; j++) {
    if (i === j) { // reached the end without breaking, so it must not have any divisors.
      primes.push(i);
    } else if (i % j === 0) {
      break;
    }
  }

  i++;
}

console.log(primes[primes.length-1]);