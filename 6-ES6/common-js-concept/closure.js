// function counter() {
//     let count = 0;
//     return function () {
//         count++
//         return count
//     }
// }

function counter() {
    let count = 0;
    return {
        increment: function () {
            count++
            return count
        },
        decrement: function () {
            count--
            return count
        }
    }
}

const subhanallah = counter();
console.log(subhanallah);
console.log(subhanallah.increment());
console.log(subhanallah.increment());
console.log(subhanallah.increment());
console.log(subhanallah.increment());
console.log(subhanallah.increment());
const alhamdulillah = counter()
console.log(alhamdulillah.decrement());
console.log(alhamdulillah.decrement());
console.log(alhamdulillah.decrement());
console.log(alhamdulillah.decrement());
const allhuAkbar = counter()

