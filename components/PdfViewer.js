import React, { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

const PdfViewer = () => {
  const viewer = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    import('@pdftron/pdfjs-express-viewer').then(() => {
      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: '/uploads/react.pdf',
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
    <div className='min-w-full flex flex-col justify-center items-center top-0 bottom-0 left-0 z-50 min-h-screen fixed overflow-auto'>
      <span className='fixed w-full bg-white opacity-50 min-h-screen'></span>
      <div className='webviewer z-50 h-screen w-full m-10' ref={viewer}></div>
    </div>
  )
}

export default PdfViewer
