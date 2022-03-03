import React, { useState, useEffect} from 'react'
import hheart from '../images/hheart.png'
import Rheart from '../images/Rheart.png'
import {useSelector, useDispatch} from 'react-redux'
import { loadUserInfo, updateFavoris, updateFavorisPull } from '../slices/userSlice'

const BtndeleteFromCard = ({props}) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadUserInfo())         
      }, []);

      const [img, setImg] = useState(Rheart)
       
      

    const handleFavoris = (props) => { 
        dispatch(updateFavorisPull(props))
        setImg(hheart)
      }


  return (
    <div className="addToFav">
        <button className='btnfav' onClick={()=>handleFavoris(props)}>
            <img src={img}/>
        </button>       
    </div>
  )
}

export default BtndeleteFromCard