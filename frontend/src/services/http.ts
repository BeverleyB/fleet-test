import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const url = 'https://api.themoviedb.org/3'

export async function getAllMovies(): Promise<any> {
    try {
        const req = await axios.get(`${url}/movie/11?api_key=${apiKey}`);
        console.log(req)
		return req;
	}
	catch (e) {
		console.error('No data founds, please contact support.');
		return (false);
	}
}

export async function getMovieById(id: string): Promise<any> {
    try {
        const req = await axios.get(`${url}/movie/11?api_key=${apiKey}`);
        console.log(req)
		return req;
	}
	catch (e) {
		console.error('No movie found with this id.');
		return (false);
	}
}

export async function searchMovie(query: string): Promise<any> {
    try {
        const req = await axios.get(`${url}/search/movie?query=${query}&api_key=${apiKey}`);
        console.log(req)
		return req;
	}
	catch (e) {
		console.error('No data founds, please contact support.');
		return (false);
	}
}

export default {
	getAllMovies,
    getMovieById,
    searchMovie
};