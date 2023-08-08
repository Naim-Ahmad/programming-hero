const arr = [2000, 2002, 2005, 2010, 2011, 2015, 2020, 2021, 2022]

const removedElement = arr.toSpliced(arr.indexOf(2020));
console.log(removedElement);
console.log(arr);