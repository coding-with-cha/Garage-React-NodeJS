{/* <div className="productsPage">
    {loading && <p>loading...</p>}
    {errors && <p>{errors}</p>}
    <div className="allPosts">
    {postList && postList.map(post=>(
      <div key={post._id} className="post"> 
        <div className="entetePost">
          <img src={post.owner.profilePic}/>
          <h4>{post.owner.name}</h4> 
        </div>
        <h6 className="titlePost" style={{marginTop:"7%"}}>{post.title}</h6>
        <h6 className="descPost" style={{marginTop:"10%"}}>{post.description}</h6>
        <h6 className="prixPost" style={{marginTop:"13%"}}>{post.prix} DT</h6>
        <h6 className="villePost" style={{marginTop:"13%"}}>{post.ville} DT</h6>

        <button style={{border:"none", background:"transparent", marginTop:"5%"}} onClick={()=>{testid(post._id, post.title,
           post.description,post.categorie, post.ville, post.prix)}}>
          <img src={edit} style={{width:"20px", height:"20px"}}/>
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
        
        <button style={{border:"none", background:"transparent", marginTop:"5%"}}
         onClick={()=>dispatch(deletePostsWithID(post._id))}>
          <img src={supp} style={{width:"20px", height:"20px"}}/>
        </button>
        
      </div>
    ))}</div>
  </div>  */}