/**
 * 1. if ticket is less than 100, per ticket price will 100tk
 * 2. if ticket price more than 100 and less than 200. first 100 ticket will be 100 tk and others will be 90tk.
 * 3. if you purchase more than 200
 *      first 100 ticket will be 100 tk
 *      100-200 ticket will be 90tk
 *      and more than 200 wil be 70tk
 */

function ticketPrice(quantity) {
    let totalTicketPrice = 0;
    if (quantity >= 100 && quantity <= 200) {
        for (let i = 1; i <= quantity; i++){
            if (i <= 100) {
                totalTicketPrice += 100;
            } else {
                totalTicketPrice += 90
            }
        }
        return totalTicketPrice
    } else if (quantity <= 100) {
        totalTicketPrice += 100
    } else if (quantity > 200) {
        for (let i = 1; i <= quantity; i++){
            if (i <= 100) {
              totalTicketPrice += 100;
            } else if (i > 100 && i <= 200) {
              totalTicketPrice += 90;
            } else {
              totalTicketPrice += 70;
            }
        }
        return totalTicketPrice
    }
}

const totalTicketPrice = ticketPrice(201)
console.log(totalTicketPrice);