import { createStore } from 'redux'
import { libreria as reducer } from './src/reducers/libreria'
import { crearLibro } from './src/actions/libreria'

const store = createStore(reducer)


let libros;
store.subscribe(() => {
  const nuevos = store.getState().libros
  if (nuevos !== libros) {
    libros = nuevos
    console.log('Cambiaron los libros', libros)
  }
})


store.dispatch({ type: 'iniciar' })

store.dispatch(crearLibro('La invencion de Morel'))

// console.log('State =', store.getState())

