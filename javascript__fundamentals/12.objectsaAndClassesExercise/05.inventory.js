function inventory(input) {


    const heroes = [];

    input.forEach(line => {
        const spl = line.split(" / ");

        const name = spl[0];
        const level = Number(spl[1]);
        const items = spl[2].split(", ").sort((a, b) => a.localeCompare(b));


        heroes.push({name, level, items});

    })

    // сортираме по левела на героите
    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(", ")}`)
    })

}

inventory([
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
)