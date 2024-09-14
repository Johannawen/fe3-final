import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || []
    const newFav = { name, username, id }
    if (!favs.some(fav => fav.id === id)) {
      localStorage.setItem('favs', JSON.stringify([...favs, newFav]))
    }
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
