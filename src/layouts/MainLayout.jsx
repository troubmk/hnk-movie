import {Outlet} from "react-router-dom";
import {Box, Stack} from "@mui/material";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const MainLayout = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <MainHeader />
            <Stack component="main" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Stack>
            <MainFooter />
        </Box>
    );
};

export default MainLayout;