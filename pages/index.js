import Head from 'next/head'
import { useContext } from 'react'
import Entidad from '../components/Entidad'
import Filtro from '../components/Filtro'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Listado from '../components/Listado'
import appContext from '../context/app/appContext'

export default function Home() {
  // extraer state de aplicacion
  const AppContext = useContext(appContext)
  const { darkMode, darkModeOn } = AppContext

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
        <Listado />
      </main>
      <Footer />
    </div>
  )
}
