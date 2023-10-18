import React from 'react';
import { Header } from './components/header';
import { Recomendations} from './components/recomendations';
import {Gallery} from './components/gallery/components/galleryHome';
import {Details} from './components/details';
import {Contact} from './components/contact';
import AppRoutes from './routes';

export default function App() {
    return (
        <div>
        <AppRoutes/>
        <Recomendations/>
        <Gallery/>
        <Details/>
        <Contact/>
        </div>
    );
}