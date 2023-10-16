import React from 'react';
import { Header } from './components/header';
import { RecomedationsPF } from './components/recomendationsPF';
import { Gallery } from './components/gallery';
import { Details } from './components/details';
import { RecomedationsPJ } from './components/recomendationsPJ';
import { Contact } from './components/contact';


function App() {
  return (
    <div>
    <Header/>
    <RecomedationsPF/>
    <Gallery/>
    <Details/>
    <RecomedationsPJ/>
    <Contact/>
    </div>
  );
}

export default App;
