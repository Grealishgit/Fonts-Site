import React from 'react'

const Navbar = () => {
    return (
        <nav className="p-4 w-full fixed top-0 left-0 flex justify-between items-center bg-transparent">
            <div>
                <h1 className="text-4xl text-[#a858f0] font-bold">Resume<span className='font-extrabold text-white'>roo</span></h1>
            </div>
            <div>
                <ul className="md:flex hidden space-x-6">
                    <li className="hover:text-[#a858f0] text-white text-xl  font-medium cursor-pointer">Home</li>
                    <li className="hover:text-[#a858f0] text-white text-xl font-medium  cursor-pointer">About</li>
                    <li className="hover:text-[#a858f0] text-white text-xl font-medium cursor-pointer">Pricing</li>
                    <li className="hover:text-[#a858f0] text-white text-xl font-medium cursor-pointer">Enterprise</li>
                    <li className="hover:text-[#a858f0] text-white text-xl font-medium cursor-pointer">Testimonial</li>
                </ul>
            </div>
            <div>
                <button className="bg-[#a858f0] text-lg text-white font-medium text-center cursor-pointer px-6 py-3 rounded-full hover:bg-[#9b6ef0]">
                    Get Started</button>
            </div>
        </nav>
    )
}

export default Navbar