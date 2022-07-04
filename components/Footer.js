import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-wrap justify-center items-center mt-5'>
      <span className='text-xs font-bold'>
        &copy; {new Date().getFullYear()} - Bernatto
      </span>
    </footer>
  )
}

export default Footer
