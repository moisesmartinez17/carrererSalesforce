import{ LightningElement, track } from 'lwc';
export default class bibliotecaAPI extends LightningElement {

@track repos;
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
      .then((repos) => {
        this.repos = repos;
      });

}
}