const years = [2000, 2010, 2011, 2014, 2015, 2016, 2020, 2021, 2022];
// remove element from array by arr.splice()
// const removedElm = years.splice(years.indexOf(2020))
// console.log(removedElm);
// console.log(years);
// const removedElm2 = years.splice(2, 5)
// console.log(removedElm2);
// console.log(years);

// insert element in array
years.splice(3, 0, 2013)
// console.log(years);
// console.log(years.includes(2013));
years.splice(years.indexOf(2011) + 1, 0, 2012)
// console.log(years);
years.splice(-3, 0, 2017 )
// console.log(years);
years.splice(9, 0, 2018)
years.splice(2, 3)
console.log(years);
