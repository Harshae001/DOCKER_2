function subtractNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    var result = num1 - num2;
    return result;
}

var subtractionResult = subtractNumbers();
if (subtractionResult !== undefined) {
    console.log("The result of subtraction is:", subtractionResult);
}
