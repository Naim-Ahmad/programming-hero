/** copy 2 prokar
 * 1. shalow copy
 * 2. deep copy
 * */

const obj = {
  a: 10,
  b: {
    c: 20,
    d: {
      e: 30,
    },
  },
};

/** this is shalow copy */
const cloneObj = structuredClone(obj);
cloneObj.b.c = 50;
console.log(obj);

// cloneObj.b.c = 50;

// console.log(obj);

// const cloneObjDeep = structuredClone(obj);
// const cloneObjDeep = JSON.parse(JSON.stringify(obj));
// const cloneObjDeep = { ...obj, b: { ...obj.b } };

// cloneObjDeep.b.c = 50;

// console.log(obj);

// const num = [1, 2, 3, { a: 10, b: { c: 30 } }];

// let num1 = [...num];

// num1[3].b.c = 20;

// console.log(num);
