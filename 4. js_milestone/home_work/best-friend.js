/* 
    একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

*/

function findBestFriend(arrOfNames) {
    let bestFriend = arrOfNames[0]
    for (let i = 0; i < arrOfNames.length; i++){
        const friendName = arrOfNames[i]
        if (bestFriend.length < friendName.length) {
            bestFriend = friendName
        }
    }
    return bestFriend
}

const friendsName = ['Habibullah', 'sk sadikuddin misbah', 'hafijur rahman', 'mirajul islam', 'Asaduzzaman', 'Oli vai']
const bestFriend = findBestFriend(friendsName)
console.log(bestFriend);