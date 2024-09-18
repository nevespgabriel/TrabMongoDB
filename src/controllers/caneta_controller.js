const Caneta = require("../models/caneta_model.js");

const store = async (req, res) => {
    try{
        await Caneta.create(req.body);
        res.json();
    } catch(err){
        res.status(400).json(err);
    }
}

const index = async (req, res) => {
    const content = await Caneta.find(req.query).exec();
    res.json(content);
}

const show = async (req, res) => {
    const content = await Caneta.findById(req.params.id).exec();
    res.json(content);
}

const update = async (req, res) => {
    try{
        await Caneta.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();
    } catch(err){
        res.status(400).json(err);
    }
} 

const destroy = async (req, res) => {
    await Caneta.findByIdAndDelete(req.params.id).exec();
    res.json();
}

module.exports = {
    store, 
    index,
    show,
    update,
    destroy
}