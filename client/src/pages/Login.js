import {useEffect} from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../slices/userSlice';
import {Link, useNavigate} from 'react-router-dom';
import '../style/style.css'
import Register from './Register'
import snow from '../images/xx.png'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {errors: userError, isAuth, role} = useSelector((state)=> state.user);
  useEffect(()=>{
    if(isAuth && role === 'user') navigate('/profile')
    else if(isAuth && role === 'admin') navigate('/dashboard')
  },[]);
  const {
    register:loginInfo,
    handleSubmit,
    formState: { errors }, 
    } = useForm();

    
    const userInfo = (data) => {
      dispatch(loginUser({data,navigate}))
    }

  return <div className="loginPage">
    {/* <img src={snow} className="snow"/> */}
    <div className="contenuLoginPage">
    <div className="loginTop">
      <h1>Bonjour !</h1>
      <p>Connectez-vous pour découvrir toutes nos fonctionnalités.</p>
    </div>
    <div className="loginForm">
      <form onSubmit={handleSubmit(userInfo)} style={{marginTop:"10%"}} className="formulaire">
          <input type="text" placeholder="E-mail" {...loginInfo('email',{required: true,
           pattern:
            {value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message:'invalid email',},
            })}/><br/> 
            {errors.email?.message}
          <input type="password" placeholder="Mot de Passe" {...loginInfo('password',{required: true,minLength:{value:6,
          message:'password should be of 6 characters length'}})}></input><br/>
           {errors.password?.message}
           <p className="errorsLogin">{userError && userError}</p>
           <p className="forgetPassword">Mot de passe oublié</p>
          <button>Se connecter</button>
          <p className="footerformulairelogin">Envie de nous rejoindre ?

          <Link to='/Register' className="linkregister"> Créer un compte</Link></p>
      </form>
      </div></div>
  </div>;
};

export default Login;
