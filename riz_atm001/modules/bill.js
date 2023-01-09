import inquirer from "inquirer";
import chalk from "chalk";
const elc = Math.floor(Math.random() * 1000 + 1);
const gas = Math.floor(Math.random() * 1000 + 1);
const water = Math.floor(Math.random() * 1000 + 1);
const phone = Math.floor(Math.random() * 1000 + 1);
const school = Math.floor(Math.random() * 1000 + 1);
async function bill(balance) {
    const ans = await inquirer.prompt([
        {
            name: "reply",
            type: "list",
            choices: ["Electricity", "Gas", "Water", "School", "Phone"],
            message: "Please Select Your Bill Type ?"
        }
    ]);
    if (ans.reply == "Electricity") {
        console.log(`Your Electricity bill amount is ${elc} .`);
        if (balance > elc) {
            balance -= elc;
        }
        else {
            console.log(chalk.redBright("You've insufficient Balance to Proceed this Transaction."));
        }
    }
    else if (ans.reply == "Gas") {
        console.log(`Your Gas bill amount is ${gas} .`);
        if (balance > gas) {
            balance -= gas;
        }
        else {
            console.log(chalk.redBright("You've insufficient Balance to Proceed this Transaction."));
        }
    }
    else if (ans.reply == "Water") {
        console.log(`Your Water bill amount is ${water} .`);
        if (balance > water) {
            balance -= water;
        }
        else {
            console.log(chalk.redBright("You've insufficient Balance to Proceed this Transaction."));
        }
    }
    else if (ans.reply == "School") {
        console.log(`Your School bill amount is ${school} .`);
        if (balance > school) {
            balance -= school;
        }
        else {
            console.log(chalk.redBright("You've insufficient Balance to Proceed this Transaction."));
        }
    }
    else if (ans.reply == "Phone") {
        console.log(`Your phone bill amount is ${phone} .`);
        if (balance > phone) {
            balance -= phone;
        }
        else {
            console.log(chalk.redBright("You've insufficient Balance to Proceed this Transaction."));
        }
    }
    return balance;
}
export default bill;
