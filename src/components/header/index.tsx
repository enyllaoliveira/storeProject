import React from "react";
import { Link } from "react-router-dom";
import { Recomendations } from "../recomendations";
import { Gallery } from "../gallery/Pages/HomePage";
import { Details } from "../details";
import { Contact } from "../contact";

export function Header() {
    return (
        <div className="flex flex-col">

            <div className="flex flex-row py-6 justify-around">
            <Link to='/'>
            <section> Espaço para Logo</section>
            </Link>

            <div>
            <button className="cursor-pointer hover:py-2 px-4 bg-green-500 rounded-lg">Faça seu orçamento pelo WhatsApp</button>
            </div>

            <div>
            <nav className="flex flex-col">
                <Link to='/recomendations'>Recomendações </Link>
                <Link to='/gallery'>Galeria de fotos </Link>
                <Link to='/details'>Descrição do produto </Link>
                <Link to='/contact'>Contato</Link>
            </nav>
            </div>
            </div>

            <Recomendations/>
            <Gallery/>
            <Details/>
            <Contact/>
            <hr />
        </div>
    );
}

