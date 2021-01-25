function pointOnRectangleBorder(a, b, c, d, e, f) {
    let x1 = Number(a);
    let y1 = Number(b);

    let x2 = Number(c);
    let y2 = Number(d);

    let searchX = Number(e);
    let searchY = Number(f);

    if ((searchX === x1 || searchX === x2) && (searchY >= y1 && searchY <= y2)) {
        console.log(`Border`);

    } else if ((searchY === y1 || searchY === y2) && (searchX >= x1 && searchX <= x2)) {
        console.log(`Border`);
    } else {
        console.log(`Inside / Outside`);
    }


}


pointOnRectangleBorder(2,
    -3,
    12,
    3,
    2,
    4,
)