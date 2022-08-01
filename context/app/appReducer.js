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

    case YEARS:
      return {
        ...state,
        years: action.payload
      }

    case TIPO_ENTIDADES:
      return {
        ...state,
        tipoEntidades: action.payload
      }

    case TIPO_RESOLUCIONES:
      return {
        ...state,
        tipoResoluciones: action.payload
      }

    case BUSCADOR:
      return {
        ...state,
        buscador: action.payload
      }

    case ENTIDADES:
      let entidad = action.payload.filter(
        item => item.tipo_entidad_descri === 'TRIBUNAL SUPERIOR'
      )
      return {
        ...state,
        entidades: action.payload,
        tsje: entidad[0]
      }

    case ENTIDAD_SELECTED_DETAILS:
      return {
        ...state,
        tsje:
          action.payload.tipo_entidad_descri === 'TRIBUNAL SUPERIOR'
            ? action.payload
            : state.tsje,
        tribunal:
          action.payload.tipo_entidad_descri === 'TRIBUNAL ELECTORAL'
            ? action.payload
            : state.tribunal,
        juzgado:
          action.payload.tipo_entidad_descri === 'JUZGADO'
            ? action.payload
            : state.juzgado
      }

    default:
      return state
  }
}
