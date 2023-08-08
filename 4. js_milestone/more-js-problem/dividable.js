for (let i = 1; i <= 50; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar', i);
    } else if (i % 5 == 0) {
        console.log('bar', i);
    } else if(i %3 == 0) {
        console.log('foo', i);
    }
}