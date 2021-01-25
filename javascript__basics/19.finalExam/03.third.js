function footballSouvenirs(a, b, c) {
    let team = String(a);
    let kindSouvenirs = String(b);
    let numberSouvenirs = Number(c);

    let flag = false;


    let total = 0;
    if (team === `Argentina`) {
        if (kindSouvenirs === `flags`) {
            total = 3.25 * numberSouvenirs;
        } else if (kindSouvenirs === `caps`) {
            total = 7.20 * numberSouvenirs;
        } else if (kindSouvenirs === `posters`) {
            total = 5.10 * numberSouvenirs;
        } else if (kindSouvenirs === `stickers`) {
            total = 1.25 * numberSouvenirs;
        } else {
            flag = true;
            console.log(`Invalid stock!`)
        }
    } else if (team === `Brazil`) {
        if (kindSouvenirs === `flags`) {
            total = 4.20 * numberSouvenirs;
        } else if (kindSouvenirs === `caps`) {
            total = 8.50 * numberSouvenirs;
        } else if (kindSouvenirs === `posters`) {
            total = 5.35 * numberSouvenirs;
        } else if (kindSouvenirs === `stickers`) {
            total = 1.20 * numberSouvenirs;
        } else {
            flag = true;
            console.log(`Invalid stock!`)
        }

    } else if (team === `Croatia`) {
        if (kindSouvenirs === `flags`) {
            total = 2.75 * numberSouvenirs;
        } else if (kindSouvenirs === `caps`) {
            total = 6.90 * numberSouvenirs;
        } else if (kindSouvenirs === `posters`) {
            total = 4.95 * numberSouvenirs;
        } else if (kindSouvenirs === `stickers`) {
            total = 1.10 * numberSouvenirs;
        } else {
            flag = true;
            console.log(`Invalid stock!`)
        }


    } else if (team === `Denmark`) {
        if (kindSouvenirs === `flags`) {
            total = 3.10 * numberSouvenirs;
        } else if (kindSouvenirs === `caps`) {
            total = 6.50 * numberSouvenirs;
        } else if (kindSouvenirs === `posters`) {
            total = 4.80 * numberSouvenirs;
        } else if (kindSouvenirs === `stickers`) {
            total = 0.90 * numberSouvenirs;
        } else {
            flag = true;
            console.log(`Invalid stock!`);
        }
    } else {
        flag = true;
        console.log(`Invalid country!`);
    }


    if (!flag) {
        console.log(`Pepi bought ${numberSouvenirs} ${kindSouvenirs} of ${team} for ${total.toFixed(2)} lv.`);
    }


}


footballSouvenirs(`Brazil`,
    `stickers`,
    5,
)


// footballSouvenirs(`Croatia`,
//     `flags`,
//     13
// )

// footballSouvenirs(`Denmark`,
//     `caps`,
//     8,
// )
//
footballSouvenirs(`USA`,
    `caps`,
    18
)
footballSouvenirs(`Argentina`,
    `shirts`,
    35
)

