function minNumber(a) {

    let save = 9999;
    let index = 0;

    while (true) {
        let commandNum = a[index];
        index++;

        if (commandNum === "Stop"){
            console.log(save);
            break;
        } else {
            if (Number(commandNum) < save){
                save = Number(commandNum);
            }

        }


    }

}

minNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])

