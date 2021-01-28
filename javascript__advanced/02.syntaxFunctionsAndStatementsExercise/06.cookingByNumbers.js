function cookingByNumbers(...input) {
    let number = Number(input.shift());


    while (input.length > 0) {
        switch (input.shift()) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.80;
                break;


        }

        console.log(number);
    }


}


cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');