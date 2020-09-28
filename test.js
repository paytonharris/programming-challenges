let set = new Set();

set.add(01);
set.add(3);

set.add({a: 'h'});
set.add({a: 'h'});

console.log("Normal Set\n--------");
console.log(set);

let toggle = true;

set.forEach((val, val2, currentSet) => {
  console.log("start loop");
  console.log(val);
  console.log(val2);
  console.log(currentSet);
  
  if (val.a && toggle === true) {
    toggle = false;
    currentSet.delete(val);
  }

  console.log("end loop");
});

console.log("Final Set\n--------");
console.log(set);
console.log(set.entries())

console.log(parseInt(0711));