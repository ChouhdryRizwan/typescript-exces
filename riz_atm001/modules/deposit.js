import inquirer from "inquirer";
import chalk from "chalk";
async function deposit(balance) {
    const ans = await inquirer.prompt([
        {
            name: "amount",
            type: "input",
            message: "Please enter your Amount : ",
            validate: (value) => {
                if (isNaN(value)) {
                    return chalk.red("Please enter a valid number to perform this oprtation");
                }
                return true;
            }
        }
    ]);
    return balance += Number(ans.amount);
}
export default deposit;
