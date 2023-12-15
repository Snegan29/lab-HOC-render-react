import React from "react";
import HOC from "./HOC";

 function LikePost(props) {
  const { likeImageCounter, handleLikeImageCount} = props 
  return (
    <div>
      <button onClick={handleLikeImageCount}> Like Post - {likeImageCounter}</button>
    </div>
  )
}

export default HOC(LikePost)