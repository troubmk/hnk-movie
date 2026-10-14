import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const FilmCard = ({ film }) => {
    return (
        <Box
            sx={{
                width: '100%',
            '&:hover .film-poster': {
                transform: 'scale(1.04)',
            },
            '&:hover .film-title': {
                color: '#a5a0ff',
            },
        }}
        >
            <Link 
               to={`/detail/${film.media_type}/${film.id}`}
               style={{
                textDecoration: 'none',
                color: 'inherit',
            }}
            >

             {/* Poster phim */}
            <Paper
                className="film-poster"
                elevation={3}
                sx={{
                    overflow: 'hidden',
                    borderRadius: 3,
                    bgcolor: '#1b2631',
                    transition: 'transform 0.3s ease',
                }}
            >
                <Box
                    component="img"
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.id}
                    sx={{
                        width: '100%',
                        aspectRatio: '2 / 3',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
            </Paper>
                
                {/* Thông tin phim */}
            <Stack spacing={0} sx={{ mt: 1.5, px: 0.5 }}>
                {film.title ? (
                    <>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#1b2631',
                                fontWeight: 600,
                                // lineHeight: 1.5,
                                // minHeight: '3em',
                                display: '-webkit-box',
                                // WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                // overflow: 'hidden',
                            }}
                        >
                            {film.title}
                        </Typography>

                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                        >
                            <CalendarMonthOutlinedIcon
                                sx={{ color: '#8b83ff', fontSize: 19 }}
                            />
                            <Typography
                                variant="body2"
                                sx={{ color: '#9ba8c4', lineHeight: 1.5,  mt: 0.5, }}
                            >
                                {film.release_date || 'Chưa có ngày phát hành'}
                            </Typography>
                        </Stack>
                    </>
                ) : (
                    <>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#1b2631',
                                fontWeight: 600,
                                // lineHeight: 1.5,
                                // minHeight: '3em',
                                display: '-webkit-box',
                                // WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                // overflow: 'hidden',
                            }}
                        >
                            {film.name}
                        </Typography>

                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                        >
                            <CalendarMonthOutlinedIcon
                                sx={{ color: '#8b83ff', fontSize: 19 }}
                            />
                            <Typography
                                variant="body2"
                                sx={{ color: '#9ba8c4', lineHeight: 1.5,  mt: 0.5, }}
                            >
                                {film.first_air_date || 'Chưa có ngày phát hành'}
                            </Typography>
                        </Stack>
                    </>
                )}
            </Stack>
            </Link>
        </Box>
    );
};

export default FilmCard;


  

    