
import https from 'https';
import chalk from 'chalk';
import { log } from 'console';

const getJoke = () => {
    const url = `https://v2.jokeapi.dev/joke/Programming`;

    https.get(url, (response) => {
        let data = "";
        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            const joke = JSON.parse(data);
            console.log(`\nHere is a random ${joke.type} joke:\n`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.delivery}`));
        });

        response.on('error', (err) => {
            console.log(`Error fecthing the joke, ${err.message}`);
        });
    })
}

getJoke();