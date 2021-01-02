function countStringOccurrences(text, searchStr) {
    let words = text.split(' ');


    let counter = 0;
    for (let w of words) {
        if (w === searchStr) {
            counter++;
        }


    }

    console.log(counter);

}

countStringOccurrences("This is a word and it also is a sentence",
    "is"
)