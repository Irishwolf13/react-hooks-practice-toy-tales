import React, { useEffect, useState } from "react";

function ToyCard({ name, image, likes, id }) {
  const [numbLikes, setNumbLikes] = useState( likes )

  const handleLikesClicked = () => {
    setNumbLikes(prev => parseInt(prev)+1 )
  }
  useEffect(() => {
    fetch(`http://localhost:3001/toys/${ id }`, {
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify( {key: id, likes: numbLikes } )
    })
  },[numbLikes, id]) // Ask why I need the ID here? ************************************

  const handleDonateClicked = (event) => {
    //Going to create a fetch request here to DELETE item and refresh DOM.
    fetch(`http://localhost:3001/toys/${ id }`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => event.target.parentElement.remove())
  }
  
  return (
    <div className="card">
      <h2>{ name }</h2>
      <img
        src={ image ? image : null }
        alt={ name }
        className="toy-avatar"
      />
      <p>{numbLikes > 0 ? numbLikes : 0 } Likes </p>  {/* Added Logic so you can't have a negative number */}
      <button 
        className="like-btn"
        onClick={ handleLikesClicked }
        >Like {"<3"}</button>
      <button onClick={ handleDonateClicked } className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

// This is the image that was messed up
// https://static.wikia.nocookie.net/pixar/images/a/a8/Rex_%28Toy_Story%29.png/revision/latest/scale-to-width-down/377?cb=20210221010941