let fiboNums = [0];

const fibo = (max, prev = 0, prev2 = 1) => {
  let nextNum = prev + prev2;

  if (nextNum >= max) {
    return;
  }
  else {
    fiboNums.push(nextNum);
    fibo(max, prev2, nextNum);
  }
};

fibo(4000000);

let evenFiboNums = [];
let sumOfEvens = 0;

fiboNums.forEach((num) => {
  if (num % 2 === 0) {
    evenFiboNums.push(num);
    sumOfEvens += num;
  }
});

console.log(fiboNums);
console.log(evenFiboNums);
console.log(sumOfEvens);