import React from 'react'

const Banner = (props) => {
  return (
    <>
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-no-repeat custom-img'>
    <div>
        <h1 className='text-5xl font-bold text-white'><span className='span'>Coffee Shop</span> Finder</h1>
        <p className='py-4 text-2xl font-semibold text-white p-1'>Discover your local coffee shops</p>
        <button className='ml-1 px-2 py-2 border-2 bg-blue-300/60' onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
    </div>
    </>
  )
} 

export default Banner;