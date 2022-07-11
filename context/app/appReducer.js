import { MODAL_PDF, URL_PDF } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case MODAL_PDF:
      return {
        ...state,
        modalPdf: action.payload
      }
    case URL_PDF:
      return {
        ...state,
        urlPdf: action.payload
      }

    default:
      return state
  }
}
