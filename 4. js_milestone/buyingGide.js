const myBudget = 41000;

// if (myBudget > 80000) {
//     console.log('You can by a MacBook')
// } else if (myBudget > 60000) {
//     console.log('You can buy a gaming laptop')
// } else if (myBudget > 40000) {
//     console.log('You can buy a Lenovo Yoga laptop');
// } else {
//     console.log('You can buy a used laptop')
// }

switch (true) {
    case (myBudget > 80000):
        console.log('You can buy a MacBook')
        break;
    case (myBudget > 60000):
        console.log('You can buy a gaming laptop');
        break;
    case (myBudget > 40000):
        console.log('You can buy a Lenovo Yoga laptop');
        break;
    default: {
        console.log('You can buy an used laptop');
    }
}

