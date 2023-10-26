import React, {forwardRef, useRef} from "react";
import { Link, Outlet, Route } from "react-router-dom";
import { Header } from "../header";
import { Gallery } from "../gallery/Pages/HomePage";
import { Recomendations } from "../recomendations";
import { Details } from "../details";
import { Contact } from "../contact";

const MainLayout = () => {
    const scrollRecomendation = useRef<HTMLInputElement>(null)
    const scrollGallery = useRef<HTMLInputElement>(null)
    const scrollDetails = useRef<HTMLInputElement>(null)
    const scrollContact = useRef<HTMLInputElement>(null)
    
    return (
        <div className="flex flex-col">
        {/* <Header/>  */}
        <button onClick={() => scrollRecomendation.current?.scrollIntoView()}>
            Recomendações
        </button>
        <button onClick={() => scrollGallery.current?.scrollIntoView()}>
            Galeria de fotos
        </button>

        <button onClick={() => scrollDetails.current?.scrollIntoView()}>
            Detalhes do produto
        </button>

        <button onClick={() => scrollContact.current?.scrollIntoView()}>
            Contato
        </button>

        <section ref={scrollRecomendation}>
        <Recomendations/>
        </section> 
        <section ref={scrollGallery}>
        <Gallery />
        </section>
        <section ref={scrollDetails}>
            <Details/>
        </section>
        
        <section ref={scrollContact}>
        <Contact/>
        </section>
        </div>
    );
}

export default MainLayout


