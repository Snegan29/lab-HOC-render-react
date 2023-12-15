
import React, { useState } from 'react'

function RenderProps(props) {
    const {render} = props
    const [ likeImageCounter, setLikeImageCounter] = useState(0)
    const handleLikeImageCounter =() =>{
        setLikeImageCounter(likeImageCounter + 1)
    }
  return (
    <div>
        Hello {render(likeImageCounter, handleLikeImageCounter)}
    </div>
  )
}

export default RenderProps