import React from "react";

export function Header() {
    return (
        <div className="flex py-6 justify-around">

            <div> seção para a logo </div>
            
            <button className="cursor-pointer hover:py-10 px-4 bg-green-500 rounded-lg"> Faça seu orçamento pelo WhatsApp</button>
            
            <ul>
            <li className="flex flex-col "> 
             <a className="cursor-pointer "> Recomendações </a>
             <a className="cursor-pointer"> Galeria de fotos </a>
             <a className="cursor-pointer"> Descrição do produto </a>
             <a className="cursor-pointer"> Contato </a>
            </li>   
            </ul>
        <hr/>
        </div>
   
    )
}
