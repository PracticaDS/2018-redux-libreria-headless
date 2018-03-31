
export const CREAR_LIBRO = 'CREAR_LIBRO'
export const crearLibro = titulo => ({
  type: CREAR_LIBRO,
  titulo
})

export const BORRAR_LIBRO = 'BORRAR_LIBRO'
export const borrarLibro = id => ({
  type: BORRAR_LIBRO,
  id
})
