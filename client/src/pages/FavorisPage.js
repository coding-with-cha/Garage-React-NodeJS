import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import BtnaddToCard from '../components/BtnaddToCard';
import { loadUserInfo, updateFavorisPop, updateFavorisPull } from '../slices/userSlice';
import hheart from '../images/hheart.png'
import Rheart from '../images/Rheart.png'


const FavorisPage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadUserInfo())
      }, []);    
    
      const {favoris} = useSelector((state)=>state.user.userInfo);

      const [newListFav, setNewListFav] = useState();

      const [img, setImg] = useState(Rheart)

      const handleDrop = (post) => { 
        dispatch(updateFavorisPull(post))
       }

  return ( 
    <div style={{paddingTop:"5%"}} className="productsPage">
   
    <h1 className="titrePost">Liste de vos favoris <img src={hheart} style={{width:"30px", height:'30px'}}/></h1>

    <div className="allPosts">
  {favoris && favoris.map(post=>(
      <div key={post._id} className="postallpostC" style={{width: "285px"}}>
         <div className="entetePost">
        <img src={post.owner.profilePic}/>
        <h4>{post.owner.name}</h4>  
        </div>
        <hr className="hrP"/>
        <img className="imgPost" src={post.postPic} style={{paddingBottom:"7%", paddingTop:"3%"}}/><br/>
        <h6 className="titlePost">{post.title}</h6><br/>
        <h6 className="descPost">{post.description}</h6><br/>
        <h6 className="prixPost">{post.prix} DT</h6><br/>
        <h6 className="villePost">{post.ville}</h6><br/>
          <BtnaddToCard props={post}/>
          <button className='btnfav' onClick={()=>handleDrop(post)}>
            <img src={img}/>
        </button> 
      </div>
  ))}
  </div>
  </div>

  )
}

export default FavorisPage