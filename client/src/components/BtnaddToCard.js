import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { loadUserInfo } from '../slices/userSlice';

const BtnaddToCard = (props) => {

  const post = props.props

  const dispatch = useDispatch();
  const {_id} = useSelector((state)=>state.user.userInfo);

  useEffect(()=>{
    dispatch(loadUserInfo())
  }, []);

  const fct = () => { 
    var existingEntries = JSON.parse(localStorage.getItem("card"));
        if(existingEntries == null) existingEntries = [];
       
        existingEntries.push(post);
        localStorage.setItem("card", JSON.stringify(existingEntries));
   }
    const addToCard = () => {
     if(post.owner._id !== _id){
       return fct()
     }
    }
    
  return (
    <div>
        <button onClick={()=>addToCard()}>Ajouter au panier</button>
    </div>
  )
}

export default BtnaddToCard