function stringSubstring(searchWord, text) {


    let flag = false;

    let spl = text.split(' ');

    for (let i of spl) {

        if (i.toLowerCase() === searchWord) {
            flag = true;


        }
    }


    if (flag) {
        console.log(searchWord);
    } else {
        console.log(`${searchWord} not found!`);
    }
}


stringSubstring('javascript',
    'JavaScript is the best programming language'
)

stringSubstring('python',
    'JavaScript is the best programming language'
)