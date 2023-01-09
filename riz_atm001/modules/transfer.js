import inquirer from "inquirer";
import chalk from "chalk";
async function transfer(balance) {
    const ans = await inquirer.prompt([
        {
            name: "account_num",
            type: "input",
            message: "Please Enter Account Number : ",
            validate: (value) => {
                if (isNaN(value)) {
                    return chalk.red("Please enter a valid number to perform this oprtation");
                }
                return true;
            }
        }, {
            name: "amount",
            type: "input",
            message: "Please Enter Amount : ",
            validate: (value) => {
                if (isNaN(value)) {
                    return chalk.red("Please enter a valid number to perform this oprtation");
                }
                return true;
            }
        }
    ]);
    if (balance > Number(ans.amount)) {
        balance -= ans.amount;
    }
    else {
        console.log(chalk.redBright("You've insufficient Balance to Proceed this Transaction."));
    }
    return balance;
}
export default transfer;
