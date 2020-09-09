function changeBureau(a, b, c) {
    let numberOfBitcoins = Number(a);
    let numberOfChineseYuan = Number(b);
    let commission = Number(c);

    let allBitcoinsPrice = numberOfBitcoins * 1168;
    let allYuanPrice = (numberOfChineseYuan * 0.15) * 1.76;

    let bitcoinsAndYuan = (allBitcoinsPrice + allYuanPrice) / 1.95;
    let allCommission = bitcoinsAndYuan * (commission / 100);

    let total = (bitcoinsAndYuan - allCommission);

    console.log(total.toFixed(2));

}


changeBureau(7,
    50200.12,
    3
)