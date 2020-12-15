function gramophone(a, b, c) {
    let bandName = String(a);
    let albumName = String(b);
    let songName = String(c);

    let total = (albumName.length * bandName.length) * songName.length / 2;

    console.log(`The plate was rotated ${Math.ceil(total / 2.5)} times.`);

}


gramophone('Black Sabbath', 'Paranoid', 'War Pigs')