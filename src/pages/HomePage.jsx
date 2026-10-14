import useAuth from '../hooks/useAuth';
import { getPopularMovies } from '../api/popularmv';
import { getTrendingMovies } from '../api/trendmv';
import { getTrendingTVShows } from '../api/trendtv';
import React from 'react';
import { useEffect, useState} from 'react';
import Featured from '../components/Featured';
import PartPage from '../components/PartPage';


const HomePage = () => {
    const auth = useAuth();
    // const [page, setPage] = useState(1);
    const [moviePage, setMoviePage] = useState(1);
    const [tvPage, setTvPage] = useState(1);
    const [popularMovies, setPopularMovies] = React.useState([]);
    const [trendingMovies, setTrendingMovies] = React.useState([]);
    const [trendingTVShows, setTrendingTVShows] = React.useState([]);
    const [featuredIndex, setFeaturedIndex] = useState(0);
    const [totalMoviePages, setTotalMoviePages] = useState(1);
    const [totalTVPages, setTotalTVPages] = useState(1);

    const handlePreviousFeatured = () => {
        setFeaturedIndex((prev) => (prev === 0 ? popularMovies.length - 1 : prev - 1));
    }

    const handleNextFeatured = () => {
        setFeaturedIndex((prev) => (prev === popularMovies.length - 1 ? 0 : prev + 1));
    }

    useEffect(() => {
        const fetchPopularMovies = async () => {
            const movies = await getPopularMovies(featuredIndex + 1);
            setPopularMovies(movies.results);
        };

        fetchPopularMovies();
    }, []);

    useEffect(() => {
        if (popularMovies.length === 0) return;
        const timer = setInterval(() => {
            setFeaturedIndex((prev) => (prev === popularMovies.length - 1 ? 0 : prev + 1));
        }, 8000);
        
        return () => clearInterval(timer);
    }, [popularMovies]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const movies = await getTrendingMovies(moviePage);
            setTrendingMovies(movies.results);
            setTotalMoviePages(movies.total_pages);
        };

        fetchTrendingMovies();
    }, [moviePage]);

    useEffect(() => {
        const fetchTrendingTVShows = async () => {
            const shows = await getTrendingTVShows(tvPage);
            setTrendingTVShows(shows.results);
            setTotalTVPages(shows.total_pages);
        };

        fetchTrendingTVShows();
    }, [tvPage]);

    return (
        <>
           <div>
             <Featured movie={popularMovies[featuredIndex]} onPrevious={handlePreviousFeatured} onNext={handleNextFeatured} />
           </div>
           <div>
            <PartPage title="Trending Movies" totalPages={totalMoviePages} movie={trendingMovies} page={moviePage} setPage={setMoviePage} />
           </div>
           <div>
            <PartPage title="Trending TV Shows" totalPages={totalTVPages} movie={trendingTVShows} page={tvPage} setPage={setTvPage} />
           </div>
        </>
    );
};

export default HomePage;