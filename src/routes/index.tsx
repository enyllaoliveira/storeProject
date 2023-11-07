import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ShelfPage from '../../src/components/gallery/Pages/shelfPage';
import ShelfWallPage from '../components/gallery/Pages/shelfWallPage';
import TablePage from '../components/gallery/Pages/tablePage';
import RestaurantePage from '../components/gallery/Pages/restaurantePage';
import OfficePage from '../components/gallery/Pages/officePage';
import MainLayout from '../components/mainLayout';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
        </Route>
        <Route path='/shelfpage' element={<ShelfPage/>} />
        <Route path='/shelfwallpage' element={<ShelfWallPage/>} />
        <Route path='/tablepage' element={<TablePage/>} />
        <Route path='/restaurantepage' element={<RestaurantePage/>} />
        <Route path='/officepage' element={<OfficePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;