//INstalar axios para hacer llamadas a servicios externos

import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        //handle success
        console.log("Sucess!!!") ;
        console.log(response.) ;
    })
    .catch(function (error) {
        // handle error
        console.log("Error!!!") ;
        console.log(error);
    })