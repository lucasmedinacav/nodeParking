var mongoose = require("mongoose");

var db = mongoose.connect("mongodb://localhost/parking").connection;

db.on("open", function() {
    console.log("conectado com sucesso");
});

db.on("erro", function() {
    console.log("erro ao conectar");
});

return db;