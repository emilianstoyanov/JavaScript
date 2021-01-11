function pipesInPool(a, b, c, d) {
    let poolVolumeInLiters = Number(a);
    let flowRateFirstTubeHour = Number(b);
    let flowRateSecondTubeHour = Number(c);
    let hoursWorkerAbsent = Number(d);

    let firstTube = hoursWorkerAbsent * flowRateFirstTubeHour;
    let secondTube = hoursWorkerAbsent * flowRateSecondTubeHour;
    let total = firstTube + secondTube;
    let interest = (total / poolVolumeInLiters) * 100;
    let interestFirstTube = (firstTube / total) * 100;
    let interestSecondTube = (secondTube / total) * 100;

    if (total <= poolVolumeInLiters) {
        console.log(`The pool is ${interest.toFixed(2)}% full. Pipe 1: ${interestFirstTube.toFixed(2)}%. Pipe 2: ${interestSecondTube.toFixed(2)}%.`);
    } else {
        console.log(`For ${hoursWorkerAbsent.toFixed(2)} hours the pool overflows with ${(total - poolVolumeInLiters).toFixed(2)} liters.`);
    }
}


pipesInPool(100,
100,
100,
2.5

)