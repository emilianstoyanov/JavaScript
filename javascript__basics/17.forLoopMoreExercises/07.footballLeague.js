function footballLeague(input) {
    let capacityTheStadium = Number(input.shift());
    let countAllFans = Number(input.shift());

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;


    for (let i = 0; i < countAllFans; i++) {
        let sector = String(input.shift());
        if (sector === "A") {
            sectorA++;
        } else if (sector === "B") {
            sectorB++;
        } else if (sector === "V") {
            sectorV++;
        } else if (sector === "G") {
            sectorG++;
        }


    }

    console.log(`${(sectorA / countAllFans * 100).toFixed(2)}%`);
    console.log(`${(sectorB / countAllFans * 100).toFixed(2)}%`);
    console.log(`${(sectorV / countAllFans * 100).toFixed(2)}%`);
    console.log(`${(sectorG / countAllFans * 100).toFixed(2)}%`);
    console.log(`${(countAllFans / capacityTheStadium * 100).toFixed(2)}%`);

}

footballLeague([
        '93', '16', 'A', 'V', 'G',
        'G',  'B',  'B', 'G', 'B',
        'A',  'B',  'B', 'B', 'A',
        'B',  'B',  'A'
    ]

)