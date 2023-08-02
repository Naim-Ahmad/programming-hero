// 1. display "ajke amar mon valo nei" for 39 times
for (let i = 1; i <= 39; i++){
    console.log('Ajke amar mon valo nei ' + i)
}
// 2. display number between 58 to 98 
// solution one
let start = 58
while (start <= 98) {
    console.log(start)
    start++
}
// solution two
for (let i = 0; i <= 98; i++){
    if (i < 58) {
        continue
    }
    console.log(i)
}
// 3. show all even number from 412 to 456
// solution 1
for (let i = 412; i <= 456; i+=2){
    console.log(i)
}
// solution 2
for (let i = 412; i <= 456; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 4. show all odd number from 581 to 623
// solution 1
for (let i = 623; i >= 581; i--) {
  console.log(i);
}
// solution 2
for (let i = 581; i <= 623; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

/* 5. difference between while loop and for loop  */
/* 6. all topic array and see it's output*/
const topics = ["variable", "loop", "condition", "array"]
for (let i = 0; i < topics.length; i++){
    if (i === 0) {
        console.log('which topics that i learn');
    }
    console.log(i+1 + '. ' + topics[i])
}
/** 7. mobile phone array and display output by while loop */
const mobiles = ["Nokia", "Symphony", "Xiaomi", "Itel"]
let i = 0;
while (i < mobiles.length) {
    if (i === 0) {
        console.log('Mobile companies Name');
    }
    console.log(i+1 + '. ' + mobiles[i])
    i++
}
/** 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44 */
for (let i = 30; i <= 86; i++){
    if (i > 44) {
        break
    }
    console.log(i)
}

/** 9. Write the price of the books that you have. 
Display the prices if the prices is lower than 200 */

let bookPrice = [100,  60, 44, 150, 170, 200, 277, 523, 5, 6734]
for (let i = 0; i < bookPrice.length; i++){
    if (bookPrice[i] < 200) {
        console.log(bookPrice[i])
    }
}
