function printDetails(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) {
        return "please provide an Object"
    }
    const name = obj.name || 'nai'
    const address = obj.address || 'nai'
    const age = obj.age || 'nai'
    return 'My name is ' + name + ', My address is ' + address + ', and age is ' + age 
}
const obj = {
    name: 'Naim ahmad',
    address: 'jessore', 
}
console.log(printDetails(obj));