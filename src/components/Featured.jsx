
import { Box, Button, Typography, Stack, Chip } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Featured = ({ movie, onPrevious, onNext }) => {
  if (!movie) {
    return (
      <Box sx={{ height: { xs: 360, md: 620 }, display: "grid", placeItems: "center" }}>
        <Typography color="text.secondary">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 460, sm: 520, md: 620 },
        display: "flex",
        alignItems: "center",
        color: "#fff",
        overflow: "hidden",
        backgroundColor: "#101820",
        backgroundImage: movie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Lớp phủ giúp chữ dễ đọc */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: {
            xs: "linear-gradient(0deg, #101820 0%, rgba(16,24,32,0.88) 35%, rgba(16,24,32,0.25) 100%)",
            md: "linear-gradient(90deg, #101820 0%, rgba(16,24,32,0.92) 28%, rgba(16,24,32,0.55) 58%, rgba(16,24,32,0.08) 100%)",
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, #101820 0%, transparent 30%)",
        }}
      />

      {/* Nội dung phim */}
      <Box
        sx={{
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: 760,
  boxSizing: "border-box",

  // Chừa khoảng trống hai bên cho nút điều hướng
  px: { xs: 8, sm: 10, md: 7, lg: 10 },

  pt: { xs: 20, sm: 18, md: 0 },
  pb: { xs: 10, md: 0 },
}}
      >
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <Chip
            label="FEATURED"
            size="small"
            sx={{
              color: "#fff",
              bgcolor: "rgba(229,9,20,0.9)",
              fontWeight: 700,
              letterSpacing: 1,
              borderRadius: 1,
            }}
          />
          {movie.release_date && (
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
              {movie.release_date.slice(0, 4)}
            </Typography>
          )}
        </Stack>

        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.8rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            mb: 2.5,
            textShadow: "0 3px 18px rgba(0,0,0,0.35)",
            overflowWrap: "break-word",
          }}
        >
          {movie.title || movie.name}
        </Typography>

        {movie.vote_average != null && (
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <Typography sx={{ color: "#ffd166", fontWeight: 700 }}>
              ★ {Number(movie.vote_average).toFixed(1)} / 10
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.65)" }}>
              TMDB Rating
            </Typography>
          </Stack>
        )}

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.8,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            maxWidth: 570,
            mb: 3.5,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: { xs: 3, sm: 4 },
            overflow: "hidden",
          }}
        >
          {movie.overview || "Khám phá bộ phim nổi bật ngay hôm nay."}
        </Typography>

        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button
            variant="contained"
            startIcon={<PlayArrowRoundedIcon />}
            onClick={() => {
              // Thêm điều hướng tới trang chi tiết tại đây
            }}
            sx={{
              bgcolor: "#fff",
              color: "#101820",
              px: 3,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 700,
              textTransform: "none",
              "&:hover": { bgcolor: "#e5e7eb" },
            }}
          >
            Watch now
          </Button>

          <Button
            variant="outlined"
            startIcon={<InfoOutlinedIcon />}
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.45)",
              px: 2.5,
              py: 1.2,
              borderRadius: 2,
              textTransform: "none",
              bgcolor: "rgba(255,255,255,0.08)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.16)",
                borderColor: "#fff",
              },
            }}
          >
            View details
          </Button>
        </Stack>
      </Box>

      {/* Điều hướng phim */}
      
      <Button
  aria-label="Previous movie"
  onClick={onPrevious}
  sx={{
    position: "absolute",
    zIndex: 2,
    left: { xs: 12, sm: 20, md: 28 },
    top: "50%",
    transform: "translateY(-50%)",

    minWidth: { xs: 36, sm: 44 },
    width: { xs: 36, sm: 44 },
    height: { xs: 36, sm: 44 },
    p: 0,

    color: "#fff",
    bgcolor: "rgba(0,0,0,0.65)",
    border: "1px solid rgba(255,255,255,0.35)",
    borderRadius: "50%",
    backdropFilter: "blur(6px)",

    "&:hover": {
      bgcolor: "rgba(255,255,255,0.2)",
    },
  }}
>
  <ChevronLeftRoundedIcon />
</Button>

{/* Nút chuyển sang phim tiếp theo, ở góc phải */}
<Button
  aria-label="Next movie"
  onClick={onNext}
  sx={{
    position: "absolute",
    zIndex: 2,
    right: { xs: 12, sm: 20, md: 28 },
    top: "50%",
    transform: "translateY(-50%)",

    minWidth: { xs: 36, sm: 44 },
    width: { xs: 36, sm: 44 },
    height: { xs: 36, sm: 44 },
    p: 0,

    color: "#fff",
    bgcolor: "rgba(0,0,0,0.65)",
    border: "1px solid rgba(255,255,255,0.35)",
    borderRadius: "50%",
    backdropFilter: "blur(6px)",

    "&:hover": {
      bgcolor: "rgba(255,255,255,0.2)",
    },
  }}
>
  <ChevronRightRoundedIcon />
</Button>
    </Box>
  );
};

export default Featured;
