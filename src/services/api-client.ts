import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '1a633298ea5940eea336df3aa6cd6955'
    }
})