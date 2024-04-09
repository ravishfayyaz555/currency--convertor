#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
//prompt the user to select currency to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // base currency  //4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
