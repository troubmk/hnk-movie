import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import {
  Drawer,  //ngăn menu trượt ra từ cạnh màn hình 
  List, ListItemButton,//danh sách các mục có thể nhấn
  ListItemText, //văn bản hiển thị trong mục danh sách
  Collapse, //đóng / mở danh sách con
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess"; // biểu tượng thể hiện trạng thái đóng
import ExpandMore from "@mui/icons-material/ExpandMore"; // biểu tượng thể hiện trạng thái mở
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SearchIcon from "@mui/icons-material/Search";

const MainHeader = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const pages = ['Movies', 'TV Shows', 'Awards', 'More'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const movies = ['Popular', 'Top Rated', 'Upcoming', 'Now Playing'];
    const tvShows = ['Popular', 'Top Rated', 'Airing Today', 'On The Air'];
    const awards = ['Oscars', 'Golden Globes', 'BAFTA', 'Emmys'];
    const more = ['News', 'Trailers', 'Interviews', 'Reviews'];

    const subMenus = {
        'Movies': movies,
        'TV Shows': tvShows,
        'Awards': awards,
        'More': more
    };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

 const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
  const [mobileOpen, setMobileOpen] = React.useState(false); //trạng thái mở / đóng của menu di động
  const [expandedMenu, setExpandedMenu] = React.useState(null); //menu hiện tại đang được mở rộng trong menu di động

  const handleOpenMobileMenu = () => {
    setMobileOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setMobileOpen(false);
    setExpandedMenu(null);
  };

  const handleToggleSubMenu = (menu) => { 
    setExpandedMenu((current) =>
    current === menu ? null : menu
    );
  };

//   const theme = createTheme({
//     palette: {
//         mode: 'dark', // Chế độ tối
//         primary: {
//             main: '#1976d2',
//         },

//         background: {
//             default: '#101820',
//             paper: '#1b2631',
//         },
//     },
// });

    return (
     <AppBar 
      position="static"
      sx={{
       bgcolor: "background.paper",
       color: "header.contrastText",
       boxShadow: "0 2px 12px rgba(15,23,42,0.08)",
       borderBottom: "1px solid",
       borderColor: "menu.border",
}}  
     >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* phần logo akatsuki và tên trang */}
         <Box sx={{ display: "flex", alignItems: "center" }}>
           
           <IconButton
             color="inherit"
             aria-label="open navigation menu"
             onClick={handleOpenMobileMenu}
             sx={{ mr: 1, flexShrink: 0 }}
           >
            <MenuIcon />
           </IconButton>

           <IconButton edge="start" color="inherit" aria-label="logo">
               <Logo sx={{ width: 40, height: 40 }} />
           </IconButton>
           <Link to={'/'} style={{
               display: "flex",
               alignItems: "center",
               color: "inherit",
               textDecoration: "none",
           }}>
            <Typography variant="h6">
                  HNK Movie
            </Typography>
           </Link>   
         </Box>

         {/* Thanh tìm kiếm phim */}
<Box
  component="form"
  onSubmit={(event) => {
    event.preventDefault();
    console.log("Từ khóa tìm kiếm:", searchQuery);
  }}
  sx={{
    flex: 1,
    minWidth: 0,
    maxWidth: 420,
    mx: { xs: 1, sm: 2 },
  }}
>
  <TextField
    fullWidth
    size="small"
    value={searchQuery}
    onChange={(event) => setSearchQuery(event.target.value)}
    placeholder="Tìm kiếm phim..."
    aria-label="Tìm kiếm phim"
    sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: 10,
        bgcolor: "background.default",
        color: "primary.contrastText",
        "& fieldset": {
          borderColor: "divider",
        },
        "&:hover fieldset": {
          borderColor: "primary.main",
        },
        "&.Mui-focused fieldset": {
          borderColor: "primary.main",
        },
      },
      "& .MuiInputBase-input": {
        py: 1,
      },
    }}
    slotProps={{
      input: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              type="submit"
              edge="end"
              aria-label="Tìm kiếm"
              size="small"
            >
              <SearchIcon sx={{ color: "primary.contrastText" }} />
            </IconButton>
          </InputAdornment>
        ),
      },
    }}
  />
</Box>

          {/* phần chào mừng người dùng */}
       <Typography  variant="body2"
           sx={{
           ml: "auto",
           mr: 2,
           display: { xs: "none", sm: "block" },
           whiteSpace: "nowrap",
           color: "primary.contrastText",
           fontWeight: 500,
           }}
        >
             Welcome, {user?.username || "User"}!
         </Typography>

          {/* phần menu logout */}
          <Box sx={{ flexGrow: 0 }}>
            
          <Tooltip title="Open settings">
             <IconButton
                onClick={handleOpenUserMenu}
                aria-label="Open user settings"
                sx={{
                 p: 0.5,
                 borderRadius: "50%",
                 "&:hover": {
                   bgcolor: "rgba(100, 181, 246, 0.12)",
                 },
               }}
           >
           <Avatar
             sx={{
               width: 38,
               height: 38,
               bgcolor: "#1b2631",
               color: "#e3f2fd",
               border: "1px solid rgba(144, 202, 249, 0.45)",
               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
               transition: "all 0.2s ease",
               "&:hover": {
                 bgcolor: "#263849",
                 borderColor: "#90caf9",
               },
             }}
            >
          <PlayArrowRoundedIcon
              sx={{
                fontSize: 27,
                ml: "2px",
             }}
          />
         </Avatar>
       </IconButton>
     </Tooltip>

            <Menu
              sx={{ 
                mt: '45px',
                color: "primary.contrastText",
                "&:hover": {
                 bgcolor: "menu.hover",
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} 
                onClick={()=>{
                    handleCloseUserMenu();
                     if (setting === 'Logout') {
                      logout();
                      navigate('/login');
                    }
                }}>
                  <Typography sx={{ textAlign: 'center', color: 'primary.contrastText' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>

      {/* Drawer nằm đây do nó ngang hàng với content */}
       <Drawer
      anchor="left"
      open={mobileOpen}
      onClose={handleCloseMobileMenu}
      sx={{
        "& .MuiDrawer-paper": {
         width: 280,
         boxSizing: "border-box",
         bgcolor: "menu.main",
         color: "primary.contrastText",
         borderRight: "1px solid",
         borderColor: "menu.border",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">
          HNK Movie
        </Typography>
      </Box>

      <List>
        {pages.map((page) => (
          <Box key={page}>
            <ListItemButton
              onClick={() => handleToggleSubMenu(page)}
            >
              <ListItemText primary={page} />

              {expandedMenu === page ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItemButton>

            <Collapse
              in={expandedMenu === page}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {(subMenus[page] || []).map((subMenu) => (
                  <ListItemButton
                    key={subMenu}
                    sx={{ pl: 4 }}
                    onClick={handleCloseMobileMenu}
                  >
                    <ListItemText primary={subMenu} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Drawer>
    </AppBar>
  );
};

export default MainHeader;



  