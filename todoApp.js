import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {

  console.log("\n1: Add a Task");
  console.log("2: View Tasks");
  console.log("3: Exit");
  rl.question("\nChoose an option: ", handleInput);
};

const handleInput = (option) => {

  if (option === "1") {
    rl.question("Enter the Task: ", (task) => {
      todos.push(task);
      console.log(chalk.black.bgGreen.bold(`\nTask added ${task}`));
      showMenu();
    });
  } else if (option === "2") {

    console.log("\nYour Todo Lists");
    todos.forEach((task, ind) => {
      console.log(chalk.black.bgWhite.bold(`\n${ind + 1}. ${task}`));
    });
    showMenu();
  } else if (option === "3") {

    console.log(chalk.black.bgBlueBright.bold("\nGood Byeee!:/"));
    rl.close();
  } else {

    console.log(
      chalk.blue.bgRed.bold("\nInvalid Option. please try again :/ ")
    );
    
    showMenu();
  }
};

showMenu();
