const newDate = new Date()
/** Date related */
const date = newDate.getDate() // tarikh output asbe
const day = newDate.getDay() // saptahik din guloke number akare dibe 0 - 6 porjonto suru hobe sunday theke
const month = newDate.getMonth() // eta month number dibe 0 theke suru kore 
const year = newDate.getFullYear() // year 
const fullDate = newDate.toDateString() // Tue Aug 22 2023
// console.log(fullDate);

/**Time related */
const hour = newDate.getHours() // hour
const minutes = newDate.getMinutes() // minutes
const seconds = newDate.getSeconds() // seconds
const fullTime = newDate.toTimeString() // time with GMT 10:15:16 GMT+0600 (Bangladesh Standard Time)
const fullTimeInLocal = newDate.toLocaleTimeString() // just show local time 10:15:16 AM

console.log(fullTime);
console.log(fullTimeInLocal);

// if (day === 5) {
//     console.log('Friday is Relax day');
// } else {
//     console.log('working day');
// }