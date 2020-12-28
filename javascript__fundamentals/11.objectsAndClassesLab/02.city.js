function city(name, area, population, country, postCode) {

    let person = {'name': name, 'area': area, 'population': population, 'country': country, 'postCode': postCode};

    let entries = Object.entries(person);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }


}


city("Sofia", " 492", "1238438", "Bulgaria", "1000")


