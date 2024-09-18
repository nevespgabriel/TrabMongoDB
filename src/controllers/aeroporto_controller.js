import Aeroporto from "../models/aeroporto_model.js";

const store = async (req, res) => {
    try{
        await Aeroporto.create(req.body);
        res.json();
    } catch(err){
        res.status(400).json(err);
    }
}

const index = async (req, res) => {
    const content = await Aeroporto.find(req.query).exec();
    res.json(content);
}

const show = async (req, res) => {
    const content = await Aeroporto.findById(req.params.id).exec();
    res.json(content);
}

const update = async (req, res) => {
    try{
        await Aeroporto.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();
    } catch(err){
        res.status(400).json(err);
    }
} 

const destroy = async (req, res) => {
    await Aeroporto.findByIdAndDelete(req.params.id).exec();
    res.json();
}

export default{
    store, 
    index,
    show,
    update,
    destroy
}