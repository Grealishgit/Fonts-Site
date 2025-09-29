import React from 'react'
import bg from '../assets//font-taste.jpg'

const Home = () => {
    return (
        <div className='flex flex-col w-full min-h-screen items-center justify-center'
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <h1 className='text-5xl md:text-7xl font-bold text-white mb-4'>Welcome to Resumeroo</h1>
                <p className='text-xl md:text-2xl text-white mb-8'>Crafting Perfect Resumes with AI</p>
                <button className='bg-[#a858f0] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#9b6ef0] transition duration-300'>Get Started</button>
            </div>
        </div>
    )
}

export default Home