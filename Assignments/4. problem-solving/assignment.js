function cubeNumber(number) {
  if (typeof number !== 'number') {
    return 'Please give me a valid number';
  } else if (number < 0) {
    return 'Please give me a positive number';
  }
  return number * number * number;
}

function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'Please give me string type of text';
  }
  return string1.includes(string2);
}

function sortMaker(arr) {
  if (
    arr.length !== 2 ||
    typeof arr[0] !== 'number' ||
    typeof arr[1] !== 'number'
  ) {
    return 'Please provide an array of exactly 2 numeric elements.';
  }
  const sortedArr = [];
  const number1 = arr[0];
  const number2 = arr[1];

  if (number1 < 0 || number2 < 0) {
    return 'Invalid Input';
  } else if (number1 < number2) {
    sortedArr.push(number2);
    sortedArr.push(number1);
    return sortedArr;
  } else if (number2 < number1) {
    sortedArr.push(number1);
    sortedArr.push(number2);
    return sortedArr;
  }
  return 'equal';
}

function findAddress(obj) {
  const street = obj.street !== undefined ? obj.street : '__';
  const house = obj.house !== undefined ? obj.house : '__';
  const society = obj.society !== undefined ? obj.society : '__';
  return street + ',' + house + ',' + society;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length <= 0) {
    return 'Please provide a non-empty array with valid numeric elements.';
  }
  let sum = 0;
  for (let v of changeArray) {
    sum += v;
  }
  return sum >= totalDue;
}

