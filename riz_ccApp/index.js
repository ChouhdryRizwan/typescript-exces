#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// Stop the welcome title
const sleep = () => new Promise((res, rej) => setTimeout(res, 1000));
// Create the welcome title
async function welcome_title() {
    console.clear();
    const title = chalkAnimation.rainbow("  ___ Welcome to Currency Converter App ___\n");
    await sleep();
    title.stop();
}
await welcome_title();
let convertion = {
    "PKR": { "USD": 0.0025, "GBP": 0.00943, "PKR": 1 },
    "GBP": { "USD": 1.43, "PKR": 325.01, "GBP": 1 },
    "USD": { "PKR": 563.43, "GBP": 0.34, "USD": 1 }
};
async function convert_currency() {
    const ans = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "GBP", "USD"],
            message: chalk.blueBright("Select your Currency : "),
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "GBP", "USD"],
            message: chalk.blueBright("Select your Convertion Currency : "),
        },
        {
            type: "input",
            name: "num",
            message: chalk.blueBright("Enter your Convertion Currency : "),
            validate: (value) => {
                if (isNaN(value)) {
                    return chalk.red("Please enter a valid Currency to Convertion.");
                }
                return true;
            }
        }
    ]);
    const { from, to, num } = ans;
    if (from && to && num) {
        let res = convertion[from][to] * num;
        console.log(chalk.green(`Your Convertion from ${from} to ${to} is ${res} .`));
    }
    else {
        chalk.red("Invalid Inputs.");
    }
}
async function do_again() {
    do {
        await convert_currency();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "\n Do you want to do anotner Convertion? Press 'y' or 'n' : "
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES' || again.restart == 'Yes');
    console.log(chalk.cyan(`\n ---- Thank you for using this App ----`));
}
do_again();
