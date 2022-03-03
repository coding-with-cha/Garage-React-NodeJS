import React from 'react'
import woman from '../images/woman.png'
import {Link} from 'react-router-dom'

const Estimation = () => {
  return (
    <div className="Estimation">  
        <img src={woman}/>
        <div className="estDroite">
            <h1>C'est le monde de vendre !</h1>
            <h2>Pour vendre vite, 
                <span> faites estimer<br/> gratuitement </span>
                 votre bien immobilier.</h2>
                 <Link to='/AddPost' className="annonceLink">Demander une estimation gratuite</Link>
        </div>
    </div>
  )
}

export default Estimation