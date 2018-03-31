/* eslint-disable */
import { registrarAccion } from '../actions/historia'

const extraerEstado = state => {
  const { historia, ...resto } = state
  return resto
}

const historia = timestampCreator => store => next => action => {
  const antes = extraerEstado(store.getState())

  const r = next(action)

  const despues = extraerEstado(store.getState())

  next(registrarAccion(action, antes, despues, timestampCreator))
  return r
}

export default historia
