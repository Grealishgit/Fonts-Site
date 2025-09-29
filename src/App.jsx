import React from 'react'
import bg from '../src/assets/font-taste.jpg'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gray-100'
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='text-center bg-black/30 backdrop-blur-xs bg-opacity-40 p-10 rounded'>
        <h1 className='text-white font-bold text-[90px] capitalize'>Welcome to Paradise!</h1>
        <p className='text-lg text-white  bg-opacity-50 rounded'>Where the beauty of nature meets the elegance of design.</p>
      </div>
    </div>
  )
}

export default App