import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from '../components/header';
import { Recomendations } from '../components/recomendations';
import {Gallery} from '../components/gallery/components/galleryHome'
import {Details} from '../components/details'
import {Contact} from '../components/contact'
import ShelfPage from '../components/gallery/components/galleryShelf/index'

const AppRoutes = () => {
        return (
        <BrowserRouter>
            <Routes>
            <Route element={<ShelfPage/>} path="/shelfpage"/>
            </Routes>
        </BrowserRouter>
        );
} 

export default AppRoutes



