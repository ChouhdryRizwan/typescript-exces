#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
import chalkAnimation  from "chalk-animation"
// "@types/chalk": "^2.2.0",
// Stop the welcome title
const sleep = () => new Promise((res, rej) => setTimeout(res, 1000));

// Create the welcome title
async function welcome_title() {
    console.clear();
    const title = chalkAnimation.rainbow("  ___ Welcome to Word Counter App ___\n");
    await sleep();
    title.stop();

}
await welcome_title();

async function wordCounter() {
    const ans:{paragraph:string} = await inquirer.prompt([
        {
            type:"input",
            name:"paragraph",
            message: chalk.blueBright("Please enter your Sentence to count the Word."),
        }
    ])
    
    const words = ans.paragraph.trim().split(" ");
    console.log(chalk.green(`Your Sentence Word Count is : ${words.length} .`));
}


async function do_again() {
    do {
        await wordCounter();
        var again = await inquirer
            .prompt({
                type: "input",
                name: "restart",
                message: "\n Do you want to do anotner Convertion? Press 'y' or 'n' : "
            })
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES' || again.restart == 'Yes')
    console.log(chalk.cyan(`\n ---- Thank you for using this App ----`));

}

do_again();