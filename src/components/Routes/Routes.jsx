import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import {ROUTES} from "../../Utils/routes";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";
import SingleCategory from "../Categories/SingleCategory";
import Cart from "../Cart/Cart";



const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.Product} element={<SingleProduct/>}/>
            <Route path={ROUTES.Profile} element={<Profile/>}/>
            <Route path={ROUTES.Category} element={<SingleCategory/>}/>
            <Route path={ROUTES.Cart} element={<Cart/>}/>
        </Routes>
    );
};

export default AppRoutes;