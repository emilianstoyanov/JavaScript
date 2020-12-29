function towns(input) {


    input.forEach(line => {
        const tokens = line.split(" | ");
        const town = {
            town: tokens[0],
            latitude: Number(tokens[1]).toFixed(2),
            longitude: Number(tokens[2]).toFixed(2)
        }
        console.log(town)
    });


}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])


// function towns(input) {
//
//
//     for (let i of input) {
//         let spl = i.split(" | ");
//         let town = spl[0];
//         let latitude = Number(spl[1]).toFixed(2);
//         let longitude = Number(spl[2]).toFixed(2);
//
//         let all = {town: town, latitude: latitude, longitude: longitude};
//
//         console.log(all);
//
//     }
//
//
// }
//
// towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])