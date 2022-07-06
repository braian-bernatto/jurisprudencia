import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfDocument = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div className='min-w-full flex flex-col justify-center items-center top-0 bottom-0 left-0 z-50 min-h-screen fixed overflow-auto'>
      <span className='fixed w-full bg-white opacity-50 min-h-screen'></span>
      <Document
        file={'./uploads/react.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
        className='rounded-lg shadow-md relative flex justify-center pdf-document'
      >
        <Page
          pageNumber={pageNumber}
          className='rounded-lg overflow-hidden'
          scale={4}
        />
        <div className='buttons absolute bottom-5 rounded-full shadow-md bg-white dark:bg-gray-700 opacity-0 flex transition gap-1 h-10'>
          <button className='font-bold w-9 flex justify-center items-center rounded-l-full hover:bg-gray-300 dark:hover:bg-gray-800 text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
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
            className='font-bold w-9 flex items-center justify-center rounded-r-full hover:bg-gray-300 dark:hover:bg-gray-800 text-center'
            onClick={() => {
              pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
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
