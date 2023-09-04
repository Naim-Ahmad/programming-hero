// const oddArray = [1, 15, 29, 7, 99, 33];
// const evenArray = oddArray.map(num => {
//     if(num % 2 !== 0){
//         return num + 1
//     }
// })
// const evenArray = oddArray.map(num => num + 1)
// console.log(evenArray);

// const evenArray = [];
// for (const num of oddArray) {
//     evenArray.push(num + 1)
// }
// console.log(evenArray);

// const numbers = [33, 50, 79, 78, 90, 101, 30];
// const filter = numbers.filter(num => num % 10 === 0);
// console.log(filter);
// const find = numbers.find(num => num % 10 === 0);
// console.log(find);

const people = [
    { name: 'Naim', age: 20 },
    { name: 'Abid', age: 15 },
    { name: 'miraj', age: 22 },
]
// let sum = 0;
// for (const p of people) {
//     sum += p.age
// }
// console.log(sum);
// const numbers = [123, 42, 42, 342, 43];
// const sum = people.reduce((prev, cur) => prev + cur.age, 0);
// console.log(sum);

const instructor = [
    {name: 'Nodi', position: 'Senior'},
    {name: 'Akil', position: 'Junior'},
    {name: 'Shobuj', position: 'Senior'},
]
const senior = instructor.filter(instructor => instructor.position == 'Senior')
for (const name of senior) {
    console.log(name.name);
}



