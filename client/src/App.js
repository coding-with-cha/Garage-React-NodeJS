import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import Register from './pages/Register';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NavBar from './components/Navbar'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedRouteAdmin from './components/ProtectedRouteAdmin';
import Recherche from './pages/Recherche';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import AllUsers from './pages/AllUsers';
import AllPosts from './pages/AllPosts'
import Clothing from './pages/Clothing';
import Books from './pages/Books';
import Car from './pages/Car';
import Deco from './pages/Deco';
import Electro from './pages/Electro';
import Hardware from './pages/Hardware';
import Immo from './pages/Immo';
import Meuble from './pages/Meuble';
import ShoppingCard from './pages/ShoppingCard';
import Payement from './pages/Payement';
import FavorisPage from './pages/FavorisPage';
import Done from './pages/Done';
import AllCommandes from './pages/AllCommandes';
import MesCommandes from './pages/MesCommandes';


function App() {

//app
  return (
    <div className="App">

      {/* <Register/> */}
      <NavBar  pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Clothing' element={<Clothing/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Car' element={<Car/>}/>
        <Route path='/Deco' element={<Deco/>}/>
        <Route path='/Electro' element={<Electro/>}/>
        <Route path='/Hardware' element={<Hardware/>}/>
        <Route path='/Immo' element={<Immo/>}/>
        <Route path='/Meuble' element={<Meuble/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/AddPost' element={<AddPost/>}/>  
          <Route path='/FavorisPage' element={<FavorisPage/>}/> 
          <Route path='/Payement' element={<Payement/>}/>
          <Route path='/Done' element={<Done/>}/> 
          <Route path='/MesCommandes' element={<MesCommandes/>}/>
        </Route>
        <Route element={<ProtectedRouteAdmin/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/allPosts' element={<AllPosts/>}/>
          <Route path='/allUsers' element={<AllUsers/>}/>
          <Route path='/allCommandes' element={<AllCommandes/>}/>
        </Route>
        <Route path='/products' element={<Products/>}/>
        <Route path='/recherche' element={<Recherche/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/ShoppingCard' element={<ShoppingCard/>}/>
      </Routes>
    </div>
  );
  }

export default App;
