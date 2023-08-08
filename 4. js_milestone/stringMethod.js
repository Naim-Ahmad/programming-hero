const str = 'I love allah!'
const endWith = str.endsWith('allah', str.length -1)
// console.log(endWith);

const lyric = 'Sada sada kala kala'

const searchedWord = lyric.matchAll('kala')

// console.log(searchedWord);
const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches = str1.match(regexp);

console.log(matches);
