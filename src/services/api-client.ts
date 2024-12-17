import axios from "axios";



export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:"79209db5e8b14c7787214f9af3abbc25"
    }
})