import axios from "axios";
import {serialize} from "v8";


const pokeApi = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    responseEncoding: 'utf8',
    responseType: 'json',

    baseURL : "https://pokeapi.co/api/v2"
})

export default pokeApi
