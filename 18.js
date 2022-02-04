// Use add and multiplication to calculate wood requirements
// per bed =12 cubic meter
// per table= 6 cubic meter
// per chair =3 cubic meter

function woodRequirements(quantityOfBed, quantityOfTable, quantityOfChair) {
    const perBedWood = 12;
    const perTableWood = 6;
    const perChairWood = 3;

    let totalWood = perBedWood * quantityOfBed + perTableWood * quantityOfTable + perChairWood * quantityOfChair;

    return totalWood;

}

let x1 = woodRequirements(1, 1, 2);
console.log(x1);