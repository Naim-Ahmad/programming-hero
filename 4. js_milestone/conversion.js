/*
 3 type of conversion
    1. to string
    2. to number
    3. to boolean
 */
// explicit string conversion
console.log(String(123))
console.log(String(-123));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String(NaN));
console.log(String(function () { }));
console.log(String({})); // [object Object]
console.log(String([])); // ''

// Boolean Conversion
/**
 * 
 * লজিক্যাল কন্টেক্সটে implicit conversion ঘটে 
 * লজিক্যাল কন্টেক্সট যেমন 
 * 1. if(2){}
 * 2.  2 || 'hello'
 * 3. !!2
 * 4. Boolean(2)
 * 
 * boolean এ যখন conversion ঘটে তখন true / false রেজাল্ট আসবে এখন আমাদের জানতে হবে কখন কখন false আসে সহজ ভাবে বললে আমাদের কে জানতে হবে falsy value কি কি। নিচে তা দেওয়া হলঃ- 
 * 1. ''
 * 2. undefined
 * 3. null
 * 4. 0 / -0
 * 5. NaN
 */
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(0))
console.log(Boolean(-0))










