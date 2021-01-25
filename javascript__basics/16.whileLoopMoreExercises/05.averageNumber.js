function averageNumber(input) {
    let count = Number(input.shift());


    let total = 0;


    for (let i = 0; i < count; i++) {
        let num = Number(input.shift());
        total += num;

    }


    console.log((total / count).toFixed(2));
}

averageNumber(['2', '6', '4']
)