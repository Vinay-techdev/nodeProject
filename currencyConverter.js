import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = `8cc3513e44041884971ff894`;
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCuurency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    rl.question(chalk.black.bgBlueBright.bold(`\nEnter amount in USD: `),(amount) => {
        rl.question(chalk.black.bgWhite.bold("Enter the target currency (e.g INR, NPR, AFN...): "),(currency) => {
            const rate = rates[currency.toUpperCase()];

            if (rate) {
              console.log(chalk.black.bgGreenBright.bold(`\n${amount} USD is approximately ${convertCuurency(amount,rate)} ${currency.toUpperCase()}`));
            } else {
              console.log(chalk.black.bgRed.bold(`\nInvalid Currency Code`));
            }

            rl.close();
          }
        );
      }
    );
  });
});
