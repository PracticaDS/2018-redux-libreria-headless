import { createStore, applyMiddleware, combineReducers } from 'redux'
import { libreria } from './src/reducers/libreria'
import { historia } from './src/reducers/historia'

import { crearLibro, borrarLibro } from './src/actions/libreria'

import logger from './src/middlewares/logger'
import historiaMiddleware from './src/middlewares/historia'

const reducer = combineReducers({
  historia,
  libreria
})

const store = createStore(reducer, applyMiddleware(logger, historiaMiddleware()))

// subscribe
let libros;
store.subscribe(() => {
  const nuevos = store.getState().libros
  if (nuevos !== libros) {
    libros = nuevos
    console.log('Cambiaron los libros', libros)
  }
})

// middleware


// usando el store
store.dispatch(crearLibro('La invencion de Morel'))
store.dispatch(crearLibro('Rosaura a las 10'))

store.dispatch(borrarLibro(1))

console.log('Historia', JSON.stringify(store.getState().historia, null, 2))

