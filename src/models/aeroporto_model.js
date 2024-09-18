import db from "../db.js";
import cep_endereco from "../middlewares/cep_endereco.js";

const Schema = db.Schema;

const aeroportoSchema = new Schema ({
    nome:{
        type: String,
        required: true
    },
    endereco:{
        type: Schema.Types.Array,
        required: true
    }
});

const Aeroporto = db.model("Aeroporto", aeroportoSchema);

export default Aeroporto;