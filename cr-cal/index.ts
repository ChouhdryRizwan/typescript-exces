#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";

// Stop the welcome title
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000)
    });
}

// Create the welcome title
async function welcome_title() {
    console.clear();
    let title = chalkAnimation.rainbow("                         _____________________ Welcome to CLI Calculator _____________________                         ", 3);
    await sleep();
    title.stop();
    console.log(chalk.cyan(`     _____________________
    |  _________________  |
    | |   LET'S START   | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));

}

// Call the title
await welcome_title();

async function get_choice() {
    const ans = await inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: "list",
                name: "operator",
                message: chalk.inverse("\n Please Select a Opertaion to Perform ? \n"),
                choices: ["Addition", "Subtraction", "Multiplication", "Division"]
            },
            {
                type: "input",
                name: "val1",
                message: "Enter your 1st Operand : ",
                validate: (value) => {
                    if (isNaN(value)) {
                        return "Please enter a valid number to perform this oprtation";
                        get_choice();
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "val2",
                message: "Enter your 2nd Operand : ",
                validate: (value) => {
                    if (isNaN(value)) {
                        return "Please enter a valid number to perform this oprtation";
                        get_choice();
                    }
                    return true;
                }
            }
        ])

    if (ans.operator == "Addition") {
        console.log(chalk.greenBright(`Your Answer is : ${ans.val1}` + chalk.red(' + ') + `${ans.val2} = ` + chalk.red(`${ans.val1 + ans.val2}`) + ``))
    } else if (ans.operator == "Subtraction") {
        console.log(chalk.greenBright(`Your Answer is : ${ans.val1} - ${ans.val2} = ${ans.val1 - ans.val2}`))
    } else if (ans.operator == "Multiplication") {
        console.log(chalk.greenBright(`Your Answer is : ${ans.val1} * ${ans.val2} = ${ans.val1 * ans.val2}`))
    } else if (ans.operator == "Division") {
        console.log(chalk.greenBright(`Your Answer is : ${ans.val1} / ${ans.val2} = ${ans.val1 / ans.val2}`))
    }
}

// get_choice();

async function do_again() {
    do {
        await get_choice();
        var again_get_choice = await inquirer
            .prompt({
                type: "input",
                name: "restart",
                message: "Do you want to continue your calculation? Press 'y' or 'n' : "
            })
    } while (again_get_choice.restart == 'y' || again_get_choice.restart == 'Y' || again_get_choice.restart == 'yes' || again_get_choice.restart == 'YES' || again_get_choice.restart == 'Yes')
    console.log("\n                    _____________________ Thanks For Using our CLI Calculator _____________________");

}

do_again();