function alertHandler() {
    alert('tui ki asos')
}

function confirmHandler() {
    const love = confirm('Are you sure you love me?')
    if (love) {
        console.log('then i marry you')
    } else {
        console.log('Go back and stay normal!');
    }
}

function promptHandler() {
    const name = prompt('Tell me your name!')
    console.log(name);
}