import axios from 'axios';

import {IMoviesList} from '../interfaces/IMoviesList'
import { IMovie } from '../interfaces/IMovie';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const url = 'https://api.themoviedb.org/3'

export async function getAllMovies(): Promise<IMoviesList | boolean> {
    try {
        const req = await axios.get(`${url}/discover/movie?api_key=${apiKey}`);
		return req.data;
	}
	catch (e) {
		console.error('No data founds, please contact support.');
		return (false);
	}
}

export async function getMovieById(id: number): Promise<IMovie | boolean> {
    try {
        const req = await axios.get(`${url}/movie/${id}?api_key=${apiKey}`);
		return req.data;
	}
	catch (e) {
		console.error('No movie found with this id.');
		return (false);
	}
}

export async function searchMovie(query: string): Promise<IMoviesList | boolean> {
    try {
        const req = await axios.get(`${url}/search/movie?api_key=${apiKey}&query=${query}`);
		return req.data;
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