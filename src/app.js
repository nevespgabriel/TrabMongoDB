const express = require("express");
const app = express();
const port = 5250;

const aeroporto_router = require("./routes/aeroporto_router.js");
const caneta_router = require("./routes/caneta_router.js");
const moto_router = require("./routes/moto_router.js");
const refrigerante_router = require("./routes/refrigerante_router.js");

app.use(express.json());

app.use("/aeroporto", aeroporto_router);
app.use("/caneta", caneta_router);
app.use("/moto", moto_router);
app.use("/refrigerante", refrigerante_router);

app.listen(port, () => {
    console.log(`Server running at ${port} port.`);
})