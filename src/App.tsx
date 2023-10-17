import React from 'react';
import { Header } from './components/header';
import { Recomendations} from './components/recomendations';
import {Gallery} from './components/gallery';
import {Details} from './components/details';
import {Contact} from './components/contact';

export default function App() {
    return (
        <div>
        <Header/>
        <Recomendations/>
        <Gallery/>
        <Details/>
        <Contact/>
        </div>
    );
}