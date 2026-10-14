import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { getMovieDetail, getTVDetail } from '../api/tmdb'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const DetailPage = () => {
    const { type, id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
    const fetchFilm = async () => {
        try {
            let data;

            if (type === "movie") {
                data = await getMovieDetail(id);
            }

            if (type === "tv") {
                data = await getTVDetail(id);
            }

            setFilm(data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchFilm();
}, [type, id]);

    if (!film) {
        return (
            <div>
                <p>Film not found.</p>
            </div>
        );
    }

    return (
    <>
       <Box
        sx={{
            position: 'relative',
            minHeight: 'calc(100vh - 64px)',
            backgroundImage: film.backdrop_path
                ? `url(https://image.tmdb.org/t/p/original${film.backdrop_path})`
                : 'none',
            backgroundColor: '#101820',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: `
                    linear-gradient(
                        90deg,
                        rgba(10, 15, 25, 0.98) 0%,
                        rgba(10, 15, 25, 0.88) 45%,
                        rgba(10, 15, 25, 0.55) 100%
                    )
                `,
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background:
                    'linear-gradient(0deg, #101820 0%, transparent 45%)',
            },
        }}
    >
        <Box
            sx={{
                position: 'relative',
                zIndex: 1,
                maxWidth: 1200,
                mx: 'auto',
                px: { xs: 2, sm: 4, md: 5 },
                py: { xs: 4, md: 8 },
                minHeight: 'calc(100vh - 64px)',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 4, md: 6 }}
                sx={{
                    width: '100%',
                    alignItems: {
                        xs: 'center',
                        md: 'flex-start',
                   },
                }}
            >
                {/* POSTER */}
                <Box
                    sx={{
                        flexShrink: 0,
                        width: { xs: 'min(250px, 80%)', sm: 280, md: 320 },
                    }}
                >
                    <Box
                        component="img"
                        src={
                            film.poster_path
                                ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                                : ''
                        }
                        alt={film.title || film.name}
                        sx={{
                            width: '100%',
                            display: 'block',
                            borderRadius: 3,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                            border: '1px solid rgba(255,255,255,0.15)',
                        }}
                    />
                </Box>

                {/* THÔNG TIN PHIM */}
                <Stack
                    spacing={2.5}
                    sx={{
                        flex: 1,
                        width: '100%',
                        pt: { md: 2 },
                    }}
                >
                    {/* Loại phim */}
                    <Chip
                        label={type === 'movie' ? 'MOVIE' : 'TV SERIES'}
                        size="small"
                        sx={{
                            alignSelf: { xs: 'center', md: 'flex-start' },
                            bgcolor: 'rgba(139,131,255,0.18)',
                            color: '#b7b0ff',
                            fontWeight: 700,
                            letterSpacing: 1.5,
                            border: '1px solid rgba(139,131,255,0.4)',
                        }}
                    />

                    {/* Tên phim */}
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: {
                                xs: '2rem',
                                sm: '2.7rem',
                                md: '3.5rem',
                            },
                            fontWeight: 800,
                            lineHeight: 1.15,
                            textAlign: { xs: 'center', md: 'left' },
                            textShadow: '0 3px 20px rgba(0,0,0,0.5)',
                            overflowWrap: 'anywhere',
                        }}
                    >
                        {type === 'movie' ? film.title : film.name}
                    </Typography>

                    {/* Ngày phát hành và điểm đánh giá */}
                    <Stack
                        direction="row"
                        spacing={2}
                        useFlexGap
                        sx={{
                           alignItems: 'center',
                           justifyContent: {
                              xs: 'center',
                              md: 'flex-start',
                           },
                          flexWrap: 'wrap',
                       }}
                    >
                        <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center'}}>
                            <CalendarMonthOutlinedIcon
                                sx={{ color: '#b7b0ff', fontSize: 20 }}
                            />
                            <Typography sx={{ color: '#d0d5df' }}>
                                {(
                                    type === 'movie'
                                        ? film.release_date
                                        : film.first_air_date
                                ) || 'Chưa có ngày phát hành'}
                            </Typography>
                        </Stack>

                        <Chip
                            icon={
                                <StarRoundedIcon
                                    sx={{ color: '#ffd166 !important' }}
                                />
                            }
                            label={
                                Number.isFinite(Number(film.vote_average))
                                    ? `${Number(film.vote_average).toFixed(1)} / 10`
                                    : 'Chưa có điểm'
                            }
                            sx={{
                                bgcolor: 'rgba(255,209,102,0.14)',
                                color: '#ffd166',
                                fontWeight: 700,
                                '& .MuiChip-icon': { ml: 1 },
                            }}
                        />
                    </Stack>

                    {/* Đường phân cách */}
                    <Box
                        sx={{
                            width: 70,
                            height: 4,
                            borderRadius: 2,
                            bgcolor: '#8b83ff',
                        }}
                    />

                    {/* Giới thiệu */}
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                mb: 1.5,
                                color: '#fff',
                            }}
                        >
                            Giới thiệu phim
                        </Typography>

                        <Typography
                            sx={{
                                color: '#d0d5df',
                                lineHeight: 1.9,
                                fontSize: '1rem',
                                textAlign: 'justify',
                                whiteSpace: 'pre-line',
                            }}
                        >
                            {film.overview || 'Chưa có nội dung giới thiệu cho phim này.'}
                        </Typography>
                    </Box>

                    {/* Thống kê */}
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            pt: 1,
                            flexWrap: 'wrap',
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: 2,
                                px: 2.5,
                                py: 1.5,
                                minWidth: 130,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ color: '#aab3c5', mb: 0.5 }}
                            >
                                Điểm trung bình
                            </Typography>

                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                {Number.isFinite(Number(film.vote_average))
                                    ? Number(film.vote_average).toFixed(1)
                                    : 'N/A'}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                bgcolor: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: 2,
                                px: 2.5,
                                py: 1.5,
                                minWidth: 130,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ color: '#aab3c5', mb: 0.5 }}
                            >
                                Lượt đánh giá
                            </Typography>

                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                {Number(film.vote_count || 0).toLocaleString('en-US')}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    </Box>
    </>
    )
};

export default DetailPage;