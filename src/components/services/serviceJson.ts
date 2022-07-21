
const url = "http://localhost:3000/__mocks__/data.json";
function serviceJson():any {
/*
  el siguiente codigo esta realizado de esta manera debido a que el requerimiento
  en el entregable me indica que debo crear la promesa y asignarle un tiempo de delay,
  Sin embargo en este caso es redundante ya que la function fetch devuelve una
  promesa... en otras palabras es solo par cumplir con el entregable
*/  
  return  new Promise(function(resolve, reject) {  
    setTimeout(() => resolve(
      fetch(url)
      .then((response) => response.json())
    ), 4000);
  });
}
export default serviceJson;