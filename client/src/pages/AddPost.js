import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { createPost } from '../slices/postSlice';
import map from '../images/map.png'

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    } = useForm();

    const {errors: userError} = useSelector((state)=> state.user);
    
    const postInfo = (data) => {
      dispatch(createPost({data,navigate}))
    }

const [cat,setCat] = useState("")
const [ville,setVille] = useState("")

  return <div className="addPostPage">
     <img src={map} style={{width: '150px', height: '150px', marginLeft:'10%', marginTop:'-5%'}}/>
     <div className="contenuaddPostPage">
    <div className="postForm">
      <form onSubmit={handleSubmit(postInfo)} className="formPost">

          <div className="formPart1">
            <input type="text" placeholder="Titre" {...register('title',{required: true})}/>
            <input type="text" placeholder="Déscription" {...register('description',{required: true})}/>
            <input type="text" placeholder="Prix" {...register('prix',{required: true})}/>
          </div>

          <div className="formPart2">
            {/* <input type="text" placeholder="Catégorie" {...register('categorie',{required: true})}/>
            <input type="text" placeholder="Ville" {...register('ville',{required: true})}/> */}
           

          <select name="Categories" id="Categories" {...register('categorie',{required: true})}>
            <option value="">Catégorie</option>
            <option value="Vêtements">Vêtements</option>
            <option value="Ameublements">Ameublements</option>
            <option value="Décoration">Décoration</option>
            <option value="Electroménager">Electroménager</option>
            <option value="Livres">Livres</option>
            <option value="Vente immo">Vente immo</option>
            <option value="Voitures">Voitures</option>
            <option value="Informatique">Informatique</option>
          </select>

          <select name="ville" id="ville" {...register('ville',{required: true})}>
            <option value="">Ville</option>
            <option value="Ariana">Ariana</option>
            <option value="Béja">Béja</option>
            <option value="Ben Arous">Ben Arous</option>
            <option value="Bizete">Bizete</option>
            <option value="Gabès">Gabès</option>
            <option value="Gafsa">Gafsa</option>
            <option value="Jendouba">Jendouba</option>
            <option value="Kairouan">Kairouan</option>
            <option value="Kasserine">Kasserine</option>
            <option value="Kebili">Kebili</option>
            <option value="Kef">Kef</option>
            <option value="Mahdia">Mahdia</option>
            <option value="Manouba">Manouba</option>
            <option value="Medenine">Medenine</option>
            <option value="Monastir">Monastir</option>
            <option value="Nabeul">Nabeul</option>
            <option value="Sfax">Sfax</option>
            <option value="Sidi bouzid">Sidi bouzid</option>
            <option value="Siliana">Siliana</option>
            <option value="Sousse">Sousse</option>
            <option value="Tataouine">Tataouine</option>
            <option value="Tozeur">Tozeur</option>
            <option value="Tunis">Tunis</option>
            <option value="Zaghouan">Zaghouan</option>           
          </select></div>

          <button>Ajouter</button>

      </form></div></div>
  </div>; 
};

export default AddPost;
