import React from 'react'

const Entidad = () => {
  return (
    <div className='rounded-md bg-white dark:bg-gray-700 shadow-lg p-3 max-w-xs flex flex-col items-center justify-center gap-1 text-xs cursor-pointer hover:scale-110 transition overflow-x-auto'>
      <span className='rounded-full border-2 p-1 border-teal-500 shadow'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
        </svg>
      </span>
      <h1 className='border font-bold rounded-md px-3 shadow-md dark:border-none dark:bg-gray-600'>
        TSJE
      </h1>
      <span className='w-full border-b'></span>
      <div className='w-full text-xs flex flex-col gap-6 mt-5'>
        <div className='relative flex flex-col justify-center items-center'>
          <h2 className='absolute -top-4 dark:-top-3.5 shadow border dark:border-none rounded-t bg-white dark:bg-white dark:text-gray-700 px-1 z-0'>
            Presidente
          </h2>
          <span className='font-semibold shadow border dark:border-none rounded-full px-2 z-10 bg-white dark:bg-gray-600'>
            Braian Bernatto
          </span>
        </div>

        <div className='relative flex flex-col justify-center items-center'>
          <h2 className='absolute -top-4 dark:-top-3.5 shadow rounded-t border dark:border-none bg-white dark:bg-white dark:text-gray-700 px-1 z-0'>
            Vice Presidente
          </h2>
          <span className='font-semibold shadow border dark:border-none rounded-full px-2 z-10 bg-white dark:bg-gray-600'>
            Fulano Mengano
          </span>
        </div>

        <div className='relative flex flex-col justify-center items-center'>
          <h2 className='absolute -top-4 dark:-top-3.5 shadow rounded-t border dark:border-none bg-white px-1 z-0 dark:bg-white dark:text-gray-700'>
            Vocal
          </h2>
          <span className='font-semibold shadow border dark:border-none rounded-full px-2 z-10 bg-white dark:bg-gray-600'>
            Fer Locura
          </span>
        </div>
      </div>
    </div>
  )
}

export default Entidad
