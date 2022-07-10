import React, { useContext } from 'react'
import appContext from '../context/app/appContext'

const PdfViewer = () => {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const { modalPdf, openModalPdf } = AppContext

  return (
    <div className='fixed min-w-full flex flex-col justify-center items-center top-0 bottom-0 left-0 z-40 min-h-screen  overflow-auto p-3 sm:p-20'>
      <span className='fixed w-full bg-gray-400 opacity-95 min-h-screen'></span>
      <iframe
        src='/uploads/clas2.pdf'
        className='w-full h-screen rounded-xl shadow-2xl z-40 relative'
      ></iframe>
      <button
        className='rounded-full bg-white dark:bg-gray-700 p-2 absolute top-5 z-50 shadow-md opacity-40 hover:opacity-100 transition'
        onClick={() => {
          openModalPdf(!modalPdf)
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  )
}

export default PdfViewer
