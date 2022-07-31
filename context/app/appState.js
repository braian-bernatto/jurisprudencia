import appContext from './appContext'
import React, { useReducer } from 'react'
import appReducer from './appReducer'
import clienteAxios from '../../config/axios'
import {
  MODAL_PDF,
  MODAL_ENTIDAD,
  URL_PDF,
  ENTIDAD_SELECTED,
  TIPO_ENTIDADES,
  ENTIDADES,
  ENTIDAD_SELECTED_DETAILS,
  RESOLUCIONES,
  YEARS
} from '../../types'

const AppState = ({ children }) => {
  const initialState = {
    modalPdf: false,
    modalEntidad: false,
    urlPdf: '',
    entidadSelected: '',
    tipoEntidades: [],
    entidades: [],
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
      type: ENTIDAD_SELECTED_DETAILS,
      payload: datos
    })
  }

  const getResoluciones = async () => {
    try {
      const respuesta = await clienteAxios.get(`/resoluciones`)
      dispatch({
        type: RESOLUCIONES,
        payload: respuesta.data.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getTipoEntidades = async () => {
    try {
      const respuesta = await clienteAxios.get(`/tipo-entidad`)
      dispatch({
        type: TIPO_ENTIDADES,
        payload: respuesta.data.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getEntidades = async () => {
    try {
      const respuesta = await clienteAxios.get(`/entidades`)
      dispatch({
        type: ENTIDADES,
        payload: respuesta.data.data
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
        tipoEntidades: state.tipoEntidades,
        entidades: state.entidades,
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
        getTipoEntidades,
        getEntidades,
        getResoluciones,
        getYears
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
