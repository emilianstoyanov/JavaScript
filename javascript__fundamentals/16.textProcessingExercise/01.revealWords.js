function revealWords(inpWord, text) {


    let spl = inpWord.split(', ');

    let splText = text.split(' ');

    for (let i of splText) {

        if (i.includes('*')) {

            for (let k of spl) {
                if (k.length === i.length) {
                    text = text.replace(i, k);

                }
            }

        }

    }
    console.log(text);


}

revealWords('great',
    'softuni is ***** place for learning new programming languages'
)

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)