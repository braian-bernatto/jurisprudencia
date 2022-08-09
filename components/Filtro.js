import { useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import appContext from '../context/app/appContext'
import clienteAxios from '../config/axios'

const Filtro = () => {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const { years, tipoResoluciones } = AppContext

  const filtroSchema = Yup.object().shape({
    buscador: Yup.string().nullable(true),
    nroResolucion: Yup.number().nullable(true),
    yearResolucion: Yup.number().nullable(true).typeError('Must be a number'),
    tipoResolucion: Yup.number().nullable(true).typeError('Must be a number')
  })

  const checkValues = async valores => {
    const { buscador, nroResolucion, yearResolucion, tipoResolucion } = valores
    if (buscador || nroResolucion || yearResolucion || tipoResolucion) {
      console.log(valores)
    } else {
      console.log('Al menos carga un valor')
    }
    // try {
    //   const respuesta = await clienteAxios.post(url, valores)
    //   console.log(respuesta)
    // } catch (error) {
    //   console.log(error.response.data)
    // }
  }

  const focusNextInput = event => {
    if (event.key.toLowerCase() === 'enter') {
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      form.elements[index + 1].focus()
      event.preventDefault()
    }
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        buscador: '',
        nroResolucion: '',
        yearResolucion: '',
        tipoResolucion: ''
      }}
      onSubmit={async (values, { resetForm }) => {
        await checkValues(values)
        // resetForm()
      }}
      validationSchema={filtroSchema}
    >
      {({ errors, touched, setFieldValue, resetForm }) => (
        <Form className='w-full max-w-6xl flex flex-wrap gap-3 justify-center shadow-md py-4 px-1 rounded-xl dark:shadow-gray-800 border dark:border-gray-700 text-xs'>
          <span className='flex w-full justify-center items-center'>
            <div className='flex justify-center bg-white dark:border-gray-700 dark:bg-gray-700 items-center shadow-md border border-opacity-75 border-gray-300 rounded-lg px-2 sm:px-3 py-2 dark:shadow-gray-800 mb-5 w-80'>
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
              <Field
                type='text'
                id='buscador'
                name='buscador'
                className='bg-transparent focus:outline-none text-xl'
                onKeyDown={focusNextInput}
              />
              {errors.buscador && touched.buscador ? (
                <div>{errors.buscador}</div>
              ) : null}
            </div>
          </span>

          <div className='flex justify-center font-semibold p-3 dark:bg-gray-700 shadow-md rounded-xl border max-w-md relative bg-white dark:border-gray-700 dark:shadow-gray-800'>
            <label
              className='absolute -top-3 font-bold shadow border rounded-md bg-white dark:bg-white dark:text-gray-700 px-2'
              htmlFor='nroResolucion'
            >
              N° Resolución
            </label>
            <Field
              className='z-10 w-24 bg-transparent font-bold border-b-4 rounded text-center border-teal-600 focus:outline-none text-lg'
              type='number'
              id='nroResolucion'
              name='nroResolucion'
              onKeyDown={focusNextInput}
            />
            {errors.nroResolucion && touched.nroResolucion ? (
              <div>{errors.nroResolucion}</div>
            ) : null}
          </div>

          <div className='select flex justify-center items-center font-semibold p-2 dark:bg-gray-700 shadow-md rounded-xl border max-w-xs relative bg-white dark:border-gray-700 dark:shadow-gray-800'>
            <label
              className='absolute -top-3 font-bold shadow border rounded-md bg-white dark:bg-white dark:text-gray-700 px-2'
              htmlFor='yearResolucion'
            >
              Año
            </label>
            <Field
              className='shadow appearance-none rounded p-2 font-bold focus:outline-none focus:shadow-outline text-xs uppercase bg-transparent border-b-4 border-teal-600 text-center relative px-3'
              as='select'
              name='yearResolucion'
              id='yearResolucion'
              onChange={e =>
                e.currentTarget.value !== ''
                  ? setFieldValue('yearResolucion', +e.currentTarget.value)
                  : setFieldValue('yearResolucion', null)
              }
            >
              <option
                className='font-bold rounded-md shadow dark:bg-gray-700 appearance-none text-center'
                value=''
              >
                --Seleccionar--
              </option>
              {years.map((year, index) => (
                <option
                  key={index}
                  className='font-bold rounded-md shadow dark:bg-gray-700 appearance-none text-center'
                  value={year}
                >
                  {year}
                </option>
              ))}
            </Field>
            {errors.yearResolucion && touched.yearResolucion ? (
              <div>{errors.yearResolucion}</div>
            ) : null}
          </div>

          <div className='select flex justify-center items-center font-semibold p-2 dark:bg-gray-700 shadow-md rounded-xl border max-w-sm relative bg-white dark:border-gray-700 dark:shadow-gray-800'>
            <label
              className='absolute -top-3 font-bold shadow border rounded-md bg-white dark:bg-white dark:text-gray-700 px-2'
              htmlFor='tipoResolucion'
            >
              Tipo de Resolución
            </label>
            <Field
              className='shadow appearance-none rounded p-2 font-bold focus:outline-none focus:shadow-outline text-xs uppercase bg-transparent border-b-4 border-teal-600 text-center px-4'
              as='select'
              name='tipoResolucion'
              id='tipoResolucion'
              onChange={e =>
                e.currentTarget.value !== ''
                  ? setFieldValue('tipoResolucion', +e.currentTarget.value)
                  : setFieldValue('tipoResolucion', null)
              }
            >
              <option
                className='font-bold rounded-md shadow dark:bg-gray-700 appearance-none text-center'
                value=''
              >
                --Seleccionar--
              </option>
              {tipoResoluciones.map(tipo => (
                <option
                  key={tipo.tipo_resolucion_id}
                  className='font-bold rounded-md shadow dark:bg-gray-700 appearance-none text-center'
                  value={tipo.tipo_resolucion_id}
                >
                  {tipo.tipo_resolucion_descri}
                </option>
              ))}
            </Field>
            {errors.tipoResolucion && touched.tipoResolucion ? (
              <div>{errors.tipoResolucion}</div>
            ) : null}
          </div>

          <div className='w-full flex justify-center items-center font-bold relative'>
            <button
              aria-label='button'
              type='submit'
              className='flex justify-center items-center border shadow-md rounded-xl p-2 w-36 transition-transform hover:scale-105 bg-white dark:bg-gray-700 dark:border-gray-700 dark:shadow-gray-800'
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
          <div className='w-full flex justify-center items-center font-bold relative'>
            <button
              aria-label='button'
              className='flex justify-center items-center border shadow-md rounded-xl p-2 transition-transform hover:scale-105 bg-white dark:bg-gray-700 dark:border-gray-700 dark:shadow-gray-800 absolute -top-10 right-0'
              onClick={e => {
                e.preventDefault()
                resetForm()
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
                  d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                />
              </svg>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Filtro
