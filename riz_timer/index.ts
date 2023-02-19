#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// Stop the welcome title
const sleep = () => new Promise((res, rej) => setTimeout(res, 1000));

// Create the welcome title
async function welcome_title() {
  console.clear();
  const title = chalkAnimation.rainbow(
    "  ___ Let's Start Countdown Timer ___"
  );
  await sleep();
  title.stop();
}

await welcome_title();

async function setData(name: string, regex: RegExp) {
  let isDate = name === 'Date' ? true : false
  let DateTime: string;
  while (true) {

      const ans = await inquirer.prompt([{
          name: 'DateTime',
          message: chalk.cyanBright(`Enter ${name} : `),
          default: isDate ? '1/25/2024' : '12:00 AM',
      }])
      DateTime = await ans['DateTime']
      if (regex.test(DateTime)) {
          break
      }
      else {
          console.log(chalk.red(`Please enter correct pattern Of ${name}`))
      }
  }
  return DateTime
}

function Start_Timer(datee: string) {
  console.log(chalk.cyan(` Days | Hours | Minutes | Seconds `))
  const time_val = setInterval(() => {
      let new_date = (new Date() as unknown) as number
      let my_date = (new Date(datee) as unknown) as number
      let time_milli_seconds = my_date - new_date
      if (time_milli_seconds < 0) {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          console.log(chalk.red('Expired'))
          console.log(chalk.cyanBright(`=======================================================\n`))
          clearInterval(time_val)
          return
      }

      let sec_con = 1000 // Milliseconds in a Second
      let min_con = sec_con * 60 // Milliseconds in a Minute
      let hour_con = min_con * 60 // Milliseconds in an Hour
      let days_con = hour_con * 24 // Milliseconds in a Day

      let days = Math.floor(time_milli_seconds / days_con)
      let hours = Math.floor((time_milli_seconds % days_con) / hour_con)
      let mins = Math.floor((time_milli_seconds % hour_con) / min_con)
      let secs = Math.floor((time_milli_seconds % min_con) / sec_con)
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(`  ${days > 9 ? String(days) : `0${String(days)}`}  :   ${hours > 9 ? String(hours) : `0${String(hours)}`}  :   ${mins > 9 ? String(mins) : `0${String(mins)}`}    :   ${secs > 9 ? String(secs) : `0${String(secs)}`}`);


  }, 1000);

}

let dateRegex = /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/](202[3-5])$/
let timeRegx = /^(0?[0-9]|[1][012]):(0?[0-9]|[1-5][0-9]) ((a|p)m|(A|P)M)$/
let date = await setData("Date", dateRegex)
let time = await setData("Time", timeRegx)
let datee = `${date} ${time}`
await sleep()
console.log('\n')
Start_Timer(datee)