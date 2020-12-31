function neighborhoods(input) {
    let map = new Map();


    let neighborhoods = input.shift().split(', ');

    for (let n of neighborhoods) {
        map.set(n, []);
    }


    for (let i of input) {
        let spl = i.split(' - ');
        let searchNeighborhoods = spl[0];
        let namePeople = spl[1];

        if (neighborhoods.includes(searchNeighborhoods)) {
            map.get(searchNeighborhoods).push(namePeople);
        }

    }


    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);

    for (let k of sorted) {
        console.log(`${k[0]}: ${k[1].length}`);
        for (let v of k[1]) {
            console.log(`--${v}`);
        }

    }

}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)