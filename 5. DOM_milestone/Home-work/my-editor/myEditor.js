const menuBar = document.getElementById('menu-bar')
const textareaField = document.getElementById('textarea-field')

let isBolded = false;
let isItalic = false;
let isUnderline = false;

let previousTarget = null;

menuBar.addEventListener('click', function(event){
    const eventId = event.target.id;
    switch(eventId){
        case 'bold':
            isBolded = setStyle(event, isBolded, 'fontWeight', 'bold')
            break;
        case 'italic':
            isItalic = setStyle(event, isItalic, 'fontStyle', 'italic')
            break;
        case 'underline':
            isUnderline = setStyle(event, isUnderline, 'textDecoration', 'underline')
            isUnderline == false ? textareaField.style.textDecoration = 'none' : ''
            break;
        case 'align-left':
            setAlign(event, 'left');
            break;
        case 'align-center':
            setAlign(event, 'center');
            break;
        case 'align-right':
            setAlign(event, 'right');
            break;
        case 'align-justify':
            setAlign(event, 'justify');
            break;
        case 'font-size':
            event.target.addEventListener('change', function(e){
                e.stopImmediatePropagation()
                textareaField.style.fontSize = e.target.value + 'px';
            })
        break;
        case 'color':
            event.target.addEventListener('change', function(e){
                e.stopImmediatePropagation()
                textareaField.style.color = e.target.value;
            })
        break;
    }
})



function setStyle(event, isFired, property, value) {
  if (!isFired) {
    event.target.style.backgroundColor = 'red';
    textareaField.style[property] = value;
    return true;
  } else {
    event.target.style.background = 'none';
    textareaField.style[property] = 'normal';
    return false;
  }
}
function setAlign(event, value) {
  !previousTarget ? event.target : (previousTarget.style.background = 'none');
  setStyle(event, false, 'textAlign', value);
  previousTarget = event.target;
}