//Variables
const BASE_URL = 'https://randomuser.me/';

//axios.get('user?ID=12345') - only one being passed through
let options = {
  baseURL: BASE_URL,
}

let state = {
  user: null,

}

axios.get('', options) 
  .then(function (response) {
    console.log(response);
    state.user = response.data.results[0];
  })

  .catch(function (error) {
    console.log(error);
  })
 
  .then(function () {
  //always executed
  });
