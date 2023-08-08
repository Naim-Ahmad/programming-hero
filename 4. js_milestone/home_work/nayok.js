const nayoks=['Bangla Bhai', 'English Bhai','Korean Bhai','Turkish Bhai '];
for( const nayok of nayoks){
    console.log(nayok)
}

var createCounter = function (n) {
    let counter = n-1;
  return function () {
      counter += 1;
      return counter
  };
};

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());