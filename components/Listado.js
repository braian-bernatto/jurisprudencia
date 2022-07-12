import Link from 'next/link'
import React, { useContext } from 'react'
import appContext from '../context/app/appContext'

const Listado = () => {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const { modalPdf, urlPdf, openModalPdf, urlPdfHandler } = AppContext

  return (
    <div className='overflow-y-auto overflow-x-auto overflow-hidden rounded-md border dark:border-gray-700 shadow-md w-full lg:w-3/4 dark:shadow-gray-800'>
      <table className='w-full border-collapse table-auto whitespace-no-wrap bg-white dark:bg-gray-700 text-xs'>
        <thead className='bg-gray-200 dark:bg-gray-700 sticky top-0 z-10'>
          <tr>
            <th className='p-2 font-bold'>PDF</th>
            <th className='p-2 text-left font-bold'>Tipo Res.</th>
            <th className='p-2 text-left font-bold'>N° Res.</th>
            <th className='p-2 text-left font-bold'>Fecha Res.</th>
            <th className='p-2 text-left font-bold'>Sala</th>
            <th className='p-2 text-left font-bold'>Materia</th>
            <th className='p-2 text-left font-bold'>Acción Resuelta</th>
            <th className='p-2 text-left font-bold'>Preopinante</th>
            <th className='p-2 text-left font-bold'>Resultado</th>
            <th className='p-2 text-left font-bold'>Tribunal o Juzgado</th>
            <th className='p-2 text-left font-bold'>Análisis</th>
          </tr>
        </thead>
        <tbody>
          <tr className='dark:bg-gray-600 border-b'>
            <td className='cursor-pointer transition text-center'>
              <div className='flex justify-around gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-9 w-9 hover:scale-125 hover:text-teal-600'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  onClick={() => {
                    urlPdfHandler('./uploads/git.pdf')
                    openModalPdf(!modalPdf)
                  }}
                >
                  <path d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z' />
                  <path
                    fillRule='evenodd'
                    d='M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <a href='./uploads/git.pdf' download={true}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-9 w-9 hover:scale-125 hover:text-teal-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
                    />
                  </svg>
                </a>
              </div>
            </td>
            <td className='pl-2'>Auto Interlocutorio</td>
            <td className='pl-2'>144</td>
            <td className='pl-2'>01/02/2022</td>
            <td className='pl-2'>1</td>
            <td className='pl-2'>Electoral</td>
            <td className='pl-2'>Se resulve algo interesante</td>
            <td className='pl-2'>Braian Bernatto</td>
            <td className='pl-2'>Hace lugar</td>
            <td className='pl-2'>TSJE</td>
            <td className='pl-2'>Un análisis interesante</td>
          </tr>
          <tr className='dark:bg-gray-600 border-b'>
            <td className='cursor-pointer transition text-center'>
              <div className='flex justify-around gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-9 w-9 hover:scale-125 hover:text-teal-600'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  onClick={() => {
                    urlPdfHandler('./uploads/clas.pdf')
                    openModalPdf(!modalPdf)
                  }}
                >
                  <path d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z' />
                  <path
                    fillRule='evenodd'
                    d='M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <a href='./uploads/clas.pdf' download={true}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-9 w-9 hover:scale-125 hover:text-teal-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
                    />
                  </svg>
                </a>
              </div>
            </td>
            <td className='pl-2'>Auto Interlocutorio</td>
            <td className='pl-2'>144</td>
            <td className='pl-2'>01/02/2022</td>
            <td className='pl-2'>1</td>
            <td className='pl-2'>Electoral</td>
            <td className='pl-2'>Se resulve algo interesante</td>
            <td className='pl-2'>Braian Bernatto</td>
            <td className='pl-2'>Hace lugar</td>
            <td className='pl-2'>TSJE</td>
            <td className='pl-2'>Un análisis interesante</td>
          </tr>
          <tr className='dark:bg-gray-600'>
            <td className='cursor-pointer transition text-center'>
              <div className='flex justify-around gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-9 w-9 hover:scale-125 hover:text-teal-600'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  onClick={() => {
                    urlPdfHandler('./uploads/react.pdf')
                    openModalPdf(!modalPdf)
                  }}
                >
                  <path d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z' />
                  <path
                    fillRule='evenodd'
                    d='M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <a href='./uploads/react.pdf' download={true}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-9 w-9 hover:scale-125 hover:text-teal-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
                    />
                  </svg>
                </a>
              </div>
            </td>
            <td className='pl-2'>Auto Interlocutorio</td>
            <td className='pl-2'>144</td>
            <td className='pl-2'>01/02/2022</td>
            <td className='pl-2'>1</td>
            <td className='pl-2'>Electoral</td>
            <td className='pl-2'>Se resulve algo interesante</td>
            <td className='pl-2'>Braian Bernatto</td>
            <td className='pl-2'>Hace lugar</td>
            <td className='pl-2'>Tribunal Electoral Capital</td>
            <td className='pl-2'>Un análisis interesante</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Listado
