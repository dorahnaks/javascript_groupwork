
        
// Function to return the maximum of 3 numbers
function getMaxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

// Prompt user for three numbers
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let num3 = Number(prompt("Enter third number: "));

// Get the maximum and display the result
console.log(`The maximum of ${num1}, ${num2}, and ${num3} is ${getMaxOfThree(num1, num2, num3)}`);