// task one
let fruits = ['Apple', 'banana', 'pineapple']
let bananaInd = fruits.indexOf('banana')
fruits[bananaInd] = 'Orange'

// console.log(fruits)

// two

function checkGrade(name, totalNumber) {
    if (totalNumber >= 80) {
      console.log(name + ' is A grade');
    } else if (totalNumber >= 60) {
        console.log(name + ' is B grade');
    } else if (totalNumber >= 50) {
        console.log(name + ' is C grade')
    } else if (totalNumber >= 40) {
        console.log(name + ' is D grade');
    } else {
        console.log(name + ' is F grade')
    }
}
checkGrade('Naim', 85)
checkGrade('Tom', 66)
checkGrade('Jane', 95)
checkGrade('Pater', 56)
checkGrade('John', 40)

// three give me the largest number of three number

function largestNum(one, two, three) {
    if (one > two && one > three) {
        console.log("Largest number is " + one)
    } else if (two > one && two > three) {
        console.log('Largest number is ' + two);
    } else {
        console.log('Largest number is ' + three);
    }
}
largestNum(13, 79, 45)

// four 
function checkIsoScales(one, two, three) {
    if (one == two && one == three) {
        console.log('Three side are equal')
    } else if (one == two || one == three || two == three) {
        console.log('One side is equal');
    } else {
        console.log('0 side is equal');
    }
}
checkIsoScales(9, 8, 9)