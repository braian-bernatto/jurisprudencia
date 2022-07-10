import React from 'react'
import DarkMode from './DarkMode'

const Header = () => {
  return (
    <div className='flex w-full items-center justify-between px-2 py-1 border-b dark:border-none bg-white dark:bg-gray-700 dark:shadow-gray-800 rounded-b shadow-md sticky top-0 z-30'>
      <span className='rounded-full border-2 p-1 border-teal-500'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
          />
        </svg>
      </span>
      <DarkMode />
    </div>
  )
}

export default Header
