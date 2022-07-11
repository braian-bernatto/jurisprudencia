import { useContext, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import appContext from '../context/app/appContext'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
import Spinner from './Spinner'

const PdfDocument = () => {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const { modalPdf, urlPdf, openModalPdf } = AppContext

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div className='fixed min-w-0 w-full top-0 bottom-0 left-0 z-50 min-h-screen overflow-auto py-10'>
      <span className='fixed w-full bg-white dark:bg-gray-700 opacity-95 min-h-screen top-0'></span>
      <span className='w-full flex items-center justify-center'>
        <button
          className='z-50 rounded-full p-3 bg-white dark:text-gray-700 shadow-md absolute top-1 sm:top-2 opacity-50 border hover:opacity-100 transition'
          onClick={() => {
            openModalPdf(!modalPdf)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
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
      </span>
      <Document
        file={urlPdf}
        onLoadSuccess={onDocumentLoadSuccess}
        className='rounded-xl relative flex justify-center pdf-document'
        loading={Spinner}
        noData={'No existe PDF asignado'}
      >
        <Page
          pageNumber={pageNumber}
          className='rounded-2xl overflow-hidden shadow-2xl border dark:border-none'
          scale={4}
          renderTextLayer={false}
          width='200'
        />
        <div className='buttons absolute bottom-5 rounded-full shadow-md bg-white dark:bg-gray-700 opacity-0 flex transition gap-1 h-12'>
          <button className='font-bold w-12 flex justify-center items-center rounded-l-full hover:bg-gray-300 dark:hover:bg-gray-800 text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
              onClick={() => {
                pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
              }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <div className='flex justify-center items-center'>
            {pageNumber} de {numPages}
          </div>
          <button
            className='font-bold w-12 flex items-center justify-center rounded-r-full hover:bg-gray-300 dark:hover:bg-gray-800 text-center'
            onClick={() => {
              pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </Document>
    </div>
  )
}

export default PdfDocument
