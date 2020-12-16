function centuriesToMinutes(num) {

    let days = Math.trunc((num * 100) * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;


    console.log(`${num} centuries = ${num * 100} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

centuriesToMinutes(1)