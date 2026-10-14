const API_KEY = 'b31e7c2b045b39d526252cb9e5a00c30';


export const getMovieDetail = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );

    return response.json();
};

export const getTVDetail = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
    );

    return response.json();
};