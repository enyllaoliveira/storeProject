import React, {useRef} from "react";
import { Link } from "react-router-dom";

export function Header() {
    const scrollRecomendation = useRef<HTMLInputElement>(null)
    const scrollGallery = useRef<HTMLInputElement>(null)
    const scrollDetails = useRef<HTMLInputElement>(null)
    const scrollContact = useRef<HTMLInputElement>(null)

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
            {/* <Link to="/recomendations">Recomendações</Link>
            <Link to="/gallery" >Galeria de fotos</Link>
            <Link to="/details">Descrição do produto</Link>
            <Link to="/contact">Contato</Link> */}
             </nav>
            </div>
            </div>

            <hr />
        </div>
    );
}

