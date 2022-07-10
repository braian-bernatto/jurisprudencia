import appContext from './appContext'
import React, { useEffect, useReducer } from 'react'
import appReducer from './appReducer'
import { MODAL_PDF } from '../../types'

const AppState = ({ children }) => {
  const initialState = {
    modalPdf: false
  }

  //definir reducer
  const [state, dispatch] = useReducer(appReducer, initialState)

  const openModalPdf = estado => {
    dispatch({
      type: MODAL_PDF,
      payload: estado
    })
  }

  return (
    <appContext.Provider
      value={{
        modalPdf: state.modalPdf,
        openModalPdf
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
