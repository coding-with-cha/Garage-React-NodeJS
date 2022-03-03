import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { loadUserInfo, updateProfilePic, updateUserWithID } from '../slices/userSlice';
import { deletePostsWithID, getPosts, updatePostsWithID } from '../slices/postSlice';
import edit from '../images/edit.png'
import supp from '../images/delete.png'
import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import group from '../images/group.png'
import post from '../images/instagram-post.png'
import useSetting from '../images/userSetting.png'
import postSetting from '../images/postSetting.png'
import orderSetting from '../images/order setting.png'
const Dashboard = () => {

//for posts
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [catg, setCatg] = useState("")
  const [ville, setVille] = useState("")
  const [prix, setPrix] = useState("")
  const [id, setID] = useState("")


  const testid = (id, t, d, c, v, p) => { 
    console.log(id, t, d, c, v, p)
    setID(id)
    setTitle(t)
    setDescription(d)
    setCatg(c)
    setVille(v)
    setPrix(p)
    handleShow()
   }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updatePostsWithID({_id: id, title: title, description: description, categorie: catg, ville: ville, prix: prix}))
    handleClose()
}







//for profile

const [showMP, setShowMP] = useState(false);
  
const handleCloseMP = () => setShowMP(false);
const handleShowMP = () => setShowMP(true);

  const [idp, setIdP] = useState("")
  const [nom, setNom] = useState("")
  const [mail, setMail] = useState("")
  const [adresse, setAdresse] = useState("")
  const [numTel, setNumTel] = useState("")

  const testidP = (i, n, m, a, t) => { 
    console.log(i, n, m, a, t)
    setIdP(i)
    setNom(n)
    setMail(m)
    setAdresse(a)
    setNumTel(t)
    handleShowMP()
   }

  const handleSubmitMP = (e) => {
    console.log(idp, nom, mail, adresse, numTel)
    e.preventDefault()
    dispatch(updateUserWithID({_id: idp,  name: nom, email: mail, adress: adresse, phoneNumber: numTel}))
    handleCloseMP()
}



const dispatch = useDispatch();
const {_id, profilePic, name, email, adress, phoneNumber} = useSelector((state)=>state.user.userInfo);

useEffect(()=>{
  dispatch(loadUserInfo());
  dispatch(getPosts())
}, []);
const {loading, postList, errors}  = useSelector((state)=> state.post);

const [file, setFile] = useState({})
const handleImageUpdate = (e) => {
    e.preventDefault()
    dispatch(updateProfilePic(file))
}

const weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","vendredi","Samedi"];
const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]

let newDate = new Date()
let day = weekday[newDate.getDay()];
let date = newDate.getDate();
let month = months[newDate.getMonth()];
let year = newDate.getFullYear();

  return <div className="profilePage">
  <div className="leftSide">
    <img className="imgProfile" src={profilePic}/>
    <input type='file' name='' id='' 
      onChange={(e)=> setFile(e.target.files[0])}/>
      <button onClick={handleImageUpdate}>Mettre à jour l'image</button>
    <hr/>
    <h1>Nom</h1>
    <p>{name}</p>
    <hr/>
    <h1>E-mail</h1>
    <p>{email}</p>
    <hr/>
    <h1>Adresse</h1>
    <p>{adress}</p>
    <hr/>
    <h1>Numéro de téléphone</h1>
    <p>{phoneNumber}</p>
    <hr/>
    <button onClick={()=>{testidP(_id, name, email, adress, phoneNumber)}}>Cliquez pour mettre à jour</button>
    <Modal
          show={showMP}
          onHide={handleCloseMP}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modifier votre profil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
                <input type="text"  placeholder="Nom" onChange={(e)=>{setNom(e.target.value)}} required/>
                <input type="text"  placeholder="E-mail" onChange={(e)=>{setMail(e.target.value)}} required/>
                <input type="text"  placeholder="Adresse" onChange={(e)=>{setAdresse(e.target.value)}} required/>
                <input type="text"  placeholder="Numéro de téléphone" onChange={(e)=>{setNumTel(e.target.value)}} required/>
                <button type="submit" onClick={(e)=>{handleSubmitMP(e)}}>Modifier</button>
            </form>
          </Modal.Body>
          
        </Modal>
  </div>


  <div className="rightSideDash">
  <p>{day}, {date} {month}</p><br/>
  <div className="forFun">
    <h3>Bienvenue dans votre</h3>
    <h4>gestionnaire des tâches quotidiennes</h4>
  </div>
    <div className="total">
    <div className="totalUser">
    <Link to='/AllUsers' className="imgToAllUsers"><img src={useSetting}/>
    <p>Gestion d'utilisateur</p>
    </Link>
    </div>
    <div className="totalPost">
    <Link to='/AllPosts' className="imgToAllPosts"><img src={postSetting}/>
    <p>Gestion des publications</p>
    </Link>
    </div>
    <div className="totalCom">
    <Link to='/AllCommandes' className="imgToAllCommandes"><img src={orderSetting}/>
    <p>Gestion des commandes</p>
    </Link>
    </div>
    </div>
  </div>
</div>;
};

export default Dashboard;
