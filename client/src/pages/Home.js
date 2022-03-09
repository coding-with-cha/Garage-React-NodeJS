import React from 'react';
import {Link} from 'react-router-dom'
import '../style/style.css'
import icon1 from '../images/icon1.png'
import icon2 from '../images/search.png'
import icon3 from '../images/shopping-bag.png'
import icon4 from '../images/checkD.png'
import hardware from '../images/hardware.jpg'
import books from '../images/books.jpg'
import car from '../images/car.jpg'
import clothing from '../images/clothing.jpg'
import deco from '../images/deco.jpg'
import electromenager from '../images/electromenager.jpg'
import immo from '../images/immo.jpg'
import jobOffer from '../images/jobOffer.jpg'
import meuble from '../images/meuble.jpg'
import backg from'../images/background.png'
import ButtonMailto from './ButtonMailto';
import meeting from '../images/meeting.png';
 

const Home = () => {
  
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes();
  
  return <div className="home">
    <div className="WandP">
      <div className="welcomeText">
        <h1>Commencez <br/>à vendre en ligne</h1>
        <Link to='/AddPost' className="annonceLink">Déposer une annonce</Link>
        <div className="descBtn">Essai gratuit et sans limite de temps</div>
      </div>

{/* iphone */}

<div className="main">
<div className="background"></div>
<div className="iphone-body">
  <img src={backg} className="img"/>
  <div className="contenu">
      <h1 className="contenuh1"><img src={icon4}/> Vendez tout GRATUITEMENT</h1>
      <h1 className="contenuh1"><img src={icon4}/> Des centaines d'acheteurs chaque jour</h1>
      <h1 className="contenuh1"><img src={icon4}/> Ajoutez des photos pour vendre plus vite</h1>
      {/* <Link to='/createAnnonce' className="link">Publiez votre annonce gratuitement !</Link> */}
      <img className="imgShop" src="https://cdn.shopify.com/shopifycloud/brochure/assets/landers/short-lander/free-trial/storefront-illustration@mobile-cd49a37e1e5e153e43ca57891bd3f327ff19f1fe139517ad4fbcf2d83388ae23.png"/>
      <div  className="footerIphone"><span>WWWW.GARAGE.COM</span> </div>
  </div>
<div className="tt"><div className="time">{h}:{m}</div>
<div className="top-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16">
                        <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                        <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                      </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                        <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
                      </svg>
                      
                    <svg className="bat" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-battery-full" viewBox="0 0 16 16">
                        <path d="M2 6h10v4H2V6z"/>
                        <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
                      </svg>
</div></div>
                <hr className="hr1"/>                 
                <hr/>
                <div className="round-shape-1" style={{zIndex:"2"}}></div>
                <div className="round-shape-2" style={{zIndex:"2"}}></div>
                <div className="round-shape-color1" style={{zIndex:"2"}}></div>
                <div className="round-shape-color2" style={{zIndex:"2"}}></div>
                <div className="top-section">
                    <div className="camera"></div>
                    <div className="speaker"></div>
                </div>
                <div className="btn volume-up" style={{zIndex:"1"}}></div>
                <div className="btn volume-down" style={{zIndex:"1"}}></div>
                <div className="btn silent" style={{zIndex:"1"}}></div>
                <div className="btn power" style={{zIndex:"1"}}></div>
</div>
</div>


</div>


{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    <div className="bodyHome">
    <div className="homeSection1">
      <h1>Top catégories</h1>
      <div className="wrapper">
          <Link to='/Clothing' className="item"><div ><img src={clothing}/><div className="text"><h1>Vêtements</h1></div></div></Link>
          <Link to='/Meuble'  className="item"><div><img src={meuble}/><div className="text"><h1>Ameublements</h1></div></div></Link>
          <Link to='/Deco' className="item"><div ><img src={deco}/><div className="text"><h1>Décoration</h1></div></div></Link>
          <Link to='/Electro' className="item"><div ><img src={electromenager}/><div className="text"><h1>Electroménager</h1></div></div></Link>
          <Link to='/Books' className="item"><div ><img src={books}/><div className="text"><h1>Livres</h1></div></div></Link>
          <Link to='/Immo' className="item"><div ><img src={immo}/><div className="text"><h1>Vente immo</h1></div></div></Link>
          <Link to='/Car' className="item"><div ><img src={car}/><div className="text"><h1>Voitures</h1></div></div></Link>
          <Link to='/Hardware' className="item"><div ><img src={hardware}/><div className="text"><h1>Informatique</h1></div></div></Link>
      </div>
    </div>
    <div className="homeSection1-2">
      <div>
        <h1>Avoir une passion c'est bien ! <br/>La partager avec les autres, v'est mieux !</h1>
        <h2>Jardinage, mode, vélo... Ils sont nombreux à en parler sur<br/>la Communauté GARAGE ! Rejoignez-les !</h2>
        <Link to='/Login' className="annonceLink">Rejoignez nous</Link>
      </div>
      <img src={meeting}/>
    </div>
    <div className="homeSection2">
      <p>Avec Garage, trouvez la bonne affaire sur le site référent de petites annonces de particulier à particulier 
        et de professionnels. Avec des millions de petites annonces, trouvez la bonne occasion dans nos catégories <Link to='/Car' className="link">voiture</Link>, <Link to='/Immo' className="link">immobilier</Link>, <Link to='/Clothing' className="link">vêtements</Link>, <Link to='/Meuble' className="link">meubles</Link>, <Link to='/Immo' className="link">bricolage</Link>, 
        <Link to='/Hardware' className="link"> téléphonie</Link>, <Link to='/Hardware' className="link"> jeux vidéo</Link>, etc… Déposez 
        une annonce gratuite en toute simplicité pour vendre, rechercher, donner vos biens de seconde main ou promouvoir 
        vos services. 
        Achetez en toute sécurité avec notre système de paiement en ligne et de livraison pour les annonces éligibles.</p>
    </div>
    <div className="footer">
      <div className='haut'>
    <div className="part1">
        <h1>À PROPOS DU GARAGE</h1>
        <hr/>
        <h2>Qui sommes-nous ?</h2>
        <h2>Nous rejoindre</h2>
        <h2>Acteur responsable de l’économie tunisienne</h2>
        <h2>L’Avenir a du bon</h2>
        <h2>Le bon observatoire</h2>
      </div>
      <div className="part2">
      <h1>INFORMATIONS LÉGALES</h1>
        <hr/>
        <h2>Conditions générales d’utilisation</h2>
        <h2>Règles de diffusion, de référencement et de déréférencement</h2>
        <h2>Conditions générales de vente</h2>
        <h2>Vie privée / cookies</h2>
        <h2>Vos droits et obligations</h2>
        <h2>Critères de classement</h2>
        <h2>Décisions de justice</h2>
      </div>
      <div className="part3">
      <h1>NOS SOLUTIONS PROS</h1>
        <hr/>
        <h2>Publicité</h2>
        <h2>Professionnels de l’immobilier</h2>
        <h2>Vos recrutements</h2>
        <h2>Professionnels de l’auto</h2>
        <h2>Professionnels du tourisme</h2>
        <h2>Autres solutions professionnelles</h2>
        <h2>Annuaire des professionnels</h2>
        <h2>Dépôt gratuit d’emploi pour les TPE</h2>
      </div>
      <div className="part4">
      <h1>DES QUESTIONS ?</h1>
        <hr/>
        <h2>Aide</h2>
        <h2>Le service de paiement sécurisé et la livraison</h2>
        <h2>Le service de réservation de vacances en ligne pour les hôtes</h2>
        <h2>Votre dossier de location en ligne</h2>
        <h2>Demandez conseil à la Communauté</h2>
        <h2>Statut de nos services</h2>
      </div></div>
    
      <ButtonMailto label="Écrivez-nous un e-mail" mailto="mailto:chaimamejbri@gmail.com" />
      <hr/>
      <div className="bas">
        <p>GARAGE 2022</p>
      </div>
    </div>
    </div>     
  </div>;
};

export default Home;
