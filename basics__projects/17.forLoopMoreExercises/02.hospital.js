function hospital(input) {
    let count = Number(input.shift())

    let treatedPatients = 0;
    let untreatedPatients = 0;


    let doctor = 0;


    for (let i = 0; i < count; i++) {
        doctor += 7;

        let num = Number(input.shift());

        if (i % 3 === 0) {
            if (untreatedPatients > treatedPatients){
                doctor++;
                treatedPatients += num - doctor
                untreatedPatients += num % doctor

            }
        } else {
            treatedPatients += num - doctor
            untreatedPatients += num % doctor




        }


    }

    console.log(input)


}

hospital(['4', '7', '27', '9', '1'])
