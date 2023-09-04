const getFriends = arr => {
    const friends = [];
    for (const friend of arr) {
        const length = friend.length;
        if (length % 2 === 0) {
            friends.push(`name- ${friend}, length - ${length}`)
        }
    }
    return friends
}
const friends = [
  'naim',
  'habibullah',
  'abid',
  'taohid',
  'sanaullah',
  'hussain',
];

console.log(getFriends(friends));