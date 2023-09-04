class Vehicle{
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    move() {
        console.log('moving moving');
    }
}

class Bus extends Vehicle {
    constructor(name, type, seat, ticketPrice) {
        super(name, type)
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    route(to, end) {
        console.log(`Bus Name: ${this.name}, seat No: ${this.seat}, Ticket Price: ${this.ticketPrice}. from: ${to}, end: ${end}`);
    }
}

const hanif = new Bus('Hanif', 'chair', 'b2', 500);
console.log(hanif);
hanif.route('Chittagong', 'Dhaka')