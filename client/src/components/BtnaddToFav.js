import React, { useState, useEffect} from 'react'
import hheart from '../images/hheart.png'
import Rheart from '../images/Rheart.png'
import {useSelector, useDispatch} from 'react-redux'
import { loadUserInfo, updateFavoris } from '../slices/userSlice'

const BtnaddToFav = ({props}) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadUserInfo())         
      }, []);

      const [img, setImg] = useState(hheart)
       
      

    const handleFavoris = (props) => { 
        dispatch(updateFavoris(props))
        setImg(Rheart)
      }


  return (
    <div className="addToFav">
        <button className='btnfav' onClick={()=>handleFavoris(props)}>
            <img src={img}/>
        </button>
    </div>
  )
}

export default BtnaddToFav