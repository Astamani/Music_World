import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className='bg-black text-gray-500 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap8 px-4 sm:px-6 lg:px-8'>
                <div>
                    <h2 className='text-white text-2xl font-semibold mb-4'>About Us</h2>
                    <p className='mb-4'>Music is the encient and the most usefull for making humans calm it the best thing which will improve concentration and focus must give it a chance</p>
                </div>
                <div>
                    <h2 className='text-white text-2xl font-semibold mb-4'>Quick links</h2>
                    <ul>
                        <li><a href="#" className='hover:text-white transition-colors duration-300'>Home</a></li>
                        <li><a href="#" className='hover:text-white transition-colors duration-300'>About</a></li>
                        <li><a href="#" className='hover:text-white transition-colors duration-300'>Courses</a></li>
                        <li><a href="#" className='hover:text-white transition-colors duration-300'>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-2xl font-semibold mb-4'>Follow Us</h2>
                    <ul>
                        <li><a href="#" className='hover:text-white transition-colors duration-300'>Facebook</a></li>
                        <li><a href="#" className='hover:text-white transition-colors duration-300'>Twiter</a></li>
                        <li><a href="#" className='hover:text-white transition-colors duration-300'>Instagram</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-2xl font-semibold mb-4'>Contact Us</h2>
                    <p> New Vidi</p>
                    <p>Gharkhul</p>
                    <p> Khumbhari,Solapur</p>
                </div>
            </div>
            <p className='text-center text-xs pt-8'>&copy; Music Schools All Rights Reserved.</p>
        </footer>
    )
}
