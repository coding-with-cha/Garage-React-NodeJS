import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { deletePostsWithID, getPosts, updatePostsWithID } from '../slices/postSlice';
import {useState} from 'react'
import {Modal} from 'react-bootstrap'
import edit from '../images/edit.png'
import supp from '../images/delete.png'
import { getUserById } from '../slices/userSlice';

 
const AllPosts = () => {

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

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
      }, []);
      const {loading, postList, errors}  = useSelector((state)=> state.post);

      const listeOriginal = postList
      const [idd, setIdd] = useState()
      const [list, setList] = useState([])

      const handleSearch = (idd) => {
        var newList = listeOriginal.filter((item)=>item._id === idd) 
        setList(newList)
      }

  return (
    <div style={{paddingTop:"5%"}} className="productsPage">

          <h1 className="titrePost">Liste des publications</h1>

<input className="SD" type="text" placeholder="Taper l'id de la publication"  onChange={(e)=>handleSearch(e.target.value)}/>
         
 <div className="allPosts" style={{marginTop:"2%"}}>
    {list && list.map(post=>(
        <div key={post._id} className="postallpost">
          <div className="entetePost">
          <img src={post.owner.profilePic}/>
          <h4>{post.owner.name}</h4> 
        </div>
        <hr/>
        <div className="block2">
          <h6 className="titlePost">{post.title}</h6><br/>
          <img src={post.postPic.imageURL} className="imgPost"/>
          <h6 className="descPost">{post.description}</h6><br/>
          <h6 className="prixPost">{post.prix} DT</h6><br/>
          <h6 className="villePost">{post.ville}</h6><br/></div>
          <div className="deuxImg">
        
        <button style={{border:"none", background:"transparent"}}
         onClick={()=>dispatch(deletePostsWithID(post._id))}>
          <img src={supp} className="Supp"/>
        </button></div>
        </div>
    ))}

    </div>
    {/* {loading && <p>loading...</p>}
    {errors && <p>{errors}</p>} */}

    <div className="allPosts" style={{marginTop:"2%"}}>
    {postList && postList.map(post=>(
        <div key={post._id} className="postallpost">
          <div className="entetePost">
          <img src={post.owner.profilePic}/>
          <h4>{post.owner.name}</h4> 
        </div>
        <hr/>
        <div className="block2">
          <h6 className="titlePost">{post.title}</h6><br/>
          <img src={post.postPic} className="imgPost"/>
          <h6 className="descPost">{post.description}</h6><br/>
          <h6 className="prixPost">{post.prix} DT</h6><br/>
          <h6 className="villePost">{post.ville}</h6><br/></div>
          <div className="deuxImg">
         
        <button style={{border:"none", background:"transparent"}}
         onClick={()=>dispatch(deletePostsWithID(post._id))}>
          <img src={supp} className="Supp"/>
        </button></div>
        </div>
    ))}

    </div>
 </div> )
}

export default AllPosts