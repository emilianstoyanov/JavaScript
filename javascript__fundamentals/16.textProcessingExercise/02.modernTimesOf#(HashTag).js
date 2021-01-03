function modernTimesOfHashTag(text) {

    let save = [];

    let flag = true;
    let spl = text.split(' ');

    for (let i of spl) {

        if (i.startsWith('#') && i.length > 1) {

            save.push(i);

        }
    }


    for (let j of save) {

        let cut = j.substr(1);

        for (let s = 0; s < cut.length; s++) {

            if (cut[s].charCodeAt(0) < 65 || cut[s].charCodeAt(0) > 90 && cut[s].charCodeAt(0) < 97 || cut[s].charCodeAt(0) > 122) {
                flag = false;
                break;

            }


        }
        if (flag) {
            console.log(cut);
            flag = true;
        }


    }


}


modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')