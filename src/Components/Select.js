import React from 'react'
import {Link} from 'react-router-dom'

export const Select = () => {
  return (
    <>

    <div className='flex md:gap-48 gap-x-20 justify-center pt-2'>
    <Link to = "/" className='rounded-xl bg- bg-gradient-to-r from-teal-400 to-blue-500 w-fit p-2 ' >Unsplash</Link>
    <Link to = "/Pixabay" className='rounded-xl bg- bg-gradient-to-r from-teal-400 to-blue-500 w-fit p-2 ' >Pixabay</Link>
    </div>
    </>
  )
}
