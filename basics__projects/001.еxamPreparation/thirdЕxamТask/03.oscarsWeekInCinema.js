function oscarsWeekInCinema(a, b, c) {
    let filmName = String(a);
    let typeHall = String(b);
    let numberTickets = Number(c);

    let total = 0;
    if (filmName === "A Star Is Born") {
        if (typeHall === "normal") {
            total = 7.50 * numberTickets;

        } else if (typeHall === "luxury") {
            total = 10.50 * numberTickets;

        } else if (typeHall === "ultra luxury") {
            total = 13.50 * numberTickets;

        }
    } else if (filmName === "Bohemian Rhapsody") {
        if (typeHall === "normal") {
            total = 7.35 * numberTickets;

        } else if (typeHall === "luxury") {
            total = 9.45 * numberTickets;

        } else if (typeHall === "ultra luxury") {
            total = 12.75 * numberTickets;

        }
    } else if (filmName === "Green Book") {
        if (typeHall === "normal") {
            total = 8.15 * numberTickets;

        } else if (typeHall === "luxury") {
            total = 10.25 * numberTickets;

        } else if (typeHall === "ultra luxury") {
            total = 13.25 * numberTickets;

        }
    } else if (filmName === "The Favourite") {
        if (typeHall === "normal") {
            total = 8.75 * numberTickets;

        } else if (typeHall === "luxury") {
            total = 11.55 * numberTickets;

        } else if (typeHall === "ultra luxury") {
            total = 13.95 * numberTickets;

        }

    }

    console.log(`${filmName} -> ${total.toFixed(2)} lv.`);
}


oscarsWeekInCinema("A Star Is Born",
    "luxury",
    42
)