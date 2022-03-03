import react, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCommandesWithID } from '../slices/commandeSlice';
import tracking from '../images/tracking.png'

const MesCommandes = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCommandesWithID())
  }, []);

  const {loading, commandeList, errors}  = useSelector((state)=> state.commande);

  return (
    <div style={{paddingTop:"8%"}} className="mesCommandes">
      {/* {loading && <p>loading...</p>}
      {errors && <p>{errors}</p>} */}
      <h1 className="titrePost">Mes commandes :</h1>

<div className="diva">
  <table>
  <tr>
    <th>Numéro de la commande</th>
    <th>Prix de la commande</th>
    <th>Mode de payement</th>
    <th>Statut de la commande</th>
  </tr>
  
  {commandeList&& commandeList.map(commande=>(
        <tr key={commande._id}>
          <td>{commande._id}</td>
          <td>{commande.totalPrice} DT</td>
          <td>{commande.modePayement}</td>
          <td>{commande.statut}</td>
        </tr>
      ))}
  
  </table> 
</div>
     <img src={tracking}/>
    </div>
  )
}

export default MesCommandes