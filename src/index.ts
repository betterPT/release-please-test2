function* counter(): Generator<number, string, boolean> {
  let i = 16;
  while (true) {
    if (yield i++) {
      break;
    }
  }
  return "aaaaaahhaaaaaaaaaaaaaaaadone!";
}
var iter = counter();
var curr = iter.next();
while (!curr.done) {
  console.log(curr.value);
  curr = iter.next(curr.value === 5);
}
console.log(curr.value.toUpperCase());