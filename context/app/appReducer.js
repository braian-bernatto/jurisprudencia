import {
  MODAL_PDF,
  MODAL_ENTIDAD,
  URL_PDF,
  ENTIDAD_SELECTED,
  ENTIDADES,
  RESOLUCIONES
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case MODAL_PDF:
      return {
        ...state,
        modalPdf: action.payload
      }

    case MODAL_ENTIDAD:
      return {
        ...state,
        modalEntidad: action.payload
      }

    case URL_PDF:
      return {
        ...state,
        urlPdf: action.payload
      }

    case ENTIDAD_SELECTED:
      return {
        ...state,
        entidadSelected: action.payload
      }

    case RESOLUCIONES:
      return {
        ...state,
        resoluciones: action.payload
      }

    case ENTIDADES:
      return {
        ...state,
        tsje: action.payload.type === 'TSJE' ? action.payload.data : state.tsje,
        tribunal:
          action.payload.type === 'TRIBUNAL'
            ? action.payload.data
            : state.tribunal,
        juzgado:
          action.payload.type === 'JUZGADO'
            ? action.payload.data
            : state.juzgado
      }

    default:
      return state
  }
}
