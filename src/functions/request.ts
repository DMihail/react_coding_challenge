import axios from "axios";

const moviesPath: string = "https://api.themoviedb.org/3/movie/";

export const getPopularMovies = async () => {
    try {
        const request = await axios.get(`${moviesPath}popular`, {
            params: {
                api_key: 'bce2bca3c8a838c2a1176df5c0246f51'
            }
        });
        return request.data.results;
    } catch (e) {
        console.log(e);
        return null;
    }

}

export const getMovie = async (id:number|string) => {
    try {
        const request = await axios.get(`${moviesPath}${id}`, {
            params: {
                api_key: 'bce2bca3c8a838c2a1176df5c0246f51'
            }
        });
        return request.data;
    } catch (e) {
        console.log(e);
        return null;
    }
}
