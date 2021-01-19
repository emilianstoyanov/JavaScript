function passengersPerFlight(input) {
    let numberOfAirlines = Number(input.shift());

    let total = 0;
    let name = '';

    for (let i = 1; i <= numberOfAirlines; i++) {

        let nameAirlines = String(input.shift());
        let momentTotal = 0;
        let numberFlights = 0;
        while (true) {

            let inp = input.shift();
            if (inp === `Finish`) {
                break;
            } else {
                numberFlights++;
                momentTotal += Number(inp);
            }

        }

        momentTotal = Math.floor(momentTotal / numberFlights);
        console.log(`${nameAirlines}: ${momentTotal} passengers.`);

        if (momentTotal > total) {
            total = momentTotal
            name = nameAirlines
            numberFlights = 0;
        } else {
            momentTotal = 0;
            numberFlights = 0;

        }


    }

    console.log(`${name} has most passengers per flight: ${total}`);


}

passengersPerFlight([
    '3', 'WizzAir',
    '180', '230',
    '100', 'Finish',
    'BulgariaAir', '50',
    '60', '90',
    'Finish', 'Lufthansa',
    '260', '320',
    'Finish'
])


passengersPerFlight([
    '2', 'Qatar Airways',
    '95', '231',
    '323', 'Finish',
    'LOT', '76',
    '89', '55',
    'Finish'
])
