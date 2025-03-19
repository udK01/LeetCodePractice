function groupSort(arr) {
  let arrMap = new Map();

  for (const item of arr) {
    arrMap.set(item, (arrMap.get(item) || 0) + 1);
  }

  return Array.from(arrMap);
}

const regularExpression = new RegExp("^([ab])\\1*$");

console.log(regularExpression.test("a"));
console.log(regularExpression.test("b"));
console.log(regularExpression.test("ab"));
console.log(regularExpression.test("ba"));
console.log(regularExpression.test("aba"));
