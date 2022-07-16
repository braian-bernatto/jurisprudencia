import React from 'react'

const Selected = () => {
  return (
    <span className='rounded-full p-1 bg-white dark:text-gray-700 shadow-md absolute -top-6 border transition'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
      </svg>
    </span>
  )
}

export default Selected
