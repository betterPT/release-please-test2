function* counter(): Generator<number, string, boolean> {
  let i = 116;
  while (true) {
    if (yield i++) {
      break;
    }
  }
  return "aaaaaahhauuuuuiiiiiiiiiiiiiiiiiiiddddddiiiissssssssssssssssuuuuuuuaaaaaaaaaaaaaaaaadone!";
}
const gene = counter();
console.log(gene.next());

const gene2 = counter();
console.log(gene2.next());

const gene3 = counter();
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
