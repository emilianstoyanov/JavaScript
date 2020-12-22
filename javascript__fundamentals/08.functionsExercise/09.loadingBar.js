function loadingBar(num) {

    let loading = "";

    for (let i = 1; i <= num / 10; i++) {
        loading += "%";

    }
    for (let k = num / 10; k < 10; k++) {
        loading += ".";
    }

    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${loading}]`);
    } else {
        console.log(`${num}% [${loading}]`);
        console.log(`Still loading...`);
    }


}


loadingBar(30)