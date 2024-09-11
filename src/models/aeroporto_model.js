const db = require("../db.js");
const cep_endereco = require("../middlewares/cep_endereco.js");

const Schema = db.Schema;

const aeroportoSchema = new Schema ({
    nome:{
        type: String,
        required: true
    },
    endereco:{

    }
});

const Aeroporto = db.model("Aeroporto", aeroportoSchema);

module.exports = Aeroporto;