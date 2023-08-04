function milesToKm(miles) {
    return 'Your KM is ' + miles * 1.60934;
}
console.log(milesToKm(2));

function kmToMiles(km) {
    return 'Your Miles is ' + (km / 1.60934).toFixed(2);
}
console.log(kmToMiles(10));