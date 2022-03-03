import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { loadUserInfo, updateModePay, updateStatut } from '../slices/userSlice'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import panierCol from '../images/panierCol.png'
import { afterPayement } from '../slices/userSlice';
import Done from './Done'
import { registerCommande } from '../slices/commandeSlice'


const Payement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {card} = useSelector((state)=> state.user);
  const [all, setall] = useState(JSON.parse(card))

  const [product] = useState({
    name: "Entrer vos données",
    price: localStorage.getItem("totalPrice")
  })

  async function handleToken(token, adresses){
    const response = await axios.post('http://localhost:5000/checkout',
    {token, product})
    // take response 
    console.log(response.status)
    if(response.status === 200){
      console.log(all)
      dispatch(registerCommande({totalPrice: product.price, modePayement: "par carte", produitsCard: all}));
      dispatch(afterPayement());
      navigate('/Done');
  }
  } 

  return (
    <div style={{paddingTop:"5%"}} className="paymentPage">
      <img src={panierCol}/>
<div className="btnBtn">
      <div className="btnPay">
      <StripeCheckout className="StripeCheckout"
      stripeKey="pk_test_51KWdWiFco45YlSX6azrwhyhfRgGKzKaanQOT7JTFohg3UhwP4JUoUcWfemzoUwEsSwjC82VoI3FuTdQb3ywfkKHY00gdz1njGq"
      token={handleToken}
      amount={product.price * 100}
      name={product.name}
      billingAddress
      shippingAddress 
      /><br/> </div>
      <Link className='livraison' to="/Done" onClick={()=>{dispatch(registerCommande({totalPrice: product.price, modePayement: "à la livraison", produitsCard: all})); dispatch(afterPayement()); navigate('/Done')}}>Payer à la livraison</Link>
      </div>
    </div>
  )
}

export default Payement