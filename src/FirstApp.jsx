
const getValue = () => {
  return 'Hola soy la función!!';
}

// Se recomienda dejar variables y/o funciones fuera del componente para evitar gastos de 
// memoria en reasignación de variables.
// Las funciones se deben dejar afuera a no ser que requiera un valor propio del componente ej: constante
export const FirstApp = ( props ) => {

  console.log( props );

  return (
    <>
      {/* Se muestran variables igual que en angular (por defecto de javascript) */}
      <h1>{ getValue() }</h1>
      {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
      <p>Soy un subtitulo</p>
    </>
  )
}
