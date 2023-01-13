#!/usr/bin/env node
import inquirer from "inquirer";
;
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// Stop the welcome title
const sleep = () => new Promise((res, rej) => setTimeout(res, 1000));
// Create the welcome title
async function welcome_title() {
    console.clear();
    const title = chalkAnimation.rainbow("  ___ Welcome to ToDo App ___\n");
    await sleep();
    title.stop();
}
await welcome_title();
// create a array to store values.
let todoList = [];
async function repeat() {
    const ans = await inquirer.prompt([{
            name: "reply",
            type: "list",
            choices: ["Yes", "No"],
            message: chalk.blueBright("Do you want another Opetation : "),
        }
    ]);
    return (ans.reply == "Yes") ? true : false;
}
async function ToDo() {
    let again = true;
    do {
        const ans = await inquirer.prompt([{
                name: "reply",
                type: "list",
                choices: ["Add Item", "Display", "Remove Item"],
                message: chalk.inverse("Please Select Option : "),
            }
        ]);
        if (ans.reply === "Add Item") {
            const Item = await inquirer.prompt([{
                    name: "items",
                    type: "input",
                    message: chalk.cyan("Enter New Item : "),
                }]);
            todoList.push(Item.items);
            console.log(chalk.rgb(255, 255, 0)("\n --- Items ---"));
            todoList.forEach(element => console.log(chalk.green(element)));
            console.log("\n");
            again = await repeat();
        }
        else if (ans.reply === "Display") {
            console.log(chalk.rgb(255, 255, 0)("\n --- Items ---"));
            todoList.forEach(element => console.log(chalk.green(element)));
            console.log("\n");
            again = await repeat();
        }
        else if (ans.reply === "Remove Item") {
            const removeItem = await inquirer.prompt([{
                    name: "remove",
                    type: "input",
                    message: chalk.redBright("Which item you want to remove : "),
                }]);
            let i = todoList.indexOf(removeItem.remove);
            if (i > -1) {
                todoList.splice(i, 1);
            }
            console.log(chalk.rgb(255, 255, 0)("\n --- Items ---"));
            todoList.forEach(element => console.log(chalk.green(element)));
            console.log("\n");
            again = await repeat();
        }
        if (again == false) {
            console.log(chalk.cyan("\n                    _____________________ Thanks for using ToDo App _____________________"));
        }
    } while (again !== false);
    {
    }
}
await ToDo();
