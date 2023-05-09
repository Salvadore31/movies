import axios from "axios";

export default class GetMovies {
    static async getAll(url, typeNumber, limit) {
        try {
            const response = await axios.get(url, {
                params: { // тут мы прописываем все возможные параметры, которые существуют в api и которые мы подгружаем на 4 строке
                    typeNumber: typeNumber,
                    limit: limit
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