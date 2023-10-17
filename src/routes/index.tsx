import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from '../components/header';
import { RecomedationsPF } from '../components/recomendations'
import {Gallery} from '../components/gallery'
import {Details} from '../components/details'
import {Contact} from '../components/contact'

export default function AppWithRoutes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/recomendationsPF" element={<RecomedationsPF />} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/details" element={<Details/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    );
}





