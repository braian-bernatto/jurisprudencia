import React, { useContext, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import appContext from '../context/app/appContext'

const PdfViewer = () => {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const { modalPdf, openModalPdf } = AppContext

  const viewer = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    import('@pdftron/pdfjs-express-viewer').then(() => {
      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: '/uploads/clas.pdf',
          licenseKey: 'HNU9U4B0OSf7nNoYYLWR'
        },
        viewer.current
      ).then(instance => {
        // now you can access APIs through the WebViewer instance
        const { Core } = instance
        instance.setTheme(theme)

        // adding an event listener for when a document is loaded
        Core.documentViewer.addEventListener('documentLoaded', () => {
          console.log('document loaded')
        })

        // adding an event listener for when the page number has changed
        Core.documentViewer.addEventListener(
          'pageNumberUpdated',
          pageNumber => {
            console.log(`Page number is: ${pageNumber}`)
          }
        )
      })
    })
  }, [])

  return (
    <div className='min-w-full flex flex-col justify-center items-center top-0 bottom-0 left-0 z-40 min-h-screen fixed overflow-auto p-4 sm:p-10'>
      <span className='fixed w-full bg-gray-400 opacity-90 min-h-screen'></span>
      <button
        className='z-50 rounded-full p-4 bg-white dark:bg-gray-700 shadow-md absolute scale-75 sm:scale-100 top-0 sm:top-2 opacity-50 hover:opacity-100 transition'
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
      <div
        className='webviewer z-40 h-screen w-full rounded-xl mt-5 sm:mt-0'
        ref={viewer}
      ></div>
    </div>
  )
}

export default PdfViewer
