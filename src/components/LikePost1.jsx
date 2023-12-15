import React, { useState } from 'react'

export default function LikePost1(props) {
    const {count, handleCount} = props
  return (
    <div>
      <button onClick={handleCount}>Like Post1 - {count}</button>
    </div>
  )
}
