
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Logo from "../components/Logo";

function BlankLayout() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
                py: 4,
                boxSizing: "border-box",
            }}
        >
            <Stack
                direction="column"
                spacing={3}
                alignItems="center"
                sx={{
                    width: "100%",
                    maxWidth: 420,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Logo
                        sx={{
                            width: { xs: 140, sm: 170 },
                            height: { xs: 140, sm: 170 },
                        }}
                    />
                </Box>

                <Box sx={{ width: "100%" }}>
                    <Outlet />
                </Box>
            </Stack>
        </Box>
    );
}

export default BlankLayout;
