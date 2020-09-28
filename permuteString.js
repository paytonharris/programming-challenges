const allUnique = (s => {
  console.log(s);
});

const inputArgs = process.argv.slice(2);

if (inputArgs.length < 1) {
  console.log("Not enough arguments supplied.");
} else {
  allUnique(inputArgs[0]);
}