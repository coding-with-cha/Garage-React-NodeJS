import { useState } from 'react';
import {useSelector} from 'react-redux'
import Payement from './Payement'
import {Link} from 'react-router-dom';
import supp from '../images/delete.png'
import panierCol from '../images/panierCol.png'

const ShoppingCard = () => {
    const {card} = useSelector((state)=> state.user);

    let total = 0;
    const [all, setall] = useState(JSON.parse(card))

    const deleteFromCard = (id) => {
       const newObj = all.filter(item => item._id !== id)
       setall(newObj);
       let existingEntries = [];
       newObj.map(product=>(existingEntries.push(product)))
       localStorage.setItem("card", JSON.stringify(existingEntries));
    }


    return (
        
    <div style={{paddingTop:"12%"}} >
        {/* <h1>Panier</h1> */}
    <div className="tShop">
      <div className="Shopping">
       {all.map(product=>(
        <div key={product._id} className="article">
            <div className='bodyArticle'>
            <img src={product.postPic}/> 
            <h1>{product.title}</h1>
            <h1>{product.prix} DT</h1>
            <div style={{display: 'none'}}>{total += product.prix}</div>
            <button onClick={()=>{deleteFromCard(product._id)}}>
                <img src={supp} style={{width: '25px', height: '25px'}}/></button>
            </div>
            <hr className="hr"/>
        </div>
       
    ))}</div>

<div className="partTotal">
<h1>Détails de la commande</h1>

<img src={panierCol}/>
<hr/>
       <div className="prix">Coût total<br/>{total} DT</div>
        {localStorage.setItem('totalPrice', total)}
    

    <Link to='/Payement' className="link">
    Vérifier
    </Link></div>
    
    </div>

    </div>
  )
}

export default ShoppingCard