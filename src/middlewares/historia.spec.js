import configureStore from 'redux-mock-store'
import crearHistoriaMiddleware from './historia'

const middlewares = [crearHistoriaMiddleware(() => '1955-11-05')]
const mockStore = configureStore(middlewares)

it('debe dispatcher un action de REGISTRAR_ACCION', () => {
  const store = mockStore({})

  store.dispatch({ type: 'DUMMY', blah: 'bleh' })
  expect(store.getActions()).toEqual([
    { type: 'DUMMY', blah: 'bleh' },
    {
      type: 'REGISTRAR_ACCION',
      payload: {
        timestamp: '1955-11-05',
        antes: {},
        despues: {},
        accion: { type: 'DUMMY', blah: 'bleh' }
      }
    }
  ])
})
