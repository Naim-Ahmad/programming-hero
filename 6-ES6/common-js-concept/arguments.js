function sum(a, b, c) {
    // you can access bracket notation 
    // console.log(arguments[arguments.length - 1]);
    // you can throw loop in this arguments
    // for (const args of arguments) {
    //     console.log(args);
    // }
    // you can't push an element but you can add
    // arguments[6] = 100
    // arguments.push(100)
    // console.log(arguments);
    // you cant apply forEach and map related method
    // console.log(...arguments);
    const args = [...arguments]
    console.log(args);
    return a + b + c;
}

console.log(sum(5, 10, 15, 20, 30 , 40));