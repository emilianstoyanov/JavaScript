function storage(input) {
    let map = new Map();

    for (let string of input) {
        let spl = string.split(' ');
        let product = spl[0];
        let quantity = Number(spl[1]);

        if (map.has(product)) {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        } else {
            map.set(product, quantity);

        }


    }
    for (let kv of map) {
        console.log(`${kv[0]} -> ${kv[1]}`);
    }


}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)