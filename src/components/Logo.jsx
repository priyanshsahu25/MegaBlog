import React from 'react'
import image from '../assets/logo2.png'

function Logo({width = '100px',height='100px'}) {
  return (
    <img src={image} width={width} height={height} />
  )
}

export default Logo