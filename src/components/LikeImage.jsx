import React from "react";
import HOC from "./HOC";

 function LikeImage(props) {
  const { likeImageCounter, handleLikeImageCount} = props 

  return (
    <div>
      <button onClick={handleLikeImageCount}>Like Image - {likeImageCounter}</button>
    </div>
  )
}

export default HOC(LikeImage)