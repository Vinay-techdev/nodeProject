
import fs from "fs";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const fileCreation = () => {
    rl.question('Enter your fileName: ', (fileName) => {
         rl.question("Enter the content: ", (content) => {
            fs.writeFile(`${fileName}.txt`, content, (err) => {
                if(err) {
                    console.error(chalk.blue.bgGreen.bold('Error writing the file: ', err.message));
                }else{
                    console.log(chalk.blue.bgGreen.bold(`\nFile ${fileName}.txt created sucessfully!`))
                }
                rl.close();
            })
         })
    })
}

fileCreation()