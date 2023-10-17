import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="flex py-6 justify-around">
            <div>seção para a logo</div>
            <button className="cursor-pointer hover:py-10 px-4 bg-green-500 rounded-lg">Faça seu orçamento pelo WhatsApp</button>
            <nav>
                <ul>
                    <li><Link to="/recomendationsPF">Recomendações</Link></li>
                    <li><Link to="/gallery">Galeria de fotos</Link></li>
                    <li><Link to="/details">Descrição do material</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
            <hr />
        </div>
    );
}

