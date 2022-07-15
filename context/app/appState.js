import appContext from './appContext'
import React, { useReducer } from 'react'
import appReducer from './appReducer'
import {
  MODAL_PDF,
  MODAL_ENTIDAD,
  URL_PDF,
  ENTIDAD_SELECTED,
  MIEMBROS
} from '../../types'

const AppState = ({ children }) => {
  const initialState = {
    modalPdf: false,
    modalEntidad: false,
    urlPdf: '',
    entidadSelected: '',
    miembros: []
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

  const miembrosHandler = miembros => {
    dispatch({
      type: MIEMBROS,
      payload: miembros
    })
  }

  return (
    <appContext.Provider
      value={{
        modalPdf: state.modalPdf,
        modalEntidad: state.modalEntidad,
        urlPdf: state.urlPdf,
        entidadSelected: state.entidadSelected,
        miembros: state.miembros,
        openModalPdf,
        openModalEntidad,
        urlPdfHandler,
        selectEntidad,
        miembrosHandler
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
