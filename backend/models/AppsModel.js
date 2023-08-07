const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
  nome: String,
  classe: [String],
  area: [String],
  metricas: Object,
}, { versionKey: false }); // Definindo versionKey como false

const Apps = mongoose.model('Apps', registroSchema);

module.exports = Apps