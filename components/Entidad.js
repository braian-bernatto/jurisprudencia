import React from 'react'

const Entidad = () => {
  return (
    <div className='rounded-md bg-white border shadow-md p-3 max-w-xs flex flex-col items-center justify-center gap-3'>
      <span className='rounded-full border-2 p-1 border-teal-500'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
        </svg>
      </span>
      <h1 className='border-2 rounded-full px-3'>TSJE</h1>
      <div className='w-full text-xs'>
        <div className=''>
          Presidente: <span className='font-semibold'>Braian Bernatto</span>
        </div>
        <div>
          Vice Presidente: <span className='font-semibold'>Fulano Mengano</span>
        </div>
        <div>
          Vocal: <span className='font-semibold'>Fer Locura</span>
        </div>
      </div>
    </div>
  )
}

export default Entidad
