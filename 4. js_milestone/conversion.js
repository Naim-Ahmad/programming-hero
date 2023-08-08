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

/** 
 to number conversion
 */
// explicit conversion
console.log('To number conversion');
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN
console.log(Number('')); // 0
console.log(Number('hello')); // NaN
console.log(Number('\n')); // 0
console.log(Number('123')); // 123
console.log(Number(true)); // 1
console.log(Number(false)); // 0
/**
 * implicit conversion ঘটে ৪ যায়গাতে। 
 * 1. comparison operator (<, <=, >, >=)
 * 2. bitwise operator (&, |, ^, ~ )
 * 3. arithmetic operator (-, +, *, /, %) তবে binary + operator ইমপ্লিসিট কনভার্সন ঘটায় না। 
 * 4. loosely equality operator (==, !=) তবে যদি অপারেন্ড স্ট্রিং হয় তাহলে কনভার্সন ঘটে না। 
 * 
 * তবে খেলাফে কিয়াস ২ টি যায়গা আছে যেখানে কনভার্সন ঘটে না 
 * ১। null অথবা undefined কে যখন == দিয়ে চেক করা হয় যেমন null == ০ এখানে অউতপুট আসবে false, কারণ এখানে কনভার্সন ঘটেনি। 
 * ২। null কখনো কার সমান হতে পারে না যেমন NaN == NaN এখানে অউতপুত আসবে false 
*/
console.log('Number implicit conversion');
// equality operator
console.log('Equality operator');
console.log('3' > '1'); // true
console.log('foo' >= 'bar');
console.log();
console.log();
console.log();


// arithmetic operator
console.log('3' + '1'); // 31 ekhane concat hoye jabe conversion hobe na
console.log('3' - '1');
console.log(true + 3); // 4
console.log(4 / false); // infinity
console.log(2 * 2 + null); // 4
console.log(2 * 2 + undefined); // NaN













