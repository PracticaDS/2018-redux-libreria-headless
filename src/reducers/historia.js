import { REGISTRAR_ACCION } from '../actions/historia'

const initialState = {
  acciones: []
}

export function historia(state = initialState, action) {
  switch (action.type) {
    case REGISTRAR_ACCION: return {
      ...state,
      acciones: state.acciones.concat(action.payload)
    }
    default: return state
  }
}
