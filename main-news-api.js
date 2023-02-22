//Variables
const API_KEY = 'c3b989b64125408fbeb6e171ab46a090';
const BASE_URL = 'https://newsapi.org/v2';

//axios.get('user?ID=12345') - only one being passed through
let options = {
  baseURL: BASE_URL,
  params: {
    q: 'keyword',
    apiKey: API_KEY,
  }
}

axios.get('/everything', options) 
  .then(function (response) {
    console.log(response);
  })

  .catch(function (error) {
    console.log(error);
  })
 
  .then(function () {
  //always executed
  });


