let historyCount = 1;
function getNumberValueFromInput(id) {
    const input = document.getElementById(id);
    const inputValue = input.value;
    const value = Number(inputValue);
    return value;
}

function setInnerText(id, text) {
    const input = document.getElementById(id);
    input.innerText = text
}
const outputValues = [];
const shapes = [];
function createRowAndAppend(shapeName, outputValue) {
    if (outputValues.includes(outputValue) && shapes.includes(shapeName)) {
        alert('You have already calculated this value Please check the history')
        return
    } else {
        outputValues.push(outputValue);
        shapes.push(shapeName)
    }
    // create row and column
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = historyCount + '. ' + shapeName;
    const td2 = document.createElement('td');
    td2.innerText = outputValue;
    const td3 = document.createElement('td');
    td3.innerHTML = `
    <button class="btn btn-primary btn-sm text-xs capitalize">Convert To M</button>
    `
    // append the created element
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    document.getElementById('tbody').appendChild(tr)
    historyCount++
}