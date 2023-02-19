#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

import { Student } from "./classes/student.js";

// Stop the welcome title
const sleep = () => new Promise((res, rej) => setTimeout(res, 1000));

// Create the welcome title
async function welcome_title() {
  console.clear();
  const title = chalkAnimation.rainbow("  ___ Welcome to OPP ___");
  await sleep();
  title.stop();
}

await welcome_title();

async function oop() {
  const { num }: { num: number } = await inquirer.prompt([
    {
      type: "number",
      name: "num",
      message:
        "Type 1 if you like to talk to others and 2 if you would rather keep it to yourself: ",
    },
  ]);

  const MyStudent = new Student();
  MyStudent.AskQuestion(num);
  console.log(chalk.cyan(`You are: ${MyStudent.GetPersonality()}`));

  const { name }: { name: string } = await inquirer.prompt([
    {
      name: "name",
      message: "Please enter your name: ",
    },
  ]);

  MyStudent.Name = name;
  console.log(
    chalk.cyanBright(
      `Your Name is: ${
        MyStudent.Name
      } and your personality is: ${MyStudent.GetPersonality()}`
    )
  );
}


async function do_again() {
  do {
    await oop();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to check again? Press 'y' or 'n' : ",
    });
  } while (
    again.restart == "y" ||
    again.restart == "Y" ||
    again.restart == "yes" ||
    again.restart == "YES" ||
    again.restart == "Yes"
  );
  console.log(
    chalk.green(`\n ---- Thank you for using this application ----`)
  );
}

do_again();