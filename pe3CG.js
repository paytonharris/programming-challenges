// started at 188 chars
// down to 83

let g=n=>{let f=[];for (let i=2;i<=n;i++){while(n%i==0){f.push(i);n/=i;}}return f;}

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 1) {
  console.log("Not enough arguments supplied.");
  console.log("Syntax: node getDistinctAndCounts.js <csv>");
} else {
  const factors = g(parseInt(inputArgs[0], 10));

  console.log(factors);
}