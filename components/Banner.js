import React from 'react'

const Banner = (props) => {
  return (
    <>
    <div className='flex items-center justify-center h-screen bg-center bg-cover custom-img'>
    <div>
        <h1 className='text-5xl font-bold text-white'><span className='span'>Coffee Shop</span> Finder</h1>
        <p className='py-4 text-2xl font-semibold text-white p-1'>Discover your local coffee shops</p>
        <button className='mt-2 px-5 py-3 border-2 bg-blue-800/90 text-white text-xl rounded-full shadow-xl hover:bg-inherit' onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
    </div>
    </>
  )
} 

export default Banner;