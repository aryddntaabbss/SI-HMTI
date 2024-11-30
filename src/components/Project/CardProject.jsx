import React from 'react'
import { Link } from 'react-router-dom'

const CardProject = ({title, image, category, link=''}) => {
  return (
    <div className='flex gap-3 items-center bg-white dark:bg-blue-950 p-2 rounded-xl'>
      <div className='w-24 h-24 rounded-lg overflow-hidden'>
        <img src={image} alt="project-image" className='w-full h-full object-cover' />
      </div>
      <div>
        <Link to={link} className='font-semibold md:text-base'>{title}</Link>
        <p className='text-sm text-good-blue font-medium py-2'>{category}</p>
      </div>
    </div>
  )
}

export default CardProject