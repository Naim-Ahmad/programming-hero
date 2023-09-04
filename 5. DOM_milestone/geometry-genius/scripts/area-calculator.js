
function calculateTriangleArea() {
    // get the base value;
    const base = getNumberValueFromInput('triangle-base')
    // get the height value;
    const height = getNumberValueFromInput('triangle-height')
    // calculate the base and height by formula
    if (isNaN(base) || isNaN(height)) {
      alert('Please Provide a number');
      return;
    }
    const area = 0.5 * base * height;
    // show area in the output span
  setInnerText('triangle-area', area);
  createRowAndAppend('Triangle', area)
    
}

function calculateRectangleArea() {
    // get the width value input field
    const width = getNumberValueFromInput('rectangle-width');
    // get the length from input field
    const length = getNumberValueFromInput('rectangle-length');
    // calculate the area flowing formula
    if (isNaN(width) || isNaN(length)) {
      alert('Please Provide a number');
      return;
    }
    const area = width * length;
    // show area as a output in the web
  setInnerText('rectangle-area', area);
  // create history and show as table 
  createRowAndAppend('Rectangle', area);
}

function calculateParallelogramArea() {
  const base = getNumberValueFromInput('parallelogram-base');
  const height = getNumberValueFromInput('parallelogram-height');
  if (isNaN(base) || isNaN(height)) {
    alert('Please Provide a number');
    return;
  }
  const area = base * height;
  setInnerText('parallelogram-area', area);
  // create history and show as table
  createRowAndAppend('Parallelogram', area);
}
function calculateRhombusArea() {
   const base = getNumberValueFromInput('pentagon-base');
   const height = getNumberValueFromInput('pentagon-height');
   if (isNaN(base) || isNaN(height)) {
     alert('Please Provide a number');
     return;
   }
   const area = 0.5 * base * height;

   setInnerText('pentagon-area', area);
   // create history and show as table
   createRowAndAppend('Pentagon', area);
}
function calculatePentagonArea() {
  const base = getNumberValueFromInput('pentagon-base');
  const height = getNumberValueFromInput('pentagon-height');
  if (isNaN(base) || isNaN(height)) {
    alert('Please Provide a number');
    return;
  }
  const area = 0.5 * base * height;

  setInnerText('pentagon-area', area);
  // create history and show as table
  createRowAndAppend('Pentagon', area);
}
function calculateEllipseArea(){
  const major = getNumberValueFromInput('ellipse-major');
  const minor = getNumberValueFromInput('ellipse-minor');
  if (isNaN(major) || isNaN(minor)) {
    alert('Please Provide a number');
    return;
  }
  const area = Math.PI * major * minor;

  setInnerText('ellipse-area', area.toFixed(2));
  // create history and show as table
  createRowAndAppend('Ellipse', area);
}