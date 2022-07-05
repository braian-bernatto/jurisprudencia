import Head from 'next/head'
import { useContext, useState } from 'react'
import Entidad from '../components/Entidad'
import Filtro from '../components/Filtro'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Listado from '../components/Listado'
import appContext from '../context/app/appContext'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function Home() {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const { darkMode, darkModeOn } = AppContext

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div className='container mx-auto'>
      <Head>
        <title>Jurisprudencias | TSJE</title>
        <meta
          name='app de seguimiento de jurisprudencias del tsje'
          content='Generated by create next app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='flex flex-col w-full justify-center items-center mt-5 gap-4'>
        <div className='flex flex-wrap gap-3 justify-center items-center'>
          <Entidad />
          <Entidad />
          <Entidad />
        </div>
        <Filtro />
        <div className='w-full flex justify-center px-5 sm:px-0'>
          <Listado />
        </div>

        <div className='w-full flex flex-col justify-center items-center relative overflow-x-auto px-5'>
          <Document
            file={'./uploads/git.pdf'}
            onLoadSuccess={onDocumentLoadSuccess}
            className='rounded-xl overflow-hidden overflow-x-auto shadow-md w-full sm:w-auto'
          >
            <Page pageNumber={pageNumber} />
          </Document>

          <div className='absolute top-5 rounded-full shadow-md bg-white flex gap-1'>
            <button className='bg-white flex flex-col items-center font-bold w-5 rounded-l-full hover:bg-gray-300'>
              ‹
            </button>
            <span className='bg-white'>
              {pageNumber} de {numPages}
            </span>
            <button className='bg-white flex flex-col items-center font-bold w-5 rounded-r-full hover:bg-gray-300'>
              ›
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
