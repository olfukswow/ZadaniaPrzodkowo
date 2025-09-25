import express from "express";
import readline from "readline";

const app = express();
const port = 3000;

// Serwer HTTP
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Oliwier Klibkosz śmiga na porcie ${port}`);

  // Interfejs do pobierania danych z konsoli
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Podaj imię, wariacie: ", (imie) => {
    console.log(`Witam panie ${imie}!`);
    rl.close();
  });
});