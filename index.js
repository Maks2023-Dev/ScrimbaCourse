//document.getElementById("count-el").innerText = 5
/*
let firstBatch = 5;
let secondBatch = 7;

let count = firstBatch + secondBatch;

console.log(count)
*/
/*
let myAge = 30; 
let humandDogRatio = 7;
let myDogAge = myAge * humandDogRatio;

console.log(myDogAge)
*/
/*
let bonusPoints = 50
console.log(bonusPoints)
bonusPoints = bonusPoints + 50;
console.log(bonusPoints)
bonusPoints = bonusPoints - 75;
console.log(bonusPoints)
bonusPoints = bonusPoints + 45;
console.log(bonusPoints)
*/

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment () {
    count += 1; 
    countEl.textContent= count;

}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
    console.log(count)
}



