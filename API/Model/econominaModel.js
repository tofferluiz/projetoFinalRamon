const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    titulo: String,
    anoPublicacao: Number,
    anoVericacao: Number,
    meteriaVerdadeita: Boolean,
    autor: String,
    portalPublicacao: String,
});

const Noticia = mongoose.model('Noticia', schema);
module.exports = Noticia;
