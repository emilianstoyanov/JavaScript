function fruit(typeFruit, weightGrams, price) {

    let gramsToKg = weightGrams / 1000;

    return `I need $${(gramsToKg * price).toFixed(2)} to buy ${gramsToKg.toFixed(2)} kilograms ${typeFruit}.`;

}

console.log(fruit('orange', '2500', '1.80'));