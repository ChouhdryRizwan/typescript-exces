#!/usr/bin/env node

import user_login from "./modules/login.js";
import chalk from "chalk";


// Stop the welcome title
const sleep = () => new Promise((res, rej) => setTimeout(res, 1000));


// Create the welcome title
async function welcome_title() {
    console.clear();
    console.log(chalk.green("  ___ Let's Start Atm Services ___"));
    await sleep();

}

await welcome_title();
user_login();
