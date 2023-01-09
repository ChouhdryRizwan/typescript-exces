import inquirer from "inquirer";
import chalk from "chalk";
async function other(balance) {
    const oth_ans = await inquirer.prompt([
        {
            name: "oth_amount",
            type: "input",
            message: "Please enter Other Amount.",
            validate: (value) => {
                if (isNaN(value)) {
                    return chalk.red("Please enter a valid number to perform this oprtation.");
                }
                return true;
            }
        }
    ]);
    if (oth_ans.oth_amount < balance) {
        balance -= oth_ans.oth_amount;
    }
    else {
        console.log(chalk.redBright("You've insufficient Balance to Proceed this Transaction."));
        balance = await other(balance);
    }
    return balance;
}
async function cash(balance) {
    const ans = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            choices: [500, 1000, 5000, 10000, 20000, "Other Amount"],
            message: "Please select transaction amount."
        }
    ]);
    if (ans.amount === "Other Amount") {
        balance = await other(balance);
    }
    else {
        console.log(typeof ans.amount);
        if (ans.amount < balance) {
            switch (ans.amount) {
                case 500:
                    balance -= 500;
                    break;
                case 1000:
                    balance -= 1000;
                    break;
                case 5000:
                    balance -= 5000;
                    break;
                case 10000:
                    balance -= 10000;
                    break;
                case 20000:
                    balance -= 20000;
                    break;
            }
        }
        else {
            console.log(chalk.redBright("You've insufficient Balance to Proceed this Transaction."));
            // return balance = 0;
        }
    }
    return balance;
}
export default cash;
