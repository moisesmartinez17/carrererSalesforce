/* consume API from Google in js LWC */

import{ LightningElement, track } from 'lwc';

const columns = [
        { label: 'Title', fieldName: "title", type: 'text' },
        { label: 'Subtitle', fieldName: 'subtitle', type: 'text'  },
        { label: 'Publisher', fieldName: 'publisher', type: 'text'  },
        { label: 'Description', fieldName: 'description', type: 'text' }
    ];

export default class libroSalesforce extends LightningElement {
columns = columns;
@track books; //in this save the information of books

connectedCallback(){
    // url API
    fetch('https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=salesforce',
    {
      // Request type
      method:"GET",
      headers:{
        "Content-Type": "application/json",
      }
    })

    .then((response) => response.json()) 

    .then((response) => {
      let consulta = response.items;
      //iterate json saved
      var struct = [];
      for (var int in consulta){
        if (consulta.hasOwnProperty(int)) {
          struct[int] = consulta[int].volumeInfo;
        }
      }
      this.books = struct;
    });
  }
}