import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from '../components/header';
import { Recomendations } from '../components/recomendations';
import {Gallery} from '../components/gallery/Pages/HomePage'
import {Details} from '../components/details'
import {Contact} from '../components/contact'
import ShelfPage from '../../src/components/gallery/Pages/shelfPage'
import ShelfWallPage from '../components/gallery/Pages/shelfWallPage';
import TablePage from '../components/gallery/Pages/tablePage';
import RestaurantePage from '../components/gallery/Pages/restaurantePage';
import OfficePage from '../components/gallery/Pages/officePage';

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
