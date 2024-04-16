import java.util.Scanner;

public class MultiplyNumbers {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter the first number
        System.out.print("Enter the first number: ");
        // Read the first number entered by the user
        double firstNumber = scanner.nextDouble();

        // Prompt the user to enter the second number
        System.out.print("Enter the second number: ");
        // Read the second number entered by the user
        double secondNumber = scanner.nextDouble();

        // Close the Scanner object to avoid resource leak
        scanner.close();

        // Multiply the two numbers together
        double result = firstNumber * secondNumber;

        // Display the result
        System.out.println("The result of multiplying " + firstNumber + " and " + secondNumber + " is: " + result);
    }
}
