const API_KEY = "67d7a51db285feb1d2606724117d03c9";

//endpoints

//https://api.themoviedb.org/3/trendingn/all/week?api_key=${API_KEY}&language=es-ES`

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=es-ES`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDomuentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;