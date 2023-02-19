#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

import course from "./classes/course.js";
import Department from "./classes/department.js";
import Instructor from "./classes/instructor.js";
import Student from "./classes/student.js";

// Stop the welcome title
const sleep = () => new Promise((res, rej) => setTimeout(res, 1000));

// Create the welcome title
async function welcome_title() {
  console.clear();
  const title = chalkAnimation.rainbow(
    "  ___ Let's Start Student Management System ___"
  );
  await sleep();
  title.stop();
}

await welcome_title();

//Add Students
export const std1 = new Student("Rizwan", 21, "1170835");
const std2 = new Student("Zeeshan", 14, "12437");

//Add Instructors
const ins1 = new Instructor("Usama", 25, 2500);
const ins2 = new Instructor("Zahid", 34, 2390);

//Add Courses
const course1 = new course("META-101", "Metaverse");
const course2 = new course("BC-201", "Blockchain");

//Add Departments
const dept1 = new Department("WEB");
const dept2 = new Department("DESIGN");

//Assign Courses to Students
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);

//Assign Instructor to Courses
course1.setInstructor(ins1);
course1.setInstructor(ins2);
course2.setInstructor(ins1);

// Assign Departments to Courses
dept1.addCourse(course1);
dept1.addCourse(course2);
dept2.addCourse(course1);

async function sms() {
  const ans = await inquirer.prompt([
    {
      name: "menu",
      type: "list",
      choices: ["Students", "Courses", "Instructors", "Departments"],
      message: "Please select your any operation: ",
    },
  ]);

  switch (ans.menu) {
    case "Students":
      console.log(chalk.rgb(242, 254, 0)(`\n --- Students ---`));
      console.log(std1);
      console.log(std2);
      break;
    case "Courses":
      console.log(chalk.rgb(242, 254, 0)(`\n --- Courses ---`));
      console.log(course1);
      console.log(course2);
      break;
    case "Instructors":
      console.log(chalk.rgb(242, 254, 0)(`\n --- Instructors ---`));
      console.log(ins1);
      console.log(ins2);
      break;
    case "Departments":
      console.log(chalk.rgb(242, 254, 0)(`\n --- Departments ---`));
      console.log(dept1);
      console.log(dept2);
      break;
  }
}

async function do_again() {
  do {
    await sms();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to do anotner operation? Press 'y' or 'n' : ",
    });
  } while (
    again.restart == "y" ||
    again.restart == "Y" ||
    again.restart == "yes" ||
    again.restart == "YES" ||
    again.restart == "Yes"
  );
  console.log(
    chalk.green(`\n ---- Thank you for using Student Management System ----`)
  );
}

do_again();
