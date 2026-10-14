import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRequire from "./AuthRequire";
import BlankLayout from "../layouts/BlankLayout";

const Router = () => {
    return (
        <Routes>

            {/* Main layout */}
            <Route
                path="/"
                element={
                    <AuthRequire>
                        <MainLayout />
                    </AuthRequire>
                }
            >
                <Route index element={<HomePage />} />
                <Route path="detail/:type/:id" element={<DetailPage />} />
            </Route>


            {/* Blank layout */}
            <Route element={<BlankLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>

        </Routes>
    );
};

export default Router;