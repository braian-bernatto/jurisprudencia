import React from 'react'

const Filtro = () => {
  return (
    <div className='w-full flex flex-wrap gap-2 justify-center items-center shadow-md py-4 px-1 rounded-xl dark:shadow-gray-800'>
      <span className='flex w-full justify-center items-center'>
        <form
          className='flex justify-center bg-white dark:border-none dark:bg-gray-700 items-center shadow-md border border-opacity-75 border-gray-300 rounded-lg px-2 sm:px-3 py-2 dark:shadow-gray-800'
          onSubmit={e => {
            e.preventDefault()
          }}
        >
          <button aria-label='button' type='submit' className='mr-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
          <input
            type='text'
            className='bg-transparent focus:outline-none'
            onChange={e => {}}
          />
        </form>
      </span>

      <div className='flex justify-center items-center font-semibold p-3 dark:bg-gray-700 shadow-md rounded-xl border max-w-md relative bg-white dark:border-none dark:shadow-gray-800'>
        <label className='mr-4' htmlFor='nroResolucion'>
          N° Resolución:{' '}
        </label>
        <input
          className='w-20 bg-transparent font-bold border-b-4 rounded text-center border-teal-600 focus:outline-none text-lg'
          type='number'
          id='nroResolucion'
          name='nroResolucion'
        />
      </div>

      <div className='flex justify-center items-center font-semibold p-2 dark:bg-gray-700 shadow-md rounded-xl border max-w-xs relative bg-white dark:border-none dark:shadow-gray-800'>
        <label className='mr-4' htmlFor='year'>
          Año:{' '}
        </label>
        <select className='shadow appearance-none rounded p-2 font-bold focus:outline-none focus:shadow-outline text-xs uppercase bg-transparent dark:shadow-teal-500 border-b-4 border-teal-600 text-center'>
          <option
            className='font-bold rounded-md shadow appearance-none'
            value='--Seleccionar--'
          >
            --Seleccionar--
          </option>
          <option
            className='font-bold rounded-md shadow appearance-none'
            value='1'
          >
            2022
          </option>
          <option
            className='font-bold rounded-md shadow appearance-none'
            value='2'
          >
            2021
          </option>
          <option
            className='font-bold rounded-md shadow appearance-none'
            value='3'
          >
            2020
          </option>
        </select>
      </div>

      <div className='flex justify-center items-center font-semibold p-2 dark:bg-gray-700 shadow-md rounded-xl border max-w-sm relative bg-white dark:border-none dark:shadow-gray-800'>
        <label className='mr-4' htmlFor='tipoResolucion'>
          Tipo de Resolución:{' '}
        </label>
        <select className='shadow appearance-none rounded p-2 font-bold focus:outline-none focus:shadow-outline text-xs uppercase bg-transparent dark:shadow-teal-500 border-b-4 border-teal-600'>
          <option
            className='font-bold rounded-md shadow appearance-none'
            value='--Seleccione un tipo--'
          >
            --Seleccionar--
          </option>
          <option
            className='font-bold rounded-md shadow appearance-none'
            value='1'
          >
            Acuerdo y Sentencia
          </option>
          <option
            className='font-bold rounded-md shadow appearance-none'
            value='2'
          >
            Auto Interlocutorio
          </option>
        </select>
      </div>

      <div className='w-full flex justify-center items-center font-bold relative'>
        <button
          aria-label='button'
          type='submit'
          className='flex justify-center items-center border shadow-md rounded-xl p-2 w-36 transition-transform hover:scale-105 bg-white dark:bg-gray-700 dark:border-none dark:shadow-gray-800'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Filtro
