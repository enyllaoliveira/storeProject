import React from 'react';
import { Header } from './components/header';
import { RecomedationsPF} from './components/recomendations';
import {Gallery} from './components/gallery';
import {Details} from './components/details';
import {Contact} from './components/contact';

export default function App() {
    return (
        <div>
        <Header/>
        <RecomedationsPF/>
        <Gallery/>
        <Details/>
        <Contact/>
        </div>
    );
}