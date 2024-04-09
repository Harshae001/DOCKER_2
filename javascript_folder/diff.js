const readline = require('readline');

function subtractNumbers() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Please enter valid numbers.");
            } else {
                const result = num1 - num2;
                console.log("The result of subtraction is:", result);
            }
            rl.close();
        });
    });
}

subtractNumbers();
