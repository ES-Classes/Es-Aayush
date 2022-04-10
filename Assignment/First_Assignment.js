let pM = 50;
let rM = 56;

let pH = 145;
let rH = 136;

let pBMI = pM / (pH * pH)
let rBMI = rM / (rM * rM)

let pHBMi = pBMI > rBMI;

console.log(pBMI);
console.log(rBMI);

console.log(pHBMi);