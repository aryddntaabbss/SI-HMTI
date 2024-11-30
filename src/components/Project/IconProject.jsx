import React from 'react'
import { Link } from 'react-router-dom'

const IconProject = ({ title, children, kategori }) => {
  return (
    <div className='max-w-24'>
      <div className='bg-white h-16 w-16 flex justify-center items-center text-good-blue rounded-lg mx-auto'>
        {children}
      </div>
      <p className='hidden md:block text-center text-sm py-2 font-medium'>{title}</p>
    </div>
  )
}

export default IconProject