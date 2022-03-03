import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { loadUserInfo, updateProfilePic, updateUserWithID } from '../slices/userSlice';
import { deletePostsWithID, deletePostsWithIDP, getPostsWithID, updatePostPic, updatePostsWithIDP} from '../slices/postSlice';
import {useState} from 'react'
import {Modal} from 'react-bootstrap'
import edit from '../images/edit.png'
import supp from '../images/delete.png'
import {Link} from 'react-router-dom'
import add from '../images/add.png'
import checkout from '../images/note.png'




const Profile = () => {

  // for postSlice
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
    dispatch(updatePostsWithIDP({_id: id, title: title, description: description, categorie: catg, ville: ville, prix: prix}))
    handleClose()
}





  // for profile info
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
    dispatch(getPostsWithID())
  }, []);

  const {loading, postList, errors}  = useSelector((state)=> state.post);
// for profile pic
const [file, setFile] = useState({})

const handleImageUpdate = (e) => {
    e.preventDefault()
    dispatch(updateProfilePic(file))
}

// for post pic
const handleImagePostUpdate = (id) => {
  dispatch(updatePostPic({_id: id, file: file}))
}


  return <div className="profilePage">
    <div className="leftSide">
      <img src={profilePic}/>
      <input type='file' name='' id=''
        onChange={(e)=> setFile(e.target.files[0])}/>
      <button className="updatePicbtn" onClick={handleImageUpdate}>Mettre à jour l'image</button>
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
    <button className="btnUpdate" onClick={()=>{testidP(_id, name, email, adress, phoneNumber)}}>
      Cliquez pour mettre à jour
    </button>
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
    <div className="rightSide">
     <div className="titleAndBtnAnnonce">
       <h1>Mes publications</h1>
       <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', marginRight:'10%'}}>
      <Link to='/AddPost' className="lienAnnonce" >Déposer une annonce <img src={add}  style={{ width:'30px', height:'30px'}}/></Link>
      <Link to='/MesCommandes' className="lienAnnonce">Mes commandes <img src={checkout} style={{ width:'30px', height:'30px', marginLeft:'20%'}}/></Link>
      </div>
     </div> 
      <div className="productsPage" style={{marginTop:"5%", marginLeft:"5%"}}>
      {/* {loading && <p>loading...</p>}
    {errors && <p>{errors}</p>} */}
    <div className="allPosts">
    {postList && postList.map(post=>(
      <div key={post._id} className="post"> 
        <div className="entetePost">
          <img src={post.owner.profilePic}/>
          <h4>{post.owner.name}</h4>  
        </div>
         <hr className="hrP"/>
         {/* btn update post picture */}
        <img className="imgPost" src={post.postPic}/><br/>
        <input type='file' name='' id=''
          onChange={(e)=> setFile(e.target.files[0])}/><br/>
        <button onClick={(e)=>{handleImagePostUpdate(post._id)}}>Mettre à jour l'image</button><br/><br/>
      
        <h6 className="titlePost">{post.title}</h6><br/>
        <h6 className="descPost">{post.description}</h6><br/>
        <h6 className="prixPost">{post.prix} DT</h6><br/>
        <h6 className="villePost">{post.ville}</h6><br/>


        <div className="deuxImg">
        <button style={{border:"none", background:"transparent"}}
         onClick={()=>{testid(post._id, post.title,
           post.description,post.categorie, post.ville, post.prix)}}>
          <img src={edit} className="Edit"/>
        </button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modifier votre publication</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
                <input type="text"  placeholder="Titre" onChange={(e)=>{setTitle(e.target.value)}} required/>
                <input type="text"  placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}} required/>
                <input type="text"  placeholder="Catégorie" onChange={(e)=>{setCatg(e.target.value)}} required/>
                <input type="text"  placeholder="Ville" onChange={(e)=>{setVille(e.target.value)}} required/>
                <input type="text"  placeholder="prix" onChange={(e)=>{setPrix(e.target.value)}} required/>
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Modifier</button>
            </form>
          </Modal.Body>
          
        </Modal>
        <button style={{border:"none", background:"transparent"}}
         onClick={()=>dispatch(deletePostsWithIDP(post._id))}>
          <img src={supp} className="Supp"/>
        </button>
        </div>
      </div>
    ))}</div>
      </div>
    </div>

  </div>;
};

export default Profile;
