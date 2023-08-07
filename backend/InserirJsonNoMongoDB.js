// initial config
const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
//xNUDs0pEWXRugolE
const Apps = require("./models/AppsModel");
//reading JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "primeira api eim pai" });
});

fs.readFile("backend/Apps.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo JSON:", err);
    process.exit(1);
  }

  // Converter o JSON para um objeto JavaScript
  try {
    const apps = JSON.parse(data);
    console.log(apps);
    for (i in apps) {
      Apps.create(apps[i]);
    }

    mongoose
      .connect(
        "mongodb+srv://rhodytesla:xNUDs0pEWXRugolE@cluster0.o0emz0f.mongodb.net/rhodyboardnator?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("conectamos ao mongo");
      });

    // Iniciar o servidor depois de ler o arquivo e fazer as operações necessárias
    app.listen(3000, () => {
      console.log("Servidor iniciado na porta 3000");
    });
  } catch (error) {
    console.error("Erro ao converter o JSON:", error);
    process.exit(1);
  }
});
