import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='px-6  md:px-0 mt-12 text-white/70 py-8 container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
            <h1>Ramkumar Raghuwanshi</h1>
            <div className='flex space-x-6 mt-4'>
                <a href='https://www.linkedin.com/in/ramkumarraghuwanshi/' className='hover:text-gray-300'>
                    <FaLinkedin size={24} />
                </a>
                <a href='https://x.com/Ramkumar0402' className='hover:text-gray-300'>
                    <FaTwitter size={24} />
                </a>
               
            </div>
        </div>
    )
}

export default Footer