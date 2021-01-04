function cutAndReverse(text) {


    let cutLeft = text.slice(0, (text.split('').length / 2));
    let cutRight = text.slice((text.split('').length / 2));


    console.log(cutLeft.split('').reverse().join(''));
    console.log(cutRight.split('').reverse().join(''));

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')