#! /usr/bin/env node 
import inquirer from "inquirer";
let TotalBalance = 10000;
const pin = 3999;
let condition = true;
while (TotalBalance > 0 && condition) {
    let pinEntered = await inquirer.prompt([
        {
            name: "myPin",
            type: "number",
            message: " ******```Welcome to Anas ATM Machine```******\n Please enter your pin : "
        }
    ]);
    if (pinEntered.myPin != pin) {
        console.log(" Invalid pin !, please enter correct pin");
    }
    else {
        let atmQuestions = await inquirer.prompt([
            {
                name: "accountType",
                type: "list",
                message: "Select your acoount type : ",
                choices: [
                    "Saving account ",
                    "Current account"
                ]
            }
        ]);
        let transactionMethod = await inquirer.prompt([
            {
                name: "transMethod",
                type: "list",
                message: "Select transaction method : ",
                choices: [
                    "Cash widhdrawal",
                    "Fast cash"
                ]
            }
        ]);
        if (transactionMethod.transMethod == "Cash widhdrawal") {
            let cashWithdraw = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter amount to withdraw : "
                }
            ]);
            if (cashWithdraw.amount <= TotalBalance) {
                TotalBalance = TotalBalance - cashWithdraw.amount;
                console.log(`Your  remaining balance is : ${TotalBalance}`);
            }
            else {
                console.log("Insufficient balance!");
            }
        }
        else {
            let fastCash = await inquirer.prompt([
                {
                    name: "amount",
                    type: "list",
                    message: "Select the amount you want to withdraw :",
                    choices: [
                        "1000",
                        "3000",
                        "5000"
                    ]
                }
            ]);
            if (fastCash.amount <= TotalBalance) {
                TotalBalance = TotalBalance - fastCash.amount;
                console.log(`Your remaining balance is : ${TotalBalance}`);
            }
            else {
                console.log("Insufficient balance!");
            }
        }
        if (TotalBalance > 0) {
            let withdrawMore = await inquirer.prompt([
                {
                    name: "again",
                    type: "confirm",
                    message: "Do you want to withdraw again? ",
                    default: "false"
                }
            ]);
            condition = withdrawMore.again;
            if (!condition) {
                console.log("Thank you for using the ATM. Have a nice day!");
                break;
            }
        }
    }
}
