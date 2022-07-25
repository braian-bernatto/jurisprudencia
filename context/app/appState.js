import appContext from './appContext'
import React, { useReducer } from 'react'
import appReducer from './appReducer'
import {
  MODAL_PDF,
  MODAL_ENTIDAD,
  URL_PDF,
  ENTIDAD_SELECTED,
  ENTIDADES,
  RESOLUCIONES,
  YEARS
} from '../../types'

const AppState = ({ children }) => {
  const initialState = {
    modalPdf: false,
    modalEntidad: false,
    urlPdf: '',
    entidadSelected: '',
    miembros: [],
    resoluciones: [],
    tsje: null,
    tribunal: null,
    juzgado: null,
    years: []
  }

  //definir reducer
  const [state, dispatch] = useReducer(appReducer, initialState)

  const openModalPdf = estado => {
    dispatch({
      type: MODAL_PDF,
      payload: estado
    })
  }

  const openModalEntidad = estado => {
    dispatch({
      type: MODAL_ENTIDAD,
      payload: estado
    })
  }

  const urlPdfHandler = path => {
    dispatch({
      type: URL_PDF,
      payload: path
    })
  }

  const selectEntidad = entidad => {
    dispatch({
      type: ENTIDAD_SELECTED,
      payload: entidad
    })
  }

  const entidadesHandler = datos => {
    dispatch({
      type: ENTIDADES,
      payload: datos
    })
  }

  const getResoluciones = async () => {
    try {
      const respuesta = [
        {
          url: './uploads/res.pdf',
          tipoResolucion: 'Acuerdo y sentencia',
          nroResolucion: 8,
          fechaResolucion: '08/07/2022',
          sala: 1,
          materia: 'Electoral',
          accionResuelta: 'Reconocimiento de concertación',
          preopinante: 'Jaime Bestard',
          resultado: 'Hace lugar',
          entidad: 'TSJE',
          analisis:
            'Se habilita la utilización del padrón nacional para las concertaciones'
        },
        {
          url: 'http://localhost:4000/react',
          tipoResolucion: 'Auto Interlocutorio',
          nroResolucion: 144,
          fechaResolucion: '01/02/2022',
          sala: 1,
          materia: 'Electoral',
          accionResuelta: 'Se resuelve algo interesante',
          preopinante: 'Braian Bernatto',
          resultado: 'Hace lugar',
          entidad: 'TSJE',
          analisis: 'Un análisis interesante'
        },
        {
          url: 'http://localhost:4000/git',
          tipoResolucion: 'Auto Interlocutorio',
          nroResolucion: 144,
          fechaResolucion: '01/02/2022',
          sala: 1,
          materia: 'Electoral',
          accionResuelta: 'Se resuelve algo interesante',
          preopinante: 'Braian Bernatto',
          resultado: 'Hace lugar',
          entidad: 'TSJE',
          analisis: 'Un análisis interesante'
        }
      ]

      dispatch({
        type: RESOLUCIONES,
        payload: respuesta
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getYears = async () => {
    try {
      const respuesta = [2022, 2021, 2020, 2019]

      dispatch({
        type: YEARS,
        payload: respuesta
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <appContext.Provider
      value={{
        modalPdf: state.modalPdf,
        modalEntidad: state.modalEntidad,
        urlPdf: state.urlPdf,
        entidadSelected: state.entidadSelected,
        tsje: state.tsje,
        tribunal: state.tribunal,
        juzgado: state.juzgado,
        resoluciones: state.resoluciones,
        years: state.years,
        openModalPdf,
        openModalEntidad,
        urlPdfHandler,
        selectEntidad,
        entidadesHandler,
        getResoluciones,
        getYears
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
