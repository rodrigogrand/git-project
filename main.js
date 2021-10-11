console.log("segundo commit")
// I need to add this line
// I need to add also this line

// This is your age, you need to fill out the prompt, and your age is going to display your actual age.
let yourAge = prompt("Enter your birth year?");
let actualYear = 2021;
let yourActualAge = ''
if (yourAge) {
    document.write("Your age is " + (actualYear - yourAge));
}
