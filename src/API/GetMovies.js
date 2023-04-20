import axios from "axios";

export default class GetMovies {
    static async getAll(url, typeNumber) {
        try {
            const response = await axios.get(url, {
                params: {
                    typeNumber: typeNumber
                },
                headers: {
                    'X-API-KEY': 'GF1AKFK-QDQMK5V-N6ANZEM-MFJE27E',
                    'Content-Type': 'application/jsonp',
                    "Access-Control-Allow-Origin": "*"
                }
            })
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
}