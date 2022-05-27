function* counter(): Generator<number, string, boolean> {
  let i = 116;
  while (true) {
    if (yield i++) {
      break;
    }
  }
  return "aaaaaahhauuuuuiiiiiiiiiuuuuuuuaaaaaaaaaaaaaaadone!";
}
const gene = counter();
console.log(gene.next());

const gen = counter();
const result = gen.next();
gen.next();
var iter = counter();
var curr = iter.next();
while (!curr.done) {
  console.log(curr.value);
  curr = iter.next(curr.value === 5);
}
console.log(curr.value.toUpperCase());