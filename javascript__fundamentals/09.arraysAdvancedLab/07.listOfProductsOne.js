function listOfProducts(input) {

    let sorting = input.sort();

    for (let i = 1; i <= input.length; i++) {
        console.log(`${i}.${sorting[i - 1]}`);

    }


}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])