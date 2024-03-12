import inquirer from "inquirer";
let input1 = await inquirer.prompt( [{
    name: "num1",
    type: "number",
    message: "kindly enter your first no:"
}])

let input3 = await inquirer.prompt([ {
    name: "op",
    type: "input",
    message: "kindly enter your operator:"
} ] )

let input2 = await inquirer.prompt([ {
    name: "num2",
    type: "number",
    message: "kindly enter your second no:"
} ] )


let operator= input3.op;
let total;

if (operator === "+") {
     total = input1.num1 + input2.num2
}
else if (operator === "-") {
    total = input1.num1 - input2.num2
}

else if (operator === "*") {
    total = input1.num1 * input2.num2
}

else if (operator === "/") {
    total = input1.num1 / input2.num2
}
else {
    console.log("invalid operator")
}
console.log(total)
