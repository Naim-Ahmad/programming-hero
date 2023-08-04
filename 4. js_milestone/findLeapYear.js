function findLeapYearArr(yearArr) {
    const leapYearArr = []
    for (let i = 0; i < yearArr.length; i++){
        if (yearArr[i] % 4 === 0 && yearArr % 100 !== 100 || yearArr % 400 === 0) {
            leapYearArr.push(yearArr[i])
        }
    }
    return leapYearArr
}
const yearArr = [2023, 2024, 2025, 2028, 2030];
const leapYearArr = findLeapYearArr(yearArr)
console.log(leapYearArr);