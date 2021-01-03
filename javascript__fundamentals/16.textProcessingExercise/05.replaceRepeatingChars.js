function replaceRepeatingChars(text) {


    let save = '';

    let momentLetter = '';
    let spl = text.split('');

    for (let i = 0; i < spl.length; i++) {

        if (spl[i] !== momentLetter) {
            save += spl[i];
            momentLetter = spl[i];

        }


    }

    console.log(save)


}


replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')

replaceRepeatingChars('qqqwerqwecccwd')