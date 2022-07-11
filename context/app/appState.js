import appContext from './appContext'
import React, { useEffect, useReducer } from 'react'
import appReducer from './appReducer'
import { MODAL_PDF, URL_PDF } from '../../types'

const AppState = ({ children }) => {
  const initialState = {
    modalPdf: false,
    urlPdf: ''
  }

  //definir reducer
  const [state, dispatch] = useReducer(appReducer, initialState)

  const openModalPdf = estado => {
    dispatch({
      type: MODAL_PDF,
      payload: estado
    })
  }

  const urlPdfHandler = path => {
    dispatch({
      type: URL_PDF,
      payload: path
    })
  }

  return (
    <appContext.Provider
      value={{
        modalPdf: state.modalPdf,
        urlPdf: state.urlPdf,
        openModalPdf,
        urlPdfHandler
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
