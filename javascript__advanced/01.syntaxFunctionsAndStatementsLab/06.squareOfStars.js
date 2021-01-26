function squareOfStars(list) {


    if (list === undefined) {
        for (let i = 1; i <= 5; i++) {
            console.log(`* `.repeat(5));
        }

    } else {
        for (let i = 1; i <= list; i++) {
            console.log(`* `.repeat(list));
        }
    }

}


squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars();
