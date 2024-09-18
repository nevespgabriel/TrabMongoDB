import Refrigerante from "../models/refrigerante_model.js";

const store = async (req, res) => {
    try{
        await Refrigerante.create(req.body);
        res.json();
    } catch(err){
        res.status(400).json(err);
    }
}

const index = async (req, res) => {
    const content = await Refrigerante.find(req.query).exec();
    res.json(content);
}

const show = async (req, res) => {
    const content = await Refrigerante.findById(req.params.id).exec();
    res.json(content);
}

const update = async (req, res) => {
    try{
        await Refrigerante.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();
    } catch(err){
        res.status(400).json(err);
    }
} 

const destroy = async (req, res) => {
    await Refrigerante.findByIdAndDelete(req.params.id).exec();
    res.json();
}

export default{
    store, 
    index,
    show,
    update,
    destroy
}