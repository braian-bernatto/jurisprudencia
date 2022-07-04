import appContext from './appContext'
import React, { useEffect, useReducer } from 'react'
import appReducer from './appReducer'
import { DARK_MODE } from '../../types'

const AppState = ({ children }) => {
  const initialState = {
    darkMode: false
  }

  //definir reducer
  const [state, dispatch] = useReducer(appReducer, initialState)

  const darkModeOn = estado => {
    dispatch({
      type: DARK_MODE,
      payload: estado
    })
  }

  return (
    <appContext.Provider
      value={{
        darkMode: state.darkMode,
        darkModeOn
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
