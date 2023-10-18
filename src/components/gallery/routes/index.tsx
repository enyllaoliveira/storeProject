import {BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ShelfPage from "../components/galleryShelf";
import ShelfWallPage from "../components/shelfWallPage";
import TablePage from "../components/galleryTable";
import OfficePage from "../components/galleryToOffice";
import RestaurantePage from "../components/galleryToRestaurant";

export default function GalleryRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/shelfpage" element={<ShelfPage/>} />
                <Route path="/shelfwallpage" element={<ShelfWallPage/>} />
                <Route path="/tablepage" element={<TablePage/>} />
                <Route path="/officepage" element={<OfficePage/>} />
                <Route path="/restaurantepage" element={<RestaurantePage/>} />
            </Routes>
        </BrowserRouter>
    );
}
