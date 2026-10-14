const API_KEY = 'b31e7c2b045b39d526252cb9e5a00c30';

export const getTrendingMovies = async (moviePage) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${moviePage}`
    );
    const data = await response.json();


    return data;
};