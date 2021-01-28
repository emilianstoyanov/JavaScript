function solve(...args) {

    let num = Number(args.shift())

    const operations = {
        chop: x => num = x / 2,
        dice: x => num = Math.sqrt(x),
        spice: x => num = x + 1,
        bake: x => num = x * 3,
        fillet: x => num = x - x * 0.2,
    }

    args.forEach(x => console.log(operations[x](num)))
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');