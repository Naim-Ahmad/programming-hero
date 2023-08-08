/* 
    আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।
    এইবার ভালো করে খেয়াল করো।
    প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
    সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
    তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা
    এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

    উত্তর হিসেবে সংখ্যা রিটার্ন করবে।
*/

function paperRequirement(book1Quantity, book2Quantity, book3Quantity) {
    const book1Page = 100
    const book2Page = 200
    const book3Page = 300
    const totalBook1Page = book1Page * book1Quantity;
    const totalBook2Page = book2Page * book2Quantity;
    const totalBook3Page = book3Page * book3Quantity;
    const totalPage = totalBook1Page + totalBook2Page + totalBook3Page
    return totalPage
}

console.log(paperRequirement(5, 10, 15));