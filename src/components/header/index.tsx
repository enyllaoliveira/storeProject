import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { ItemNav } from "../../interfaces/ItemNav";

export interface ChildProps{
    onClick: (name: ItemNav) => void
}

export function Header( props: ChildProps) { 
        const callback = (name: ItemNav) => {
         props.onClick(name)
}  

    return (
            <div className="flex flex-row">
        
        <div>
            
        </div>
            <section className="hover:underline cursor-pointer font-bold text-white mb-2"> Espaço para Logo</section>

            <nav className="flex flex-col ">
            <button className="hover:underline cursor-pointer font-bold text-white mb-2" onClick={() => callback({type:'1'})}>
            Recomendações
            </button>
            
            <button className="hover:underline cursor-pointer font-bold text-white mb-2" onClick={() => callback({type:'2'})}>
            Galeria de fotos
            </button>

            <button className="hover:underline cursor-pointer font-bold text-white mb-2" onClick={() => callback({type:'3'})}>
            Detalhes do produto
            </button>

            <button  className="hover:underline cursor-pointer font-bold text-white mb-2" onClick={() => callback({type:'4'})}>
            Contato
            </button>

           </nav>
            </div>
    );
}

