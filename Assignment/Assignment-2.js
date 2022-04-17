let nepalA = [46, 58, 39, 47, 62, 51, 47, 62, 51];
let nepalB = [48, 41, 60, 59, 45, 73, 59, 45, 56];

// Arrow function to calcute the average of a list
const average = (array) => array.reduce((a, b) => a + b) / array.length;

// 1. Calculating the average of each teams
let nepalAAverage = average(nepalA);
let nepalBAverage = average(nepalB);

console.log(`Average of nepalA is ${nepalAAverage}`);
console.log(`Average of nepalB is ${nepalBAverage}`);

// 2. Finding the best teams
// Conditional operator which returns the best team with it's average score.
// Average score is used in minimum score rule.
let bestTeam =  ( nepalAAverage == nepalBAverage ) ? ['draw', nepalAAverage] : (nepalAAverage > nepalBAverage) ? ['nepalA', nepalAAverage] : ['nepalB', nepalBAverage];
console.log(`The winner team is ${bestTeam[0]}`);

// 3 and 4. Adding mininum requirements 50 to win the tournament
if (bestTeam[1] >= 50) {
    console.log(`The winner team is ${bestTeam[0]}`);
}
else {
    console.log('No winner');
}