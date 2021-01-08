function housePainting(a, b, c) {
    let heightHouse = Number(a);
    let lengthWall = Number(b);
    let heightTriangularWall = Number(c);

    let sideWall = heightHouse * lengthWall;
    let windowArea = 1.5 * 1.5;
    let bothSides = 2 * sideWall - 2 * windowArea;
    let backSide = heightHouse * heightHouse;
    let enter = 1.2 * 2;
    let totalFrontAndRear = 2 * backSide - enter;

    let totalGreenPaint = ((bothSides + totalFrontAndRear) / 3.4).toFixed(2);

    let twoRectanglesRoof = 2 * (heightHouse * lengthWall);
    let twoTriangles = 2 * (heightHouse * heightTriangularWall / 2);
    let totalArea = twoRectanglesRoof + twoTriangles;

    let totalRedPaint = totalArea / 4.3;

    console.log(totalGreenPaint);
    console.log(totalRedPaint.toFixed(2));


}


housePainting(6,
    10,
    5.2
)