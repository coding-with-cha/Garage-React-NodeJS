import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { deleteCommandeWithID, getCommandes, updateStatut } from '../slices/commandeSlice';
import { deletePostsWithID } from '../slices/postSlice';

const AllCommandes = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCommandes())
      }, [dispatch]);

      const {loading, commandeList, errors}  = useSelector((state)=> state.commande);

      const listeOriginal = commandeList

      const [list, setList] = useState()
      const [id, setId] = useState()

      const handleSearch = (id) => {
        var newList = listeOriginal.filter((item)=>item._id === id)
        setList(newList)
      }

      const handleSupp = ({listes, _id}) => { 
        listes.map(item =>(
          dispatch(deletePostsWithID(item._id))
        ))
        dispatch(deleteCommandeWithID({_id: _id}))
       }

  return (
    <div  style={{paddingTop:"5%"}} className="commandesPage">
    <h1 className="titrePost">Liste des commandes</h1>
        <input className="SD" type="text" placeholder="Taper l'id de la commande à chercher" type="text"
                       onChange={(e)=>handleSearch(e.target.value)}/>
        
{/* de la recherche */}
<div className="allUsersS">
    <table>
  
{list && list.map(commande=>(
        <tr key={commande._id} className="userPost">
          <tr>
           <th>Nom</th>
           <th>E-amil</th>
           <th>Adresse</th>
           <th>Numéro de téléphone</th>
           <th>Prix de la commande</th>
           <th>Statut de la commande</th>
           <th>Mode payement de la commande</th>
           <th></th>
           <th></th>
         </tr>
         <tr>
            <td>{commande.owner.name}</td>
            <td>{commande.owner.email}</td>          
            <td>{commande.owner.adress}</td>
            <td>{commande.owner.phoneNumber}</td>
            <td>{commande.totalPrice}</td>
            <td>{commande.statut}</td>
            <td>{commande.modePayement}</td>
            <td><button className='btn1' onClick={()=>dispatch(updateStatut({_id: commande._id}))}>valider</button></td>
            <td><button className="btn2" onClick={()=>{handleSupp({listes: commande.produitsCard, _id: commande._id})}}>Supprimer</button></td>
          </tr></tr>
))}
  
  </table> 
   

    </div>
       


<div className="allUsers">
    <table>
  <tr>
    <th>Nom</th>
    <th>E-amil</th>
    <th>Adresse</th>
    <th>Numéro de téléphone</th>
    <th>Prix de la commande</th>
    <th>Statut de la commande</th>
    <th>Mode payement de la commande</th>
    <th></th>
    <th></th>
  </tr>
{commandeList && commandeList.map(commande=>(
        <tr key={commande._id} className="userPost">
            <td>{commande.owner.name}</td>
            <td>{commande.owner.email}</td>          
            <td>{commande.owner.adress}</td>
            <td>{commande.owner.phoneNumber}</td>
            <td>{commande.totalPrice}</td>
            <td>{commande.statut}</td>
            <td>{commande.modePayement}</td>
            <td><button className='btn1' onClick={()=>dispatch(updateStatut({_id: commande._id}))}>valider</button></td>
            <td><button className="btn2" onClick={()=>{handleSupp({listes: commande.produitsCard, _id: commande._id})}}>Supprimer</button></td>
          </tr>
))}
  
  </table> 
   

    </div>


    </div>
  )
}

export default AllCommandes