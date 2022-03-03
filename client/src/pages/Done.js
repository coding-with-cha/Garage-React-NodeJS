import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import doneLogo from '../images/doneLogo.png'
import {Link} from 'react-router-dom'
const Done = () => {
  return (
    <div style={{paddingTop:"10%"}} className="done">
        <img src={doneLogo}/>
        <div className="bodyDone">
        <h1>Nous vous remercions d'avoir choisi notre produit et de la confiance que vous accordez à notre société. </h1>
        <Link to="/" className="homeLink">Revenir à la page d'accueil</Link></div>
    </div>
  )
}

export default Done