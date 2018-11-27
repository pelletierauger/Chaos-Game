let seeds = [];
let current, newRand;

let numOfPoints = 150;
numOfPoints = 7;

let increment = Math.PI * 2 / numOfPoints;

let d = Math.PI * 2 / 6.75;
d = Math.PI / 4;
d = 2;

for (let i = d; i < Math.PI * 2 + d; i += increment) {
    let x = Math.cos(i) * 0.925;
    let y = Math.sin(i) * 0.925;
    seeds.push({ x: x, y: y });
}

// for (let i = d; i < numOfPoints; i += 1) {
//     let x = Math.cos(i) * i * 4;
//     let y = Math.sin(i) * i * 4;
//     seeds.push({ x: x, y: y });
// }