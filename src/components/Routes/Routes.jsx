import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import {ROUTES} from "../../Utils/routes";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";



const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.Product} element={<SingleProduct/>}/>
            <Route path={ROUTES.Profile} element={<Profile/>}/>
        </Routes>
    );
};

export default AppRoutes;