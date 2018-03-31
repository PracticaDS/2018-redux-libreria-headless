import moment from 'moment'

export const REGISTRAR_ACCION = 'REGISTRAR_ACCION'
export const registrarAccion = (accion, antes, despues) => ({
  type: REGISTRAR_ACCION,
  payload: {
    timestamp: moment().format('YYYY-MM-DD-HH:mm:SS'),
    accion,
    antes,
    despues
  }
})
