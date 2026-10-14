const API_KEY = 'b31e7c2b045b39d526252cb9e5a00c30';

export const getTrendingTVShows = async (tvPage) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&page=${tvPage}`
    );
    const data = await response.json();


    return data;
};