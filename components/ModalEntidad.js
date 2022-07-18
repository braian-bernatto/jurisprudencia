import { useContext } from 'react'
import appContext from '../context/app/appContext'

const ModalEntidad = ({ data }) => {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const { modalEntidad, openModalEntidad, entidadesHandler } = AppContext
  return (
    <div className='absolute top-0 sm:w-full max-h-full bg-white dark:bg-gray-700 shadow-2xl z-20 rounded-md flex justify-center items-center sm:scale-110 mx-5 sm:mx-0 h-full'>
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
      <ol className='flex flex-wrap p-4 justify-center gap-4 overflow-auto text-xs scrollbar'>
        {data.map((entidad, index) => (
          <li
            key={index}
            className='bg-white dark:text-gray-700 shadow px-3 z-20 rounded-full flex justify-center items-center border hover:scale-110 cursor-pointer transition select-none text-center'
            onClick={() => {
              entidadesHandler(entidad)
              openModalEntidad(!modalEntidad)
            }}
          >
            {entidad.data.entidadNombre}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ModalEntidad
