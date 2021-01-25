function streamOfLetters(input) {


    let countC = 0;
    let countO = 0;
    let countN = 0;

    let save = "";
    let momentSave = "";

    let searchLetter = input.shift()
    while (searchLetter !== "End") {
        if (Number(searchLetter.charCodeAt(0)) >= 65 && Number(searchLetter.charCodeAt(0) <= 90 || Number(searchLetter.charCodeAt(0)) >= 97 && Number(searchLetter.charCodeAt(0)) <= 122)) {
            if (searchLetter === "c" && countC === 0) {
                countC++;

            } else if (searchLetter === "o" && countO === 0) {
                countO++;


            } else if (searchLetter === "n" && countN === 0) {
                countN++;


            } else {
                momentSave += searchLetter;
            }

            if (countC + countN + countO === 3) {
                save += momentSave + " ";
                momentSave = "";
                countC = 0;
                countN = 0;
                countO = 0;

            }


        }
        searchLetter = input.shift();


    }


    console.log(save)
}

streamOfLetters([
    '%', '!',   'c',  '^',
    'B', '`',   'o',  '%',
    'o', 'o',   'M',  ')',
    '{', 'n',   '\\', 'A',
    'D', 'End'
])