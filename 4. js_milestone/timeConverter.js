const hours = 2
const minutes = 120
const seconds = 7200
// hour to minutes
function hourToMinute(hour) {
    return hour * 60 + ' minutes is in ' + hour + ' hour.'
}
console.log(hourToMinute(hours))
// hour to seconds
function hourToSeconds(hour) {
    return hour * 60 * 60 + ' seconds is in ' + hour + ' hour.'
}
console.log(hourToSeconds(hours));
// minutes to hour
function minutesToHours(minutes){
    return minutes / 60 + ' hour is in ' + minutes + ' minutes.'
}
console.log(minutesToHours(minutes))
// minutes to second
function minutesToSeconds(minutes) {
    return minutes * 60 + ' seconds is in ' + minutes + ' minutes'
}
console.log(minutesToSeconds(minutes))
// seconds to minute
function secondsToMinutes(seconds) {
    return seconds / 60 + ' minutes is in ' + seconds + ' seconds'
}
console.log(secondsToMinutes(seconds))
// seconds to Hour
function secondsToHours(seconds) {
    return seconds / 60 / 60 + ' hour is in ' + seconds + ' seconds'
}

console.log(secondsToHours(seconds))