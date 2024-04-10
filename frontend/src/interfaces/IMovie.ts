export interface IMovie {
    adult: boolean,
    backdrop_path: string
    genre_ids: [],
    genres: [],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number
    poster_path: string,
    release_date: string
    title: string,
    tagline: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    production_companies: []
}

export const DefaultMovie: IMovie = {
    adult:false,
    backdrop_path:'',
    genre_ids:[],
    genres: [],
    id:1,
    original_language:'en',
    original_title:'',
    overview:'',
    popularity:1,
    poster_path:'https://image.tmdb.org/t/p/original/',
    release_date:'',
    title:'',
    tagline: '',
    video:true,
    vote_average:1,
    vote_count:1,
    production_companies: []
}