#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue.bold.italic("\n\tWelcome to Muhammad-Ubaid - Currency Converter\n"));
// Define the list of currencies and their exchange rates
let exchange_rate = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.7,
    CAD: 1.3,
    JPY: 151.8,
    CNY: 7.2,
    AUD: 1.5,
    INR: 83.3,
    SAR: 3.75,
    AED: 3.65,
    PKR: 277.7, // Pakistani Rupee Currency
};
// Prompt the user to select currencies to convert from and to
let user_anwer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "\n\tSelect the currency to convert from:\n",
        choices: Object.keys(exchange_rate),
    },
    {
        type: "list",
        name: "to",
        message: "Select the currency to convert into:",
        choices: Object.keys(exchange_rate),
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount to convert:",
    },
]);
// Perform currency conversion by using Formula
let from_amount = exchange_rate[user_anwer.from];
let to_amount = exchange_rate[user_anwer.to];
let amount = user_anwer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(chalk.green(`The converted amount is ${converted_amount}`));
