import React, { useState } from 'react'

export default function LikeImage1(props) {
    const {count, handleCount} = props

  return (
    <div>
      <button onClick={handleCount}>Like Image1 - {count}</button>
    </div>
  )
}
