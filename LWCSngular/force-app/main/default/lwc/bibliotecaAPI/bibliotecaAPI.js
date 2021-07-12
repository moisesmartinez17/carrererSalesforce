import{ LightningElement, track } from 'lwc';

const columns = [
        { label: 'Titulo', fieldName: 'kind', type: 'text' },
        { label: 'Subtitulo', fieldName: 'id', type: 'id' },
        { label: 'Autor', fieldName: 'selfLink', type: 'url'},
        { label: 'Descripcion', fieldName: 'volumeInfo:{title}', type: 'text' }
    ];


export default class bibliotecaAPI extends LightningElement {
columns = columns;
@track tabla;
connectedCallback(){
    fetch('https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=salesforce', // url de api consumida
    {
      // Request type
      method:"GET",
      headers:{
        "Content-Type": "application/json",
      }
    })

.then((response) => response.json()) 
      /* response.json() retorna el valor de la promesa */
      
      .then((response) => {
        this.tabla = response['items'];

        console.log('Valor de la tabla ' + JSON.stringify(this.tabla));
      });

}
/* Retomar posteriormente el metodo fetch asincrono */
 //probando el metodo fetch asincrono
  async handleFetch() {
    let endPoint = 'https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=salesforce';
    const response = await fetch(endPoint);
    const tab = await response.json();
    this.tab = tab;
    console.log('revisando contenido ' + JSON.stringify(tab.items));
  }
}