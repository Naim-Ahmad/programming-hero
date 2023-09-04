class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const s1 = new Student('Naim', 22)
// Object.freeze(s1)
// Object.seal(s1)
// s1.name = 'English'
// console.log(s1);
// s1.printDetails()