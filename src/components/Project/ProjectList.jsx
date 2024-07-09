import React from 'react'

const ProjectList = ({}) => {
  return (
    <div className='pt-4 pb-12 grid grid-cols-2 md:grid-cols-3 gap-y-7'>
      <div>
        <div className='w-32 h-32 md:w-72 md:h-40 bg-cover bg-center rounded-xl my-3' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}></div>
        <h3 className='font-medium text-sm md:text-base'>Ini Judul Projectnya</h3>
      </div>
      <div>
        <div className='w-32 h-32 md:w-72 md:h-40 bg-cover bg-center rounded-xl my-3' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}></div>
        <h3 className='font-medium text-sm md:text-base'>Ini Judul Projectnya</h3>
      </div>
      <div>
        <div className='w-32 h-32 md:w-72 md:h-40 bg-cover bg-center rounded-xl my-3' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}></div>
        <h3 className='font-medium text-sm md:text-base'>Ini Judul Projectnya</h3>
      </div>
    </div>
  )
}

export default ProjectList