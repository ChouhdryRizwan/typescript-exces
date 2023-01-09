import inquirer from "inquirer";
import cash from "./cash.js";
import deposit from "./deposit.js";
import transfer from "./transfer.js";
import bill from "./bill.js";
async function other_transaction() {
    const oth_trans = await inquirer.prompt([
        {
            name: "oth_amount",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to another Transaction ?",
        }
    ]);
    return oth_trans.oth_amount;
}
async function homeScreen(chalk, balance) {
    do {
        const ans = await inquirer.prompt([
            {
                name: "menu",
                type: "list",
                choices: ["Check Balance", "Cash Widthdrawl", "Cash Deposit", "Transfer", "Utility Bill", "Exit"],
                message: "Please select your transaction type."
            }
        ]);
        switch (ans.menu) {
            case "Check Balance":
                console.log(chalk.rgb(242, 254, 0)(`Your Account Balance is : ${balance}`));
                break;
            case "Cash Widthdrawl":
                balance = await cash(balance);
                if (balance !== 0) {
                    console.log(chalk.green(`Your Transaction is Successfully Completed Your New Balance is : ${balance}`));
                }
                break;
            case "Cash Deposit":
                balance = await deposit(balance);
                console.log(chalk.green(`Your Transaction is Successfully Completed Your New Balance is : ${balance}`));
                break;
            case "Transfer":
                balance = await transfer(balance);
                console.log(chalk.green(`Your Transaction is Successfully Completed Your New Balance is : ${balance}`));
                break;
            case "Utility Bill":
                balance = await bill(balance);
                console.log(chalk.green(`Your Transaction is Successfully Completed Your New Balance is : ${balance}`));
                break;
            case "Exit":
                other_trans = "No";
                break;
        }
        if (ans.menu !== "Exit") {
            var other_trans = await other_transaction();
        }
        if (other_trans == "No") {
            console.log(chalk.green(`\n ---- Thank you for using Service ----`));
        }
    } while (other_trans != "No");
}
export default homeScreen;
