const Person = require('../models/personModel');
const Post = require('../models/postModel');
const Commande = require('../models/commandeModel');


// @desc register commande
// @route POST /api/commande
//@ access PRIVATE user
const registerCommande = async(req, res)=>{
    try{
        const {totalPrice, modePayement, produitsCard} = req.body;
        await Commande.create({owner:req.personId, totalPrice:totalPrice, modePayement:modePayement, produitsCard: produitsCard})
        res.status(201).json({msg:'commande created'})
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc update a statut by id
// @route PUT /api/commande/statut
//@ access admin
const updateStatut = async(req,res)=>{
    try {
        await Commande.findByIdAndUpdate(req.params.CommadeId,{statut: "validé"})
        res.status(200).json({msg:'successfully updated'})
        } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}


// @desc get all commandes
// @route GET /api/commande
//@ access PRIVATE admin
const getCommandes = async(req, res)=>{
    try{
        const commandes = await Commande.find({}).populate("owner","-password");
        res.status(200).json(commandes)
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc get commandes for owner
// @route GET /api/commande/forOwner/forOwner
//@ access PRIVATE - owner
const getCommandeUser = async(req, res)=>{
    try{
        const commandes = await Commande.find({owner: req.personId}).populate("owner","-password");
        res.status(200).json(commandes)
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}
 
// @desc get commandes with id
// @route GET /api/post/withId
//@ access PRIVATE - admin
const getCommandeWithId = async(req, res)=>{
    try{
      const posts = await Commande.findById(req.params.CommadeId).populate('owner','-password -role -__v');
        res.status(200).json(posts)
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc delete a commande by id
// @route DELETE /api/commande/:commandeId
//@ access PRIVATE admin
const deleteCommande = async(req,res)=>{
    try {
        await Commande.findByIdAndDelete(req.params.commandeId)
        res.status(200).json({msg:'successfully deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc update a modePayement by id
// @route PUT /api/commande/modepay/:commandeId
//@ access admin
const updateModePayement = async(req,res)=>{
    try {
        await Commande.findByIdAndUpdate(req.params.commandeId,{modePayement: "à la livraison"})
        res.status(200).json({msg:'successfully updated'})
        } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc update a produitsCard 
// @route PUT /api/commande/produitsCard
//@ access PRIVATE - admin
const updateProduitsCard = async(req,res)=>{
    try {
        await Commande.findByIdAndUpdate(req.params.commandeId,{
            $push: {produitsCard: req.body}
        })
        res.status(200).json({msg:'successfully updated'})
        } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}


module.exports = {registerCommande, updateStatut, getCommandes, getCommandeWithId, deleteCommande, updateModePayement, updateProduitsCard, getCommandeUser}