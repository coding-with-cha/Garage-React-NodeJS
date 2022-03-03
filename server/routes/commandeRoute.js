const express = require('express');
const { registerCommande, updateStatut, getCommandes, getCommandeWithId, deleteCommande, updateModePayement, updateProduitsCard, getCommandeUser } = require('../controllers/commandeControllers');
const adminCheckMiddleware = require('../middlewares/adminCheck');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router()

router.post('/',authMiddleware,registerCommande);

router.put('/:CommadeId',authMiddleware,adminCheckMiddleware,updateStatut);

router.get('/getAll',authMiddleware,adminCheckMiddleware,getCommandes);

router.get('/:CommadeId',authMiddleware,adminCheckMiddleware,getCommandeWithId);

router.delete('/:commandeId',authMiddleware,adminCheckMiddleware,deleteCommande);

router.put('/modepay/:commandeId',authMiddleware,adminCheckMiddleware,updateModePayement);

router.put('/upProduitsCard/:commandeId',authMiddleware,adminCheckMiddleware,updateProduitsCard);

router.get('/forOwner/forOwner',authMiddleware,getCommandeUser);

module.exports = router;