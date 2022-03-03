const mongoose = require('mongoose')

const commandeSchema = mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'person', 
    },
    totalPrice:{
        type: Number,
    },
    modePayement:{
        type: String,
        default: 'par carte',
    },
    statut:{
        type: String,
        default: 'en cours',
    },
    produitsCard:{
        type: [],
    }
})

module.exports = mongoose.model('commande', commandeSchema)