import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='py-36 px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[20%]'>
        <h1 className='font-bold text-3xl'>{title}</h1>
        <h2 className='py-6 text-lg w-1/4'>{overview}</h2>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 mx-2 text-xl rounded-lg'> ▶️ Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 text-xl rounded-lg'> ℹ️ More info</button>
         
        </div>
    </div>
  )
}

export default VideoTitle