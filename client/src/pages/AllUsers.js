import {useState} from 'react'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { deleteUserWithID, getUsers } from '../slices/userSlice';
import supp from '../images/delete.png'
import glass from '../images/glass.png'

const AllUsers = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUsers())
      }, []);
      const {loading, userList, errors}  = useSelector((state)=> state.user);
      const listeOriginal = userList
      const [email, setemail] = useState()
      const [list, setList] = useState([])

      const handleSearch = (email) => {
        var newList = listeOriginal.filter((item)=> item.email === email) 
        setList(newList)
      }

  return (
    <div style={{paddingTop:"5%"}} className="productsPage">

{/* <input type="text" placeholder="Taper l'email à chercher" type="text"
                       onChange={(e)=>setemail(e.target.value)}/>
        <button onClick={()=>{handleSearch(email)}}>search</button>   
        
        <div className="allPosts">
    {list && list.map(user=>(
        <div key={user._id} className="userPost">
            <div className="entetePost">
            <img src={user.profilePic}/>
            <h4>{user.name}</h4> </div>
            <hr /><br/><br/>
            <div className="blockInfo">
            <h6 className="descPost"><h4>E-mail : </h4>{user.email}</h6><br/>
            <h6 className="descPost"><h4>Adresse: </h4>{user.adress}</h6><br/>
            <h6 className="descPost"><h4>Numéro de téléphone :</h4>{user.phoneNumber}</h6><br/></div>

        <button style={{border:"none", background:"transparent", marginTop:"5%"}} className="btnuserPost"
          onClick={()=>dispatch(deleteUserWithID(user._id))}>
          <img src={supp}/>
        </button>
        </div>
    ))}

    </div> */}




  
   
    <h1 className="titrePost">Liste des utilisateurs</h1>
    {/* {loading && <p>loading...</p>}
    {errors && <p>{errors}</p>} */}
 <input className="SD" type="text" placeholder="Taper l'email à chercher" type="text"
                       onChange={(e)=>handleSearch(e.target.value)}/>
 {/* <button onClick={()=>{handleSearch(email)}}><img src={glass}/></button>    */}
{list && 
 <div className="allUsersS">
    <table>
{list && list.map(user=>(
        <tr key={user._id} className="userPost">
            <td className="entetePost">
            <img src={user.profilePic} className="profilePic"/>
            <h4>{user.name}</h4> 
            </td>
            <td>{user.email}</td>
            <td>{user.adress}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <button style={{border:"none", background:"transparent", marginTop:"5%"}} className="btnuserPost"
                onClick={()=>dispatch(deleteUserWithID(user._id))}>
                <img src={supp}/>
               </button>
            </td>
        
          </tr> 
))}
  
  </table> 
   

    </div>}

    <div className="allUsers">
    <table>
  <tr>
    <th>Nom</th>
    <th>E-amil</th>
    <th>Adresse</th>
    <th>Numéro de téléphone</th>
    <th></th>
  </tr>
{userList && userList.map(user=>(
        <tr key={user._id} className="userPost">
            <td className="entetePost">
            <img src={user.profilePic} className="profilePic"/>
            <h4>{user.name}</h4> 
            </td>
            
          
            <td>{user.email}</td>
            <td>{user.adress}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <button style={{border:"none", background:"transparent", marginTop:"5%"}} className="btnuserPost"
                onClick={()=>dispatch(deleteUserWithID(user._id))}>
                <img src={supp}/>
               </button>
            </td>
        
          </tr>
))}
  
  </table> 
   

    </div>
 </div> )
}

export default AllUsers