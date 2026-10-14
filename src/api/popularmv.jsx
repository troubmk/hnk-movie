const API_KEY = 'b31e7c2b045b39d526252cb9e5a00c30';

export const getPopularMovies = async (page) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();


    return data;
};