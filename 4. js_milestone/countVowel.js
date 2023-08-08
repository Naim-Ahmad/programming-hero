function findVowel(sentence) {
    const arr = ['a', 'e', 'i', 'u']
    let count = 0;
    for (let i = 0; i < sentence.length; i++){
        if (arr.includes(sentence[i].toLowerCase())) {
            count++
        }
    }
    return count
}
const propose = 'I love allah'
console.log(findVowel(propose));