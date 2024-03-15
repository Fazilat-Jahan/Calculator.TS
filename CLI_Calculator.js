import inquirer from "inquirer";
let input1 = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "enter your first no:"
    }]);
let input3 = await inquirer.prompt([{
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"]
    }]);
let input2 = await inquirer.prompt([{
        name: "num2",
        type: "number",
        message: "enter your second no:"
    }]);
let operator = input3.operator;
let total;
if (operator == "Addition") {
    total = input1.num1 + input2.num2;
}
else if (operator == "Subtraction") {
    total = input1.num1 - input2.num2;
}
else if (operator == "Multiplication") {
    total = input1.num1 * input2.num2;
}
else if (operator == "Division") {
    total = input1.num1 / input2.num2;
}
else {
    console.log("invalid operator");
}
console.log(`your value is ${total}`);
