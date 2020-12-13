function foreignLanguages(input) {
    let word = String(input);


    switch (word) {
        case "USA":
        case "England":
            console.log(`English`)
            break;

        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log(`Spanish`)
            break;

        default:
            console.log(`unknown`)
    }


}

foreignLanguages("Germany")