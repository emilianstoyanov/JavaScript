function movieRatings(input) {
    let countFilms = Number(input.shift());

    let lowestRating = 99999;
    let highestRating = 0;

    let lowestName = "";
    let highestName = "";

    let totalRating = 0;
    for (let i = 1; i <= countFilms; i++) {
        let film = input.shift();
        let rating = Number(input.shift());
        totalRating += rating;


        if (rating < lowestRating) {
            lowestRating = rating;
            lowestName = film;
        }
        if (rating > highestRating) {
            highestRating = rating;
            highestName = film;
        }


    }
    console.log(`${highestName} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(totalRating / countFilms).toFixed(1)}`);
}


movieRatings([
        '5', 'A Star is Born',
        '7.8', 'Creed 2',
        '7.3', 'Mary Poppins',
        '7.2', 'Vice',
        '7.2', 'Captain Marvel',
        '7.1'
    ]
)
