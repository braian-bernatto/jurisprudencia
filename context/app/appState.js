import appContext from './appContext'
import React, { useReducer } from 'react'
import appReducer from './appReducer'
import {
  MODAL_PDF,
  MODAL_ENTIDAD,
  URL_PDF,
  ENTIDAD_SELECTED,
  ENTIDADES,
  RESOLUCIONES
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
    juzgado: null
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
          url: './uploads/git.pdf',
          tipoResolucion: 'Auto Interlocutorio',
          nroResolucion: 144,
          fechaResolucion: '01/02/2022',
          sala: 1,
          materia: 'Electoral',
          accionResuelta: 'Se resulve algo interesante',
          preopinante: 'Braian Bernatto',
          resultado: 'Hace lugar',
          entidad: 'TSJE',
          analisis: 'Un análisis interesante'
        },
        {
          url: './uploads/clas.pdf',
          tipoResolucion: 'Auto Interlocutorio',
          nroResolucion: 144,
          fechaResolucion: '01/02/2022',
          sala: 1,
          materia: 'Electoral',
          accionResuelta: 'Se resulve algo interesante',
          preopinante: 'Braian Bernatto',
          resultado: 'Hace lugar',
          entidad: 'TSJE',
          analisis: 'Un análisis interesante'
        },
        {
          url: './uploads/react.pdf',
          tipoResolucion: 'Auto Interlocutorio',
          nroResolucion: 144,
          fechaResolucion: '01/02/2022',
          sala: 1,
          materia: 'Electoral',
          accionResuelta: 'Se resulve algo interesante',
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
        openModalPdf,
        openModalEntidad,
        urlPdfHandler,
        selectEntidad,
        entidadesHandler,
        getResoluciones
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
