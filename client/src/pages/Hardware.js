import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import BtnaddToCard from '../components/BtnaddToCard';
import BtnaddToFav from '../components/BtnaddToFav';
import { getPostsFilter } from '../slices/postSlice';
import Estimation from '../components/Estimation';



const Hardware = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPostsFilter("Informatique"));
  }, [dispatch]);

  const {loading, postList, errors}  = useSelector((state)=> state.post);

  return (
    <div style={{paddingTop:"5%"}} className="productsPage">
    {/* <h1>all clothings</h1> */}
    {/* {loading && <p>loading...</p>}
    {errors && <p>{errors}</p>} */}
    <h1 className="titrePost">Annonces informatique *ordinateur, pc, tablette, ...<br/> : Toute la Tunisie</h1>
    <Estimation/>
    <div className="allPosts">
  {postList && postList.map(post=>(
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
        <h6 className="villePost">{post.owner.phoneNumber}</h6><br/>
          <BtnaddToCard props={post}/>
            <BtnaddToFav className="btnfav" props={post}/>
      </div>
  ))}
  </div>
  </div>
  )}

export default Hardware