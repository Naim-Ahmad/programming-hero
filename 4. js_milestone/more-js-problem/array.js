const age = 24
const name = 'sakib'
const person = {
    name: 'Naim',
    age: 34
}
const friends = [12, 13, 24, 55]
const isFriends = true

console.log(typeof age);
console.log(typeof name);
console.log(typeof person);
// two way to check typeof array
console.log(Array.isArray(friends));
console.log(friends instanceof(Array));
console.log(typeof isFriends);
// two way to check element in array is there or not
console.log(friends.includes(15));
console.log(friends.indexOf(12) >= 0);

const moreFriends = [55, 69, 40]
console.log(friends.concat(moreFriends));