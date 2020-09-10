function oldBooks(a) {

    let index = 0;
    let flag = false;

    let lengthBooks = a.length - 1;

    while (true) {
        let searchBook = String(a[index]);
        index++;

        if (searchBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${lengthBooks - 1} books.`);
            flag = true;
            break;


        }

        if (searchBook === String(a[index])) {
            console.log(`You checked ${index - 3} books and found it.`);
            flag = true;
            break;


        }

    } if (flag === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${lengthBooks - 1} books.`);


    }

}

oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
