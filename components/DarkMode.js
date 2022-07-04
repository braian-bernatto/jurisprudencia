import React from 'react'
import { useTheme } from 'next-themes'

const DarkMode = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex justify-end items-center space-x-2 relative'>
      <span className='text-xs font-extralight'>Light </span>
      <div>
        <input
          type='checkbox'
          name=''
          id='checkbox'
          className='hidden'
          checked={theme === 'dark' ? true : false}
          onChange={e => {
            e.target.checked ? setTheme('dark') : setTheme('light')
          }}
        />
        <label htmlFor='checkbox' className='cursor-pointer'>
          <div className='w-9 h-5 flex items-center bg-gray-300 rounded-full p2'>
            <div className='w-4 h-4 bg-white rounded-full shadow switch-ball'></div>
          </div>
        </label>
      </div>
      <span className='text-xs font-semibold'>Dark</span>
    </div>
  )
}

export default DarkMode
