import { MODAL_PDF } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case MODAL_PDF:
      return {
        ...state,
        modalPdf: action.payload
      }

    default:
      return state
  }
}
