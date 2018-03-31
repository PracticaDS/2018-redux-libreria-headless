
const logger = () => next => action => {
  console.log('ejecutando action', action.type)
  const r = next(action)
  console.log('termino action', action.type, 'con resultado', r)
  return r
}

export default logger
