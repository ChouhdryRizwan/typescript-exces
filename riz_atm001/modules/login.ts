import users from "./users.js";
import inquirer from "inquirer";
import chalk from "chalk";
import homeScreen from "./homeScreen.js";


// Create login for user
async function user_login() {
    const ans = await inquirer.prompt([
        {
            name: "account",
            type: "input",
            message: "Please enter your Account Number : ",
            validate: (value) => {
                if (isNaN(value)) {
                    return chalk.red("Please enter a valid number to perform this oprtation");
                }
                return true;
            }

        },
        {
            name: "pin",
            type: "password",
            message: "Please enter your Pin Code : ",
        }
    ]);

    let user = users.find(x => x.accNumber == ans.account && x.pinCode == ans.pin);

    if (typeof user != "undefined") {
        console.log(chalk.green(" ---- Login Successfully ---- \n"));
        console.log(chalk.cyan(`Welcome ${user.name} `));
        homeScreen(chalk, user.balance);
    } else {
        console.log(chalk.redBright("You've enter invalid Account Number of Pin Code."));
    }
}

export default user_login;