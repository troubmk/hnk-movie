// import { useParams } from 'react-router-dom';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FilmCard from '../components/FilmCard';
import Pagination from '@mui/material/Pagination';

const PartPage = ({totalPages, title, movie, page, setPage }) => {
    // const params = useParams();

    return (
       <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
    sx={{
        bgcolor: '#cfe8fc',
        minHeight: '50vh',
        p: 2,
    }}
>
    <h1>{title}</h1>

    <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(5, 1fr)',
        },
            gap: 2,
        }}
    >
        {movie && Array.isArray(movie) ? (
            movie.map((film) => (
                <FilmCard key={film.id} film={film} />
            ))
        ) : (
            <FilmCard film={movie} />
        )}
    </Box>
    <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 5,
                    mb: 2,
                }}
            >
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                    color="primary"
                />
            </Box>
</Box>
      </Container>
    </React.Fragment>
    );
};

export default PartPage;
