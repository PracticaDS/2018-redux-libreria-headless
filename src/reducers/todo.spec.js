import { libreria as reducer } from './todo'

describe('todo reducer', () => {

  it('should return a default initial state', () => {
    expect(reducer(undefined, { type: 'blah' })).toEqual({
      libros: []
    })
  })

})
