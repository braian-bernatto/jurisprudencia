import appContext from './appContext'
import React, { useEffect, useReducer } from 'react'
import appReducer from './appReducer'
import clienteAxios from '../../config/axios'
import {
  MODAL_PDF,
  MODAL_ENTIDAD,
  URL_PDF,
  ENTIDAD_SELECTED,
  TIPO_ENTIDADES,
  TIPO_RESOLUCIONES,
  ENTIDAD_SELECTED_DETAILS,
  ENTIDADES,
  BUSCADOR,
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
    tipoResoluciones: [],
    entidades: [],
    miembros: [],
    resoluciones: [],
    tsje: null,
    tribunal: null,
    juzgado: null,
    buscador: '',
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

  const setEntidadSelected = entidad => {
    dispatch({
      type: ENTIDAD_SELECTED,
      payload: entidad
    })
  }

  const setEntidadSelectedDetails = datos => {
    dispatch({
      type: ENTIDAD_SELECTED_DETAILS,
      payload: datos
    })
  }

  const getResoluciones = async () => {
    try {
      const respuesta = await clienteAxios.get(`/resoluciones`)
      getYears(respuesta.data.data)
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

  const getTipoResoluciones = async () => {
    try {
      const respuesta = await clienteAxios.get(`/tipo-resolucion`)
      dispatch({
        type: TIPO_RESOLUCIONES,
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

  const getYears = data => {
    let result = data.map(item => item.resolucion_year)
    dispatch({
      type: YEARS,
      payload: result
    })
  }

  const setBuscador = data => {
    dispatch({
      type: BUSCADOR,
      payload: data
    })
  }

  return (
    <appContext.Provider
      value={{
        modalPdf: state.modalPdf,
        modalEntidad: state.modalEntidad,
        urlPdf: state.urlPdf,
        entidadSelected: state.entidadSelected,
        tipoEntidades: state.tipoEntidades,
        tipoResoluciones: state.tipoResoluciones,
        entidades: state.entidades,
        tsje: state.tsje,
        tribunal: state.tribunal,
        juzgado: state.juzgado,
        resoluciones: state.resoluciones,
        years: state.years,
        buscador: state.buscador,
        openModalPdf,
        openModalEntidad,
        urlPdfHandler,
        setEntidadSelected,
        setEntidadSelectedDetails,
        getTipoEntidades,
        getTipoResoluciones,
        getEntidades,
        getResoluciones,
        getYears,
        setBuscador
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
