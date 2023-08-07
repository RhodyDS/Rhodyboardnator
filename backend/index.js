// initial config
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//xNUDs0pEWXRugolE
const Apps = require("./models/AppsModel");
const cors = require("cors");
//data
const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const dia = String(dataAtual.getDate()).padStart(2, "0");

const dataFormatada = `${ano}-${mes}-${dia}`;

const automations = require("./automation");
//reading JSON / middlewares
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.post("/atualizar", async (req, res) => {
  try {
    const metricFlip = await automations.flipApp();
    await Apps.updateOne(
      { nome: "Flip" },
      { $set: { [`metricas.${dataFormatada}`]: metricFlip } }
    );
    const metricDuo= await automations.duolingoApp();
    await Apps.updateOne(
      { nome: "Duolingo" },
      { $set: { [`metricas.${dataFormatada}`]: metricDuo } }
    );
    const metricLumo = await automations.lumosityApp();
    await Apps.updateOne(
      { nome: "Lumosity" },
      { $set: { [`metricas.${dataFormatada}`]: metricLumo } }
    );
    const metricChess = await automations.chessApp();
    await Apps.updateOne(
      { nome: "Chess" },
      { $set: { [`metricas.${dataFormatada}`]: metricChess } }
    );
    res.status(200).json({ message: "Atualização bem-sucedida" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/metricas", async (req, res) => {
  try {
    const apps = await Apps.find();
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://rhodytesla:xNUDs0pEWXRugolE@cluster0.o0emz0f.mongodb.net/rhodyboardnator?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("conectamos ao mongo");
  });

// Iniciar o servidor 
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
