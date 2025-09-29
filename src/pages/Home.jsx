import React from 'react'
import bg from '../assets//font-taste.jpg'

const Home = () => {
    return (
        <div className='flex flex-col w-full min-h-screen items-center justify-center'
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex flex-col md:flex-row items-center justify-center p-15 w-full'>
                <div className='flex-1'>
                    <h1 className='text-5xl md:text-8xl font-bold text-white mb-4'>Quick Resume <br />Creation Using <br />Smart AI</h1>
                    <p className='text-xl md:text-xl text-white mb-8'>Empower developers to create intlligent, fast, and scalable websites using <br />
                        cutting-edgedAI tools designed for modern web development.</p>

                    <div className='flex space-x-6 mb-8'>
                        <div className='bg-white/15 rounded-full backdrop-blur-md px-4 py-1'>
                            <p className='text-white'>Instant Results</p>
                        </div>
                        <div className='bg-white/15 rounded-full backdrop-blur-md px-4 py-1'>
                            <p className='text-white'>Professional</p>
                        </div>
                        <div className='bg-white/15 rounded-full justify-center items-center backdrop-blur-md px-4 py-1'>
                            <p className='text-white text-center'>Automated Writing</p>
                        </div>
                    </div>


                    <div className='space-x-4'>
                        <button className='bg-white rounded-full text-black px-8 cursor-pointer py-3 
                     text-lg hover:bg-[#9b6ef0] hover:text-white transition duration-300'>
                            Get Started
                        </button>
                        <button className='bg-transparent rounded-full border border-white cursor-pointer text-white px-8 py-3 
                     text-lg  transition duration-300'>
                            Play Demo
                        </button>
                    </div>

                </div>

                <div className='flex-1'>

                </div>
            </div>

        </div>
    )
}

export default Home