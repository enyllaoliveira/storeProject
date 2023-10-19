import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from '../components/header';
import { Recomendations } from '../components/recomendations';
import {Gallery} from '../components/gallery/components/galleryHome'
import {Details} from '../components/details'
import {Contact} from '../components/contact'
import ShelfPage from '../components/gallery/components/galleryShelf/index'
import ShelfWallPage from '../components/gallery/components/shelfWallPage';
import TablePage from '../components/gallery/components/galleryTable';
import RestaurantePage from '../components/gallery/components/galleryToRestaurant';
import OfficePage from '../components/gallery/components/galleryToOffice';

function AppRoutes() {
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Header/>}></Route>
        <Route path='/recomendations' element={ <Recomendations/>}></Route>
        <Route path='/gallery' element={ <Gallery/>}></Route>
        <Route path='/details' element={ <Details/>}></Route>
        <Route path='/contact' element={ <Contact/>}> </Route>
        <Route path='/shelfpage' element={ <ShelfPage/>}> </Route>
        <Route path='/shelfwallpage' element={ <ShelfWallPage/>}> </Route>
        <Route path='/tablepage' element={ <TablePage/>}> </Route>
        <Route path='/restaurantepage' element={ <RestaurantePage/>}> </Route>
        <Route path='/officepage' element={ <OfficePage/>}> </Route>

        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes;
