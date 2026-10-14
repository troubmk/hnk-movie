import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MovieSearch = ({ value, onChange, onSubmit }) => {
    return (
       <TextField
         fullWidth
         size="small"
         placeholder="Tìm kiếm phim..."
         value={value} //từ khóa tìm kiếm hiện tại do component cha truyền vào
         onChange={(event) => onChange(event.target.value)}
         onKeyDown={(event) => {
            if (event.key === "Enter") {
              onSubmit(); //được gọi khi nhấn Enter
            }
        }}
        slotProps={{ //đặt kính núp bên trong trường nhập liệu
           input: {
              startAdornment: (
                 <InputAdornment position="start">
                    <SearchIcon />
                 </InputAdornment>
               ),
            },
        }}
     />
    );
};

export default MovieSearch;