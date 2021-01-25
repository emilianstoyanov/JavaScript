function weatherForecast(input) {
    let word = String(input);

    if (word === "sunny") {
        console.log(`It's warm outside!`);
    } else {
        console.log(`It's cold outside!`);
    }


}

weatherForecast("sunny")