import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import search from '../images/search.png'
import like from '../images/like.png'
import logIn from '../images/login.png'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Dashboard from '../pages/Dashboard'
import profilePic from '../images/profilePic.png'
import {useSelector, useDispatch} from 'react-redux'
import { logout } from '../slices/userSlice';
import shutdown from '../images/shutdown.png'
import recherche from '../pages/Recherche'
import ShoppingCard from '../pages/ShoppingCard'
import FavorisPage from '../pages/FavorisPage';
import vide from '../images/vide.png'


const Navbar = () => {
    const {isAuth, role, card} = useSelector((state)=> state.user);
    const {profilePic, name} = useSelector((state)=>state.user.userInfo);
    


    const dispatch = useDispatch()

  return <div className="navBar">

<Link to='/' className="logo">

    <span>G</span>
    <span>A</span>
    <span>R</span>
    <span className="rotateA">A</span>
    <span className="afterRotate">G</span>
    <span>E</span>
    
</Link>
    

    <Link to='/recherche'  className="searchNavBar">
      <img src={search}/><h1>Rechercher</h1>
    </Link>



<Link to='/FavorisPage'  className="Favoris">
<img src={like}/><h1>Fovoris</h1>
    </Link>

    <Link to='/ShoppingCard'  className="ShoppingCard">
      <img src={vide}/>
      </Link>

{isAuth && role === 'admin' ?  
    <Link to='/Dashboard' className="ProfDash"><img src={profilePic}/><h1>Dashboard</h1></Link> :
    isAuth && role === 'user' ?
    <Link to='/Profile' className="ProfDash"><img src={profilePic}/><h1>{name}</h1></Link> :
    <div className="logIn">
      <Link to='/Login' className="Link">
        <img src={logIn}/>
        <h1>Se connecter</h1>
      </Link>
    </div>
    }

 
    
   
      
    
    
    
    
    
  

    

    {isAuth && <button onClick={()=>dispatch(logout())} className="logout"><img src={shutdown}/><h1>Se déconnecter</h1></button>}


    


  </div>;
};

export default Navbar;
