import React, { useState, useEffect } from "react";
import { getPosts } from "../slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import BtnaddToCard from "../components/BtnaddToCard";
import BtnaddToFav from "../components/BtnaddToFav";

const Recherche = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { loading, postList, errors } = useSelector((state) => state.post);

  const listeOriginal = postList;

  const [list, setList] = useState([]);

  const handleSearch = (title) => {
    var newList = listeOriginal.filter((item) =>
      item.title.toUpperCase().includes(title.toUpperCase())
    );
    setList(newList);
  };

  return (
    <div className="recherchePage">
      <div className="recherchePageBody">
        <input
          type="text"
          placeholder="Que cherchez-vous..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {/* <button className="rechercheButton">Rechercher</button> */}
      <div className="productsPage" style={{ marginTop: "5%" }}>
        <div className="allPosts">
          {list.length
            ? list.map((post) => (
                <div
                  key={post._id}
                  className="postallpostC"
                >
                  <div className="entetePost">
                    <img src={post.owner.profilePic} />
                    <h4>{post.owner.name}</h4>
                  </div>
                  <hr className="hrP" />
                  <img
                    className="imgPost"
                    src={post.postPic}
                    style={{ paddingBottom: "7%", paddingTop: "3%" }}
                  />
                  <br />
                  <h6 className="titlePost">{post.title}</h6>
                  <br />
                  <h6 className="descPost">{post.description}</h6>
                  <br />
                  <h6 className="prixPost">{post.prix} DT</h6>
                  <br />
                  <h6 className="villePost">{post.ville}</h6>
                  <br />
                  <BtnaddToCard props={post} />
                  <BtnaddToFav className="btnfav" props={post} />
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="productsPage" style={{ marginTop: "-10%" }}>
        <div className="allPosts">
          {postList &&
            postList.map((post) => (
              <div
                key={post._id}
                className="postallpostC"
                style={{ width: "285px" }}
              >
                <div className="entetePost">
                  <img src={post.owner.profilePic} />
                  <h4>{post.owner.name}</h4>
                </div>
                <hr className="hrP" />
                <img
                  className="imgPost"
                  src={post.postPic}
                  style={{ paddingBottom: "7%", paddingTop: "3%" }}
                />
                <br />
                <h6 className="titlePost">{post.title}</h6>
                <br />
                <h6 className="descPost">{post.description}</h6>
                <br />
                <h6 className="prixPost">{post.prix} DT</h6>
                <br />
                <h6 className="villePost">{post.ville}</h6>
                <br />
                <BtnaddToCard props={post} />
                <BtnaddToFav className="btnfav" props={post} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recherche;
