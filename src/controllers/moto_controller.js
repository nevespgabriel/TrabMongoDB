import Moto from "../models/moto_model.js";

const store = async (req, res) => {
    try{
        await Moto.create(req.body);
        res.json();
    } catch(err){
        res.status(400).json(err);
    }
}

const index = async (req, res) => {
    const content = await Moto.find(req.query).exec();
    res.json(content);
}

const show = async (req, res) => {
    const content = await Moto.findById(req.params.id).exec();
    res.json(content);
}

const update = async (req, res) => {
    try{
        await Moto.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();
    } catch(err){
        res.status(400).json(err);
    }
} 

const destroy = async (req, res) => {
    await Moto.findByIdAndDelete(req.params.id).exec();
    res.json();
}

export default{
    store, 
    index,
    show,
    update,
    destroy
}