function trainingLab(a, b) {
    let weightInMeters = Number(a);
    let lengthInMeters = Number(b);


    let lengthInCentimeters = (lengthInMeters * 100) - 100;
    let modLength = Math.floor(lengthInCentimeters / 70);


    let widthInCentimeters = weightInMeters * 100;
    let modWidth = Math.floor(widthInCentimeters / 120);

    let total = (modLength * modWidth) - 3;
    console.log(total);


}

trainingLab(8.4,
    5.2
)