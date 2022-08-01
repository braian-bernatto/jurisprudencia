import Head from 'next/head'
import { useContext, useEffect } from 'react'
import appContext from '../context/app/appContext'
import Entidad from '../components/Entidad'
import Filtro from '../components/Filtro'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Listado from '../components/Listado'
import Selected from '../components/Selected'
import PdfDocument from '../components/PdfDocument'
import ModalEntidad from '../components/ModalEntidad'

export default function Home() {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const {
    modalPdf,
    modalEntidad,
    entidadSelected,
    tsje,
    tribunal,
    juzgado,
    tipoEntidades,
    entidades,
    openModalEntidad,
    setEntidadSelected,
    getResoluciones,
    getTipoEntidades,
    getTipoResoluciones,
    getEntidades
  } = AppContext

  useEffect(() => {
    getResoluciones()
    getTipoEntidades()
    getTipoResoluciones()
    getEntidades()
  }, [])

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
      <main className='flex flex-col w-full justify-center items-center mt-10 gap-4'>
        <div className='flex flex-wrap gap-4 justify-center items-center relative'>
          <ul className='flex flex-wrap gap-4 justify-center relative'>
            {tipoEntidades.map(entidad => (
              <li
                key={entidad.tipo_entidad_id}
                className={`relative ${
                  entidadSelected === entidad.tipo_entidad_descri
                    ? 'selected'
                    : ''
                }`}
              >
                <label className='flex justify-center'>
                  <input
                    className='hidden'
                    type='radio'
                    value={entidad.tipo_entidad_descri}
                    name='entidad'
                    onClick={e => {
                      setEntidadSelected(
                        e.target.value === entidadSelected ? '' : e.target.value
                      )
                      entidad.tipo_entidad_descri !== 'TRIBUNAL SUPERIOR'
                        ? openModalEntidad(true)
                        : null
                    }}
                  />
                  <Entidad
                    datos={entidad}
                    miembros={
                      entidad.tipo_entidad_descri === 'TRIBUNAL SUPERIOR'
                        ? tsje
                        : entidad.tipo_entidad_descri === 'TRIBUNAL ELECTORAL'
                        ? tribunal
                        : juzgado
                    }
                  />
                  {entidadSelected === entidad.tipo_entidad_descri ? (
                    <Selected />
                  ) : (
                    ''
                  )}
                </label>
              </li>
            ))}
          </ul>
          {modalEntidad && entidadSelected === 'TRIBUNAL ELECTORAL' && (
            <ModalEntidad
              data={entidades.filter(
                entidad => entidad.tipo_entidad_descri === 'TRIBUNAL ELECTORAL'
              )}
            />
          )}
          {modalEntidad && entidadSelected === 'JUZGADO' && (
            <ModalEntidad
              data={entidades.filter(
                entidad => entidad.tipo_entidad_descri === 'JUZGADO'
              )}
            />
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
