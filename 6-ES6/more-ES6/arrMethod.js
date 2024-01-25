/** myMp method created here */
Array.prototype.myMap = function myMap(callBack) {
  const arr = this;
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    const modified = callBack(arr[i], i, arr);
    resultArr.push(modified);
  }
  return resultArr;
};
const arr = [1, 2, 3];

/** myMp method used here */
const myNewArr = arr.myMap((v) => v + v);
console.log(myNewArr);

/** myReduce method created here */
Array.prototype.myReduce = function myReduce(callBack, init = 0) {
  const arr = this;
  let initialValue = init;
  for (let i = 0; i < arr.length; i++) {
    initialValue = callBack(initialValue, arr[i]);
  }
  return initialValue;
};

/** myReduce method used here */
const result = arr.myReduce((prev, cur) => prev + cur, 0);
// console.log(result);

const products = [
  { name: "laptop", price: 50000 },
  { name: "phone", price: 10000 },
  { name: "keyboard", price: 1000 },
  { name: "laptop", price: 100000 },
];

/** myReduce method used here */
const totalPrice = products.myReduce((prev, cur) => prev + cur.price);
// console.log(totalPrice);

/** myFind method created here */
Array.prototype.myFind = function (callBack) {
  const arr = this;
  for (let index = 0; index < arr.length; index++) {
    if (callBack(arr[index])) {
      const result = arr[index];
      return result;
    } else {
      return undefined;
    }
  }
};

/** myFind method used here */
const findResult = products.myFind((item) => item.name === "laptop");
// console.log(findResult);

/** myFilter method created here */
Array.prototype.myFilter = function (callback) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

/** myFilter method used here */
const filtered = products.myFilter((item) => item.name === "laptop");
console.log(filtered);

const numbers = [1, 2, 3, 4, 5];
const reduced = numbers.reduce((prev, cur) => {
  console.log(prev, cur);
  return prev + cur;
});
console.log(reduced);
// const total = products.myReduce((prev, cur) => {
//     return prev + cur.price
// }, 0)
// console.log(total);
