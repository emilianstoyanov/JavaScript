function password(a) {
    let name = String(a[0])
    let realPassword = String(a[1]);

    let index = 2;
    let momentPassword = String(a[index]);
    while (realPassword !== momentPassword){
        index ++;
        momentPassword = String(a[index]);


    } console.log(`Welcome ${name}!`);


}

password(["Gosho",
    "secret",
    "secret"])
