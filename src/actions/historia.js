import moment from 'moment'

const defaultTimestampCreator = () => moment().format('YYYY-MM-DD-HH:mm:SS')

export const REGISTRAR_ACCION = 'REGISTRAR_ACCION'
export const registrarAccion = (accion, antes, despues, timestamp = defaultTimestampCreator) => ({
  type: REGISTRAR_ACCION,
  payload: {
    timestamp: timestamp(),
    accion,
    antes,
    despues
  }
})
