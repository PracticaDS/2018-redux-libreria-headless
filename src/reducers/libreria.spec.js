import { libreria as reducer } from './libreria'
import { crearLibro, borrarLibro } from '../actions/libreria'

describe('todo reducer', () => {

  it('debe retornar un estado inicial default', () => {
    expect(reducer(undefined, { type: 'blah' })).toEqual({
      libros: [],
      id: 0
    })
  })

  describe('CREAR_LIBRO', () => {

    it('debe agregar el libro a la lista de libros', () => {
      expect(reducer(undefined, crearLibro('Peter Pan'))).toEqual({
        libros: [
          { id: 0, titulo: 'Peter Pan' }
        ],
        id: 1
      })
    })

  })

  describe('BORRAR_LIBRO', () => {

    it('debe eliminar el libro usando un id', () => {
      const state = {
        libros: [
          { id: 0, titulo: 'Pepito' },
          { id: 1, titulo: 'Pepito 2' },
          { id: 2, titulo: 'Pepito 3' },
        ]
      }
      expect(reducer(state, borrarLibro(1))).toEqual({
        libros: [
          { id: 0, titulo: 'Pepito' },
          { id: 2, titulo: 'Pepito 3' },
        ]
      })
    })

  })

})
