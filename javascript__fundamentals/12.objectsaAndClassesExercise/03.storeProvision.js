function storeProvision(stock, ordered) {
    const products = {};


    for (let i = 0; i < stock.length; i += 2) {
        const product = stock[i];
        products[product] = Number(stock[i + 1]);

    }

    for (let k = 0; k < ordered.length; k += 2) {
        const product = ordered[k];
        const quantity = Number(ordered[k + 1]);
        if (products[product] === undefined) {
            products[product] = quantity;
        } else {
            products[product] += quantity;
        }
    }

    for (let product in products) {
        console.log(`${product} -> ${products[product]}`)
    }


    // for (let product of Object.keys(products)) {
    //     console.log(`${product} -> ${products[product]}`)
    // }
}


storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
