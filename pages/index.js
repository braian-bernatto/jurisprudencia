import Head from 'next/head'
import { useContext } from 'react'
import appContext from '../context/app/appContext'
import Entidad from '../components/Entidad'
import Filtro from '../components/Filtro'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Listado from '../components/Listado'
import Selected from '../components/Selected'
import PdfDocument from '../components/PdfDocument'

export default function Home() {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const {
    modalPdf,
    modalEntidad,
    entidadSelected,
    openModalEntidad,
    openModalPdf,
    selectEntidad
  } = AppContext

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
        <div className='flex flex-wrap gap-4 justify-center items-center relative'>
          <ul className='flex flex-wrap gap-4 justify-center items-center relative'>
            <li
              key={1}
              className={`relative ${
                entidadSelected === 'TSJE' ? 'selected' : ''
              }`}
            >
              <label className='flex justify-center'>
                <input
                  className='hidden'
                  type='radio'
                  value='TSJE'
                  name='entidad'
                  onClick={e => selectEntidad(e.target.value)}
                />
                <Entidad />
                {entidadSelected === 'TSJE' ? <Selected /> : ''}
              </label>
            </li>
            <li
              key={2}
              className={`relative ${
                entidadSelected === 'TRIBUNAL ELECTORAL' ? 'selected' : ''
              }`}
            >
              <label className='flex justify-center'>
                <input
                  className='hidden'
                  type='radio'
                  value='TRIBUNAL ELECTORAL'
                  name='entidad'
                  onClick={e => {
                    selectEntidad(e.target.value)
                    openModalEntidad(!modalEntidad)
                  }}
                />
                <Entidad />
                {entidadSelected === 'TRIBUNAL ELECTORAL' ? <Selected /> : ''}
              </label>
            </li>
            <li
              key={3}
              className={`relative ${
                entidadSelected === 'JUZGADOS' ? 'selected' : ''
              }`}
            >
              <label className='flex justify-center'>
                <input
                  className='hidden'
                  type='radio'
                  value='JUZGADOS'
                  name='entidad'
                  onClick={e => {
                    selectEntidad(e.target.value)
                    openModalEntidad(!modalEntidad)
                  }}
                />
                <Entidad />
                {entidadSelected === 'JUZGADOS' ? <Selected /> : ''}
              </label>
            </li>
          </ul>
          {modalEntidad && (
            <div className='absolute top-0 left-0 sm:w-full max-h-full bg-white dark:bg-gray-700 shadow-2xl z-20 rounded-md flex justify-center sm:scale-105 mx-5 sm:mx-0'>
              <button
                className='z-50 rounded-full p-1 bg-white dark:text-gray-700 shadow-md absolute -top-3 border transition'
                onClick={() => {
                  openModalEntidad(!modalEntidad)
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
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
              <ol className='flex flex-wrap p-3 justify-center sm:justify-between items-center gap-4 overflow-auto text-xs scrollbar'>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Capital y Central
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Paraguarí, Cordillera, Pdte. Hayes y Boquerón
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Concepción y Alto Paraguay
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Guairá y Caazapá
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Itapúa
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Misiones
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Alto Paraná y Canindeyú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Ñeembucú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Capital y Central
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Paraguarí, Cordillera, Pdte. Hayes y Boquerón
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Concepción y Alto Paraguay
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Guairá y Caazapá
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Itapúa
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Misiones
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Alto Paraná y Canindeyú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Ñeembucú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Capital y Central
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Paraguarí, Cordillera, Pdte. Hayes y Boquerón
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Concepción y Alto Paraguay
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Guairá y Caazapá
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Itapúa
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Misiones
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Alto Paraná y Canindeyú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Ñeembucú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Capital y Central
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Paraguarí, Cordillera, Pdte. Hayes y Boquerón
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Concepción y Alto Paraguay
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Guairá y Caazapá
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Itapúa
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Misiones
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Alto Paraná y Canindeyú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Ñeembucú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Capital y Central
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Paraguarí, Cordillera, Pdte. Hayes y Boquerón
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Concepción y Alto Paraguay
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Guairá y Caazapá
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Itapúa
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Misiones
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Alto Paraná y Canindeyú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Ñeembucú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Capital y Central
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Paraguarí, Cordillera, Pdte. Hayes y Boquerón
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Concepción y Alto Paraguay
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Guairá y Caazapá
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Itapúa
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Misiones
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Alto Paraná y Canindeyú
                </li>
                <li className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none'>
                  Ñeembucú
                </li>
              </ol>
            </div>
          )}
        </div>
        <Filtro />
        <div className='w-full flex justify-center px-5 sm:px-0'>
          <Listado />
        </div>
      </main>
      {modalPdf && <PdfDocument />}
      <Footer />
    </div>
  )
}
