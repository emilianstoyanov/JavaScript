function nxNMatrix(num) {

    let save = [];
    let stopC0unt = 0;

    for (let i = 1; i <= num; i++) {
        save.push(num)

        if (stopC0unt === num) {
            break;
        }

        if (i === num) {
            console.log(save.join(" "))
            stopC0unt++;
            save = []
            i = 0;
        }
    }


}

nxNMatrix(7)