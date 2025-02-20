// No.6
// Function for converting Celsius to Fahrenheit
function to_fahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Please enter a temperature in Celsius.");
        return;
    }
    let fahrenheit = ((celsius) * 9/5) + 32;
    document.getElementById("result").innerText = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
}


// No.7
// Function for reversing a string
function reversed_string() {
    let inputString = document.getElementById("string").value;
    if (inputString === "") {
        alert("Please enter a string.");
        return;
    }
    let reversedString = inputString.split("").reverse().join("");
    document.getElementById("reversed_string").innerText = `Reversed String: ${reversedString}`;
}
