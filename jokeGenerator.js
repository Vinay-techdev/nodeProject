
import https from 'https';
import chalk from 'chalk';

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
            console.log(chalk.blue.bgRed.bold(`${joke.setup ? joke.setup : joke.joke}`));
            joke.delivery ?console.log(chalk.blue.bgRed.bold(`${joke.delivery}`)):"";
        });

        response.on('error', (err) => {
            console.log(`Error fecthing the joke, ${err.message}`);
        });
    })
}

getJoke();