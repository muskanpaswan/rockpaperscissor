// *Create an array containing the choices - rock, paper and scissor
let array = ["rock", "paper", "scissor"]
// console.log(array)

//*Generate a random number between 0 to 2
let x = Math.floor(Math.random() * 3)
// console.log(x)

//*Take input from the user and store it in a variable called userChoice*//.
let userChoice = prompt("choose your weapon")
// console.log(userChoice);

let computerChoice;
/* Generate a random choice for the computer from the array of choices.
Store it in a variable called computerChoice*/
//let computerChoice = array[Math.floor(Math.random() * array.length)]

// console.log(computerChoice)
// if (userChoice === "rock") {
// computerChoice = "paper"
// }
// else if (userChoice === "paper") {
// computerChoice = "scissor"
// }
// else {
// (userChoice === "scissor")
// computerChoice = "rock"
// }
//Compare the userChoice and computerChoice to check who wins.
//Use if-else statements*
let rockImage = document.querySelector("#Image-1");
let paperImage = document.querySelector("#Image-2");
let scissorImage = document.querySelector("#Image-3");
let 
rockImage.addEventListener()
if (userChoice === computerChoice) {
    // alert("Match Tie" + " " + "your choise" + " " + userChoice + " " + "computre choise" + computerChoice)
}
else if (userChoice === "rock" && computerChoice === "paper"
    || userChoice === "scissor" && computerChoice === "rock"
    || userChoice === "paper" && computerChoice === "scissor") {
    // alert("Computer won!.." + " " + "your choise" + " " + userChoice + " & " + "computre choise" + computerChoice)

} else if (userChoice === "scissor" && computerChoice === "paper"
    || userChoice === "paper" && computerChoice === "rock"
    || userChoice === "rock" && computerChoice === "scissor") {
    // /alert("User Won!.." + " " + "your choise" + " " + userChoice + " & " + "computre choise" + computerChoice)
}
else {
    // alert("sorry!.. please choose-: rock, paper, scissor")
}