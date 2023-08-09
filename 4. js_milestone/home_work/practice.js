function delay(n) {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(n);
        }, n * 1000);
    })
}

async function timer(n) {
    console.log('start timer');
    for (let i = 0; i <= n; i++){
        const result = await delay(i)
        console.log(result);
    }
    console.log('end timer');
}
timer(10)