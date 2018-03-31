import { CREAR_LIBRO, BORRAR_LIBRO } from '../actions/libreria'

const initialState = {
  libros: [],
  id: 0
}

export function libreria(state = initialState, action) {
  switch (action.type) {
    case CREAR_LIBRO: return {
      ...state,
      id: state.id + 1,
      libros: state.libros.concat({ titulo: action.titulo, id: state.id })
    }
    case BORRAR_LIBRO: return {
      ...state,
      libros: state.libros.filter(l => l.id !== action.id)
    }
    default: return state
  }
}
