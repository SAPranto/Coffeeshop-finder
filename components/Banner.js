import React from 'react'

const Banner = (props) => {
  return (
    <div className='hero'>
        <h1><span className='span'>Coffee Shop</span> Finder</h1>
        <p>Discover your local coffee shops</p>
        <button className='button' onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
  )
} 

export default Banner;